import React from 'react';
import ReactDOM from 'react-dom';
import { Accordion } from './component';
import './global.styles';

const createEmptyState = () => ({
  'master-frontend': false,
  'bootcamp-backend': false,
  'bootcamp-devops': false,
  'bootcamp-javascript': false,
});
const App: React.FC = () => {
  const [accordionOpen, setAccordioOpen] = React.useState(createEmptyState());

  const handleClick = (accordion: string) => () => {
    setAccordioOpen({
      ...createEmptyState(),
      [accordion]: !accordionOpen[accordion],
    });
  };

  return (
    <>
      <Accordion
        title="Máster Front End"
        body="Hoy en día trabajamos con multitud de dispositivos y navegadores, las exigencias de una interfaz de usuario web son muy altas. El área de Front End está evolucionando a pasos agigantados, convirtiéndose en el sector estrella en el mundo del desarrollo."
        isOpen={accordionOpen['master-frontend']}
        onClick={handleClick('master-frontend')}
      />
      <Accordion
        title="Bootcamp Backend"
        body="¿Te has planteado alguna vez hacerte desarrollador Backend? En este Bootcamp aprenderás a desarrollar un backend de principio a fin, desde la fase de toma de requerimientos, modelado y definición de base de datos y API, así como su desarrollo, manejo de ORMs, testing y por último como llevarlo a producción desplegándolo en la nube."
        isOpen={accordionOpen['bootcamp-backend']}
        onClick={handleClick('bootcamp-backend')}
      />
      <Accordion
        title="Bootcamp Devops"
        body="La automatización de procesos ha pasado de ser una funcionalidad deseable a una necesidad indispensable. Hoy en día esperamos que nuestras aplicaciones liberen nuevas funcionalidades sin apenas interrupción del servicio…"
        isOpen={accordionOpen['bootcamp-devops']}
        onClick={handleClick('bootcamp-devops')}
      />
      <Accordion
        title="Bootcamp JavaScript"
        body="Aprende a programar desde cero. Si eres diseñador y siempre te ha picado meterte o entender bien lo que se hace con JavaScript, o si llevas tiempo alejado de la programación y tienes ganas de reengancharte, sigue leyendo…"
        isOpen={accordionOpen['bootcamp-javascript']}
        onClick={handleClick('bootcamp-javascript')}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
