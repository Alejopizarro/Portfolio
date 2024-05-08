import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import IconNode from "../../assets/IconNode";

export default function Experiences() {
  return (
    <>
      <h3>Experiencia Laboral</h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(0, 0, 0, 0.1)",
            color: "#fbfeeb",
            boxShadow: "0 0 10px 2px #dcfe50",
          }}
          contentArrowStyle={{ borderRight: "0px" }}
          date="2017 - 2019"
          iconStyle={{ background: "#232323", color: "#fbfeeb" }}
          icon={<IconNode />}
        >
          <h3 className="vertical-timeline-element-title">
            Promote Merchandising
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Buenos Aires, Argentina.
          </h4>
          <p>
            Comercial Jr. Cotizacion. Manejo de cartera de clientes. Negociacion
            con proveedores. Captacion de nuevos clientes
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(0, 0, 0, 0.1)",
            color: "#fbfeeb",
            boxShadow: "0 0 10px 2px #dcfe50",
          }}
          contentArrowStyle={{ borderRight: "0px" }}
          date="2019 - 2022"
          iconStyle={{ background: "#232323", color: "#fbfeeb" }}
          icon={<IconNode />}
        >
          <h3 className="vertical-timeline-element-title">
            Espejos Versailles
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Buenos Aires, Argentina.
          </h4>
          <p>
            Asesor Comercial & Encargado Administrativo. Creacion de canales de
            venta y distribucion. Encargado de equipos de venta y de
            facturacion. Diseño de pagina web y redes sociales
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(0, 0, 0, 0.1)",
            color: "#fbfeeb",
            boxShadow: "0 0 10px 2px #dcfe50",
          }}
          contentArrowStyle={{ borderRight: "0px" }}
          date="2022 - 2023"
          iconStyle={{ background: "#232323", color: "#fbfeeb" }}
          icon={<IconNode />}
        >
          <h3 className="vertical-timeline-element-title">Rocking Business</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Málaga, España.
          </h4>
          <p>
            Comercial & Consultor. Ventas con BBDD y Captacion de nuevos
            clientes. Consultor en proyectos de Innovacion.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(0, 0, 0, 0.1)",
            color: "#fbfeeb",
            boxShadow: "0 0 10px 2px #dcfe50",
          }}
          contentArrowStyle={{ borderRight: "0px" }}
          date="Present"
          iconStyle={{
            background: "#232323",
            color: "#fbfeeb",
          }}
          icon={<IconNode />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Málaga, España.
          </h4>
          <p>
            Actualmente me encuentro en la busqueda de nuevos desafios en el
            mundo del desarrollo web, con el fin de poder seguir creciendo
            profesionalmente y poder aportar mi valor a una empresa.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <button>Descargar CV</button>
    </>
  );
}
