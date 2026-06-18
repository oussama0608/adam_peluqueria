import ServiceDetailPage from "@/components/ServiceDetailPage";
import { createMetadata } from "@/lib/seo";
import { getRoute, getService } from "@/lib/site";

const service = getService("mayores-movilidad");
const route = getRoute(service.href)!;

export const metadata = createMetadata({
  title: route.title,
  description: route.description,
  path: route.href,
  image: service.image,
});

export default function MayoresMovilidadPage() {
  return (
    <ServiceDetailPage service={service}>
      <h2>Una solucion practica para familias y cuidadores</h2>
      <p>
        Para una persona mayor, ir a una peluqueria puede ser mas dificil de lo que parece:
        desplazamiento, espera, ruido, escalones o cansancio. Un servicio a domicilio permite
        mantener el cuidado personal sin convertirlo en una salida complicada.
      </p>
      <p>
        Esta pagina esta pensada para busquedas de familiares que necesitan resolver algo concreto:
        cortar el pelo a un padre, madre o familiar en Bilbao, coordinar una visita tranquila y
        saber antes de confirmar si el servicio encaja con la situacion.
      </p>

      <h2>Informacion que ayuda a preparar la visita</h2>
      <ul>
        <li>Si la persona puede sentarse en una silla estable durante el servicio.</li>
        <li>Si necesita pausas, ayuda para moverse o presencia de un familiar.</li>
        <li>El estilo de corte habitual o una foto de referencia.</li>
        <li>Ubicacion aproximada y accesibilidad del edificio.</li>
      </ul>

      <h2>Limites claros</h2>
      <p>
        Este servicio es de peluqueria y barberia. No sustituye cuidados sanitarios, asistencia
        personal ni servicios sociosanitarios. Si hay necesidades especiales, conviene explicarlas
        antes por WhatsApp para confirmar si la cita se puede realizar con comodidad y seguridad.
      </p>
    </ServiceDetailPage>
  );
}
