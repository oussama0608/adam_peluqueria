import ServiceDetailPage from "@/components/ServiceDetailPage";
import { createMetadata } from "@/lib/seo";
import { getRoute, getService } from "@/lib/site";

const service = getService("hoteles-oficinas-eventos");
const route = getRoute(service.href)!;

export const metadata = createMetadata({
  title: route.title,
  description: route.description,
  path: route.href,
  image: service.image,
});

export default function HotelesOficinasEventosPage() {
  return (
    <ServiceDetailPage service={service}>
      <h2>Un servicio para situaciones puntuales</h2>
      <p>
        Hoteles, oficinas y eventos tienen una necesidad distinta: resolver una imagen concreta en
        un lugar concreto y con poco margen para improvisar. Por eso la disponibilidad debe
        confirmarse antes de prometer nada.
      </p>
      <p>
        Esta pagina sirve para captar busquedas como una persona alojada en Bilbao que necesita un
        arreglo antes de una reunion, un equipo que quiere organizar cortes en oficina o un evento
        privado que requiere varios servicios coordinados.
      </p>

      <h2>Informacion clave para presupuestar</h2>
      <ul>
        <li>Ubicacion exacta o aproximada: hotel, oficina, sala o domicilio.</li>
        <li>Numero de personas y tipo de servicio para cada una.</li>
        <li>Franja horaria, margen de preparacion y acceso al espacio.</li>
        <li>Si hay normas del hotel, oficina o evento que deban respetarse.</li>
      </ul>

      <h2>Expectativas razonables</h2>
      <p>
        La prioridad es confirmar si el servicio se puede hacer bien, con tiempo suficiente y sin
        interferir con la actividad del lugar. Si el espacio o el horario no encajan, Adam podra
        recomendar otra franja o no aceptar la visita.
      </p>
    </ServiceDetailPage>
  );
}
