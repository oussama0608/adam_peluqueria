import ServiceDetailPage from "@/components/ServiceDetailPage";
import { createMetadata } from "@/lib/seo";
import { getRoute, getService } from "@/lib/site";

const service = getService("residencias");
const route = getRoute(service.href)!;

export const metadata = createMetadata({
  title: route.title,
  description: route.description,
  path: route.href,
  image: service.image,
});

export default function ResidenciasPage() {
  return (
    <ServiceDetailPage service={service}>
      <h2>Por que una residencia necesita una pagina propia</h2>
      <p>
        Una residencia no busca lo mismo que un particular. Normalmente necesita coordinar varios
        servicios, respetar horarios internos, disponer de un espacio adecuado y asegurarse de que
        la comunicacion sea clara antes de la visita.
      </p>
      <p>
        Por eso esta pagina no repite simplemente una busqueda generica de peluquero a domicilio
        en Bilbao. Explica como se podria organizar una visita para varios residentes y que datos
        hacen falta para preparar un presupuesto realista.
      </p>

      <h2>Datos necesarios para valorar una visita</h2>
      <ul>
        <li>Numero aproximado de residentes o usuarios.</li>
        <li>Tipo de servicio: corte basico, mantenimiento, barba o combinaciones.</li>
        <li>Franja horaria disponible y duracion maxima de la visita.</li>
        <li>Condiciones del espacio: silla, luz, enchufe, limpieza y acceso.</li>
        <li>Documentacion requerida por el centro, si aplica.</li>
      </ul>

      <h2>Organizacion y presupuesto</h2>
      <p>
        Las visitas a residencias deben presupuestarse segun volumen, desplazamiento y tiempos. La
        web deja este punto abierto porque no seria serio publicar un precio cerrado sin conocer el
        numero de personas ni las condiciones del centro.
      </p>
    </ServiceDetailPage>
  );
}
