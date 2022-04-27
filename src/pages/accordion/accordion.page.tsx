import React from 'react';
import { Page } from '../../common';
import {
  masterFront,
  bootcampBackend,
  bootcampDevops,
  bootcampJavascript,
} from './accordion.constants';
import { useAccordion } from './accordion.hooks';
import {
  NonAccessibleAccordion,
  AccessibleAccordion,
  MuiAccordion,
} from './components';

export const AccordionPage: React.FC = () => {
  const nonAccessible = useAccordion();
  const accessible = useAccordion();
  const mui = useAccordion();

  return (
    <Page
      nonAccessibleComponent={
        <>
          <NonAccessibleAccordion
            title={masterFront.title}
            body={masterFront.body}
            isOpen={nonAccessible.accordionOpen['master-frontend']}
            onClick={nonAccessible.onClick('master-frontend')}
          />
          <NonAccessibleAccordion
            title={bootcampBackend.title}
            body={bootcampBackend.body}
            isOpen={nonAccessible.accordionOpen['bootcamp-backend']}
            onClick={nonAccessible.onClick('bootcamp-backend')}
          />
          <NonAccessibleAccordion
            title={bootcampDevops.title}
            body={bootcampDevops.body}
            isOpen={nonAccessible.accordionOpen['bootcamp-devops']}
            onClick={nonAccessible.onClick('bootcamp-devops')}
          />
          <NonAccessibleAccordion
            title={bootcampJavascript.title}
            body={bootcampJavascript.body}
            isOpen={nonAccessible.accordionOpen['bootcamp-javascript']}
            onClick={nonAccessible.onClick('bootcamp-javascript')}
          />
        </>
      }
      accessibleComponent={
        <>
          <AccessibleAccordion
            title={masterFront.title}
            body={masterFront.body}
            isOpen={accessible.accordionOpen['master-frontend']}
            onClick={accessible.onClick('master-frontend')}
            id="master-frontend"
          />
          <AccessibleAccordion
            title={bootcampBackend.title}
            body={bootcampBackend.body}
            isOpen={accessible.accordionOpen['bootcamp-backend']}
            onClick={accessible.onClick('bootcamp-backend')}
            id="bootcamp-backend"
          />
          <AccessibleAccordion
            title={bootcampDevops.title}
            body={bootcampDevops.body}
            isOpen={accessible.accordionOpen['bootcamp-devops']}
            onClick={accessible.onClick('bootcamp-devops')}
            id="bootcamp-devops"
          />
          <AccessibleAccordion
            title={bootcampJavascript.title}
            body={bootcampJavascript.body}
            isOpen={accessible.accordionOpen['bootcamp-javascript']}
            onClick={accessible.onClick('bootcamp-javascript')}
            id="bootcamp-javascript"
          />
        </>
      }
      muiComponent={
        <>
          <MuiAccordion
            title={masterFront.title}
            body={masterFront.body}
            isOpen={mui.accordionOpen['master-frontend']}
            onClick={mui.onClick('master-frontend')}
            id="master-frontend"
          />
          <MuiAccordion
            title={bootcampBackend.title}
            body={bootcampBackend.body}
            isOpen={mui.accordionOpen['bootcamp-backend']}
            onClick={mui.onClick('bootcamp-backend')}
            id="bootcamp-backend"
          />
          <MuiAccordion
            title={bootcampDevops.title}
            body={bootcampDevops.body}
            isOpen={mui.accordionOpen['bootcamp-devops']}
            onClick={mui.onClick('bootcamp-devops')}
            id="bootcamp-devops"
          />
          <MuiAccordion
            title={bootcampJavascript.title}
            body={bootcampJavascript.body}
            isOpen={mui.accordionOpen['bootcamp-javascript']}
            onClick={mui.onClick('bootcamp-javascript')}
            id="bootcamp-javascript"
          />
        </>
      }
    />
  );
};
