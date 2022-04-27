import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as classes from './mui-accordion.styles';

interface Props {
  title: string;
  body: string;
  isOpen: boolean;
  onClick: () => void;
  id: string;
}

export const MuiAccordion: React.FC<Props> = (props) => {
  const { title, body, isOpen, onClick, id } = props;

  return (
    <Accordion className={classes.root} expanded={isOpen} onChange={onClick}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id={`title-${id}`}
        aria-controls={`body-${id}`}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography>{body}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
