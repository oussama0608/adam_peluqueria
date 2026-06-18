# Adam Peluqueria

Web local SEO para el servicio de peluqueria y barberia exclusivamente a domicilio de Adam
Messaoudi en Bilbao y alrededores.

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
- `/zonas`: cobertura general en Bilbao y alrededores.
- `/sobre-adam`: confianza, enfoque y datos confirmados.
- `/contacto`: WhatsApp, telefono, horario, email y Google Maps.
- `/guias`: hub de contenidos.
- `/guias/preparar-corte-a-domicilio-bilbao`
- `/aviso-legal`, `/privacidad`, `/cookies`

## Configuration

Set these variables in deployment:

```txt
NEXT_PUBLIC_SITE_URL=https://adampeluqueria.com
NEXT_PUBLIC_CONTACT_EMAIL=adammessaoudi2000@outlook.com
NEXT_PUBLIC_LEGAL_NAME=Adam Messaoudi
NEXT_PUBLIC_LEGAL_ADDRESS=
NEXT_PUBLIC_SERVICE_ADDRESS=Servicio exclusivamente a domicilio. No existe local abierto al publico.
NEXT_PUBLIC_OPENING_HOURS=Horario de atencion: 10:00-21:00, con cita previa
NEXT_PUBLIC_PROFESSIONAL_CREDENTIALS=
NEXT_PUBLIC_GOOGLE_MAPS_URL=https://maps.app.goo.gl/ebmWQhwM8CENDJYv6
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
LEGAL_TAX_ID=Y7721001F
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

## Datos confirmados

- Titular: Adam Messaoudi.
- NIF/NIE: Y7721001F.
- Email: adammessaoudi2000@outlook.com.
- Telefono y WhatsApp: 674 205 719.
- Horario de atencion: 10:00-21:00, con cita previa.
- Modalidad: servicio exclusivamente a domicilio, sin local abierto al publico.
- Zona general: Bilbao y alrededores.
- Precios: mayores, corte y barba 30 €; profesionales 25 €; otros servicios desde 20 €.
- Residencias, hoteles, oficinas, eventos o grupos: solicitar presupuesto si el alcance puede variar.

## Pendientes

- Anadir codigo de verificacion de Google Search Console.
- Confirmar dias concretos de apertura si son necesarios.
- Confirmar credenciales profesionales antes de publicarlas.
- Confirmar seguro o certificaciones antes de publicarlos.
- Confirmar direccion fiscal solo si legalmente es imprescindible publicarla.
- Confirmar municipios especificos atendidos dentro de Bilbao y alrededores.
