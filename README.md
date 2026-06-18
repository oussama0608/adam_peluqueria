# Adam Peluqueria

Web local SEO para un servicio de peluqueria y barberia a domicilio con base en Bilbao.

El proyecto ya no esta planteado como una landing centrada en Google Ads. La arquitectura actual
prioriza trafico organico local, Google Business Profile, Google Maps, llamadas y contactos por
WhatsApp.

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Static export para Cloudflare Pages

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`:

```bash
npm.cmd run lint
npm.cmd run build
```

## Architecture

- `/`: home local con servicios, zonas, fotos reales, GBP y FAQs.
- `/servicios`: hub de servicios.
- `/servicios/barberia-a-domicilio`
- `/servicios/peluqueria-mayores-movilidad-reducida`
- `/servicios/residencias`
- `/servicios/hoteles-oficinas-eventos`
- `/zonas`: cobertura principal y municipios pendientes de confirmacion.
- `/sobre-adam`: confianza, enfoque y datos pendientes.
- `/contacto`: WhatsApp, telefono, horario, email y Google Maps.
- `/guias`: hub de contenidos.
- `/guias/preparar-corte-a-domicilio-bilbao`
- `/aviso-legal`, `/privacidad`, `/cookies`

## Configuration

Set these variables in deployment:

```txt
NEXT_PUBLIC_SITE_URL=https://adampeluqueria.com
NEXT_PUBLIC_CONTACT_EMAIL=hola@adampeluqueria.com
NEXT_PUBLIC_LEGAL_NAME=
NEXT_PUBLIC_LEGAL_ADDRESS=
NEXT_PUBLIC_SERVICE_ADDRESS=
NEXT_PUBLIC_OPENING_HOURS=
NEXT_PUBLIC_PROFESSIONAL_CREDENTIALS=
NEXT_PUBLIC_GOOGLE_MAPS_URL=
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
LEGAL_TAX_ID=
NEXT_PUBLIC_GOOGLE_TAG_ID=
NEXT_PUBLIC_GOOGLE_WHATSAPP_CONVERSION_ID=
NEXT_PUBLIC_GOOGLE_PHONE_CONVERSION_ID=
```

Business data, services, routes, FAQs, zones and image references live in `lib/site.ts`.

## SEO and tracking notes

- Pages include canonical metadata, Open Graph data and JSON-LD where appropriate.
- `sitemap.xml` is generated from the route registry in `lib/site.ts`.
- Google Tag is not loaded until the visitor accepts non-essential cookies.
- Consent Mode v2 fields are prepared before loading Google tags.
- WhatsApp and phone clicks are tracked only when `gtag` is available and loaded.

## TODO before production

- Confirm legal name, tax ID, legal address and public email.
- Confirm real opening hours and service areas.
- Confirm whether Barakaldo, Getxo, Basauri and Portugalete are actually served.
- Confirm prices, displacement supplements and service conditions.
- Provide Google Maps / Google Business Profile URL.
- Add Search Console verification token.
- Confirm professional credentials, experience, insurance or certifications before publishing them.
- Add more real photos of home, hotel, office or residence services.
