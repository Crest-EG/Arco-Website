'use client';

import Image from 'next/image';

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ background: '#FFFFFF', color: '#000000', fontFamily: 'Arial, sans-serif', padding: '48px' }}>
        <main style={{ maxWidth: '640px', marginInline: 'auto', paddingBlock: '8vh' }}>
          <Image src="/logo/arco-full-black.svg" alt="اركو للكيماويات | Arco Chemicals" width={190} height={72} priority />
          <h1 style={{ marginBlock: '40px 10px' }}>حدث خطأ غير متوقع</h1>
          <p>يرجى المحاولة مرة أخرى أو العودة إلى الصفحة الرئيسية.</p>
          <div lang="en" dir="ltr">
            <h2>Something went wrong</h2>
            <p>Please try again or return to the home page.</p>
          </div>
          <button type="button" onClick={reset} style={{ background: '#8DC63F', color: '#000000', border: 0, borderRadius: '999px', padding: '12px 20px', cursor: 'pointer' }}>
            حاول مرة أخرى · Try again
          </button>
        </main>
      </body>
    </html>
  );
}
