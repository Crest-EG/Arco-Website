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
  try {
    if (!e || !e.parameter || !e.parameter.payload) {
      throw new Error('Missing inquiry payload.');
    }

    const inquiry = JSON.parse(e.parameter.payload);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Inquiries');
    if (!sheet) {
      throw new Error('The Inquiries worksheet was not found.');
    }

    sheet.appendRow([
      inquiry.timestamp || new Date().toISOString(),
      inquiry.locale || '',
      inquiry.name || '',
      inquiry.email || '',
      inquiry.phone || '',
      inquiry.message || '',
      inquiry.productName || '',
      inquiry.country || '',
      inquiry.channel || 'whatsapp'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error(error);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error.message || error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
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

If you change the Apps Script, create a new deployment version and update the endpoint if Google provides a new URL. Since this public endpoint accepts form submissions, monitor the sheet for unwanted entries and limit spreadsheet access to trusted staff.
