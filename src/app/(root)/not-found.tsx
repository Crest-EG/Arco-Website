import Link from 'next/link';

export default function RootNotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ background: '#FFFFFF', color: '#000000', fontFamily: 'Arial, sans-serif', padding: '48px' }}>
        <main>
          <h1>الصفحة غير موجودة</h1>
          <p>ربما نُقل الرابط أو لم يعد متاحًا.</p>
          <Link href="/ar" style={{ display: 'inline-block', background: '#8DC63F', color: '#000000', borderRadius: '999px', padding: '12px 20px' }}>العودة للرئيسية</Link>
        </main>
      </body>
    </html>
  );
}
