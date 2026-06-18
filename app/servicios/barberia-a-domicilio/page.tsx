import ServiceDetailPage from "@/components/ServiceDetailPage";
import { createMetadata } from "@/lib/seo";
import { getRoute, getService } from "@/lib/site";

const service = getService("barberia-domicilio");
const route = getRoute(service.href)!;

export const metadata = createMetadata({
  title: route.title,
  description: route.description,
  path: route.href,
  image: service.image,
});

export default function BarberiaDomicilioPage() {
  return (
    <ServiceDetailPage service={service}>
      <h2>Cuando tiene sentido pedir barberia a domicilio</h2>
      <p>
        La barberia a domicilio no sustituye siempre a una visita tradicional, pero resuelve muy
        bien situaciones concretas: una agenda apretada, dificultad para desplazarse, una cita antes
        de una reunion o la necesidad de atender a alguien en casa con calma.
      </p>
      <p>
        En Bilbao muchas busquedas locales no vienen de quien quiere comparar decenas de barberias,
        sino de quien necesita una solucion cercana y directa. Por eso esta pagina explica el
        servicio con claridad: que se puede hacer, que debe confirmarse y que datos hacen falta para
        valorar la cita.
      </p>

      <h2>Que conviene indicar en el primer mensaje</h2>
      <ul>
        <li>Zona o barrio de Bilbao donde seria la visita.</li>
        <li>Tipo de servicio: corte, barba, mantenimiento o combinacion.</li>
        <li>Dia y franja horaria aproximada.</li>
        <li>Si hay limitaciones de espacio, movilidad, acceso o aparcamiento.</li>
      </ul>

      <h2>Acabado y expectativas</h2>
      <p>
        Lo mas importante es llegar con una referencia clara. Puede ser una foto de un corte previo,
        una descripcion sencilla o una explicacion de lo que no quieres repetir. Adam confirmara si
        el estilo encaja con el tiempo, material y condiciones del lugar.
      </p>
    </ServiceDetailPage>
  );
}
