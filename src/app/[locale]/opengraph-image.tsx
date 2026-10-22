import { ImageResponse } from 'next/og';

import { site } from '@/data/site';

export const alt = `${site.name} - ${site.baseline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#FBF7F0',
          backgroundImage:
            'radial-gradient(circle at 15% 15%, rgba(212,175,55,0.20) 0%, rgba(212,175,55,0) 45%), radial-gradient(circle at 90% 85%, rgba(212,175,55,0.16) 0%, rgba(212,175,55,0) 50%)',
          padding: '80px',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 48,
            left: 80,
            display: 'flex',
            alignItems: 'center',
            gap: 16
          }}
        >
          <div style={{ width: 48, height: 2, backgroundColor: '#D4AF37' }} />
          <div
            style={{
              fontSize: 20,
              letterSpacing: 8,
              textTransform: 'uppercase',
              color: '#9A9A9A'
            }}
          >
            Clinique privée - Tunisie
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1,
              letterSpacing: 10,
              color: '#2B2B2B'
            }}
          >
            LUMEA
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 30,
              letterSpacing: 14,
              color: '#D4AF37'
            }}
          >
            CLINIQUE
          </div>
        </div>

        <div
          style={{
            marginTop: 46,
            width: 120,
            height: 2,
            backgroundColor: '#D4AF37'
          }}
        />

        <div
          style={{
            marginTop: 34,
            fontSize: 32,
            lineHeight: 1.35,
            color: '#6B6B6B',
            maxWidth: 820
          }}
        >
          {site.baseline}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 52,
            left: 80,
            right: 80,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 22,
            color: '#9A9A9A',
            letterSpacing: 3
          }}
        >
          <div>Médecine - Chirurgie - Maternité - Imagerie</div>
          <div>www.lumea-clinique.com</div>
        </div>
      </div>
    ),
    size
  );
}
