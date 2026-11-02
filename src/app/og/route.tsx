/* eslint-disable @next/next/no-img-element */
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const logo = await readFile(join(process.cwd(), 'public/logo/arco-full-black.svg'));
  const logoData = `data:image/svg+xml;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', background: '#FFFFFF', color: '#000000', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', position: 'absolute', width: 490, height: 490, borderRadius: '50%', background: '#8DC63F', insetInlineEnd: -70, top: 110 }} />
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', width: '100%', padding: '72px 88px' }}>
          <img src={logoData} alt="Arco Chemicals logo" width="330" height="125" />
          <div style={{ display: 'flex', maxWidth: 850, marginTop: 32, fontSize: 50, fontWeight: 700 }}>
            Arco Chemicals · Agricultural products made in Egypt
          </div>
          <div style={{ display: 'flex', marginTop: 18, fontSize: 30 }}>Agricultural products · Alexandria, Egypt</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
