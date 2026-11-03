# Google Sheets inquiry setup

The contact form can send a copy of each inquiry to a Google Sheet. It then opens WhatsApp immediately; the site does not wait for the sheet request to finish. If no endpoint is configured or the request fails, the visitor can still send the message through WhatsApp.

## 1. Create the spreadsheet

1. Create a Google spreadsheet for Arco Chemicals inquiries.
2. Rename the first worksheet to `Inquiries`.
3. Add this header row in row 1, in the same order:

   `Timestamp | Locale | Name | Email | Phone | Message | Product | Country | Channel`

## 2. Add the Apps Script

1. In the spreadsheet, open **Extensions → Apps Script**.
2. Replace the editor contents with the script below.
3. Save the project.

```javascript
function doPost(e) {
  const respond = () => ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);

  try {
    const rawPayload = e && e.parameter && e.parameter.payload;
    if (!rawPayload) return respond();

    const inquiry = JSON.parse(rawPayload);
    if (!inquiry || typeof inquiry !== 'object' || Array.isArray(inquiry)) return respond();

    // Ignore automated submissions caught by the hidden form field.
    if (typeof inquiry.website === 'string' && inquiry.website.trim()) return respond();

    const name = cleanCell(inquiry.name, 120);
    const email = cleanCell(inquiry.email, 254);
    const phone = cleanCell(inquiry.phone, 40);
    const message = cleanCell(inquiry.message, 5000);
    const product = cleanCell(inquiry.productName, 200);
    const country = cleanCell(inquiry.country, 100);

    if (!name || !message || (!email && !phone)) return respond();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return respond();

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet && spreadsheet.getSheetByName('Inquiries');
    if (!sheet) return respond();

    const lock = LockService.getScriptLock();
    if (!lock.tryLock(10000)) return respond();
    try {
      sheet.appendRow([
        new Date(),
        inquiry.locale === 'ar' || inquiry.locale === 'en' ? inquiry.locale : '',
        name,
        email,
        phone,
        message,
        product,
        country,
        inquiry.channel === 'email' ? 'email' : 'whatsapp'
      ]);
    } finally {
      lock.releaseLock();
    }

    return respond();
  } catch (error) {
    // Keep malformed requests and storage failures from producing an error response.
    console.error('Inquiry processing failed:', error);
    return respond();
  }
}

function cleanCell(value, maxLength) {
  if (typeof value !== 'string') return '';

  let text = value.replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, maxLength);
  if (/^[=+\-@]/.test(text)) text = "'" + text;
  return text;
}
```

## 3. Deploy as a web app

1. Select **Deploy → New deployment**.
2. Choose **Web app** as the deployment type.
3. Set **Execute as** to your account.
4. Set access to **Anyone** so the public website can submit inquiries.
5. Deploy and authorize the requested spreadsheet access.
6. Copy the deployed web app URL (the URL ending in `/exec`).
7. Set it as `NEXT_PUBLIC_SHEET_ENDPOINT` in `.env.local` for local work and in the Vercel project's environment variables for each required environment.

Invalid or automated submissions are ignored, and the script returns the same generic response rather than an error. If writing to the sheet fails, the visitor can still continue with WhatsApp or email; check Apps Script execution logs to diagnose the issue. If you change the Apps Script, create a new deployment version and update the endpoint if Google provides a new URL. Since this public endpoint accepts form submissions, monitor the sheet for unwanted entries and limit spreadsheet access to trusted staff.
