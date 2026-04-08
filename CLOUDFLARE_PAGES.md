# Cloudflare Pages

## Recomendacion de dominio

Mi recomendacion principal para este proyecto es usar un dominio `.es`, corto y facil de recordar.

Opciones que me parecen buenas:

1. `adampeluqueria.es`
2. `adambarberbilbao.es`
3. `peluqueroadomiciliobilbao.es`

Recomendacion final:

- Compra `adampeluqueria.es` si quieres construir marca.
- Compra `peluqueroadomiciliobilbao.es` solo si priorizas SEO local por encima de marca.

Para Google Ads, normalmente prefiero una marca sencilla antes que un dominio demasiado generico.

## Donde comprarlo

La opcion mas simple para este proyecto es `Cloudflare Registrar`.

Motivos:

- Lo gestionas todo en el mismo sitio: dominio, DNS y hosting.
- Cloudflare cobra el dominio a coste, sin sobreprecio del registrador.
- Te activa SSL y DNSSEC de forma sencilla.

## Datos que necesitas antes de comprar el dominio

Cloudflare te pedira datos reales de contacto para registrar el dominio.

Prepara esto antes de empezar:

- nombre y apellidos
- email real que puedas verificar
- telefono
- direccion completa
- ciudad
- provincia
- pais
- codigo postal

Importante:

- Cloudflare exige tener el email de la cuenta verificado.
- El registrante del dominio tambien debe verificar su email para evitar bloqueos del dominio.
- Los datos de contacto deben ser completos y correctos.

## Antes de desplegar

Rellena estos datos en Cloudflare Pages como variables de entorno:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`

Ejemplo:

```txt
NEXT_PUBLIC_SITE_URL=https://adampeluqueria.es
NEXT_PUBLIC_CONTACT_EMAIL=hola@adampeluqueria.es
```

## Opcion A: despliegue recomendado con GitHub

Es la mejor opcion si luego vas a hacer cambios y quieres que se publiquen solos.

### 1. Sube el proyecto a GitHub

Si todavia no lo has hecho:

1. Crea una cuenta en GitHub.
2. Crea un repositorio nuevo.
3. Sube este proyecto.

## 2. Crea el proyecto en Cloudflare Pages

1. Entra en Cloudflare.
2. Ve a `Workers & Pages`.
3. Pulsa `Create application`.
4. Elige `Pages`.
5. Elige `Connect to Git`.
6. Autoriza GitHub y selecciona tu repositorio.

## 3. Configuracion del build

Usa estos valores:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npx next build`
- Build output directory: `out`
- Root directory: dejar vacio si el proyecto esta en la raiz

## 4. Variables de entorno

En `Settings > Environment variables`, anade:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`

## 5. Despliega

1. Pulsa `Save and Deploy`.
2. Espera a que termine el primer build.
3. Abrira una URL tipo `tu-proyecto.pages.dev`.

## Opcion B: despliegue rapido sin GitHub

Usala solo si quieres publicar hoy mismo desde tu ordenador.

Importante:

- Si creas el proyecto con `Direct Upload`, luego no puedes convertir ese mismo proyecto a `Git integration`.
- Si mas adelante quieres GitHub, tendras que crear un proyecto nuevo en Pages.

Pasos:

1. En tu ordenador, ejecuta `npm.cmd run build`.
2. Comprueba que existe la carpeta `out`.
3. En Cloudflare, ve a `Workers & Pages`.
4. Pulsa `Create application`.
5. Elige `Pages`.
6. Elige `Direct Upload`.
7. Sube la carpeta `out` o un `.zip` de esa carpeta.

## Como conectar tu dominio

Si compras el dominio en Cloudflare Registrar:

1. Ve a `Domain Registration`.
2. Busca el dominio que quieras.
3. Compralo.
4. En `Workers & Pages`, entra en tu proyecto.
5. Ve a `Custom domains`.
6. Pulsa `Set up a custom domain`.
7. Escribe tu dominio.
8. Cloudflare configurara los DNS automaticamente si el dominio esta en tu cuenta.

## Email profesional barato

La opcion mas barata para empezar es usar `Cloudflare Email Routing`.

Ejemplo:

- `hola@adampeluqueria.es`
- `citas@adampeluqueria.es`

Funcionamiento:

- Tu publicas un email con tu dominio.
- Cloudflare reenvia esos correos a tu Gmail personal.
- No necesitas pagar Google Workspace al principio.

Pasos:

1. Compra y activa el dominio.
2. Entra en `Email Routing` dentro de Cloudflare.
3. Crea una direccion como `hola`.
4. Pon como destino tu Gmail real.
5. Verifica ese Gmail.
6. Copia ese correo final en `NEXT_PUBLIC_CONTACT_EMAIL`.

## Registros recomendados

Cuando tengas el dominio:

- Dominio principal: `adampeluqueria.es`
- Redireccion opcional: `www.adampeluqueria.es` al dominio principal

## Que revisar antes de lanzar Google Ads

1. Que el telefono y WhatsApp respondan.
2. Que el dominio final este puesto en `NEXT_PUBLIC_SITE_URL`.
3. Que haya un email real de contacto.
4. Que el aviso legal y la privacidad esten actualizados cuando dejes de estar en pruebas.
5. Que no actives tags de Google Ads o analytics sin revisar cookies y consentimiento.
