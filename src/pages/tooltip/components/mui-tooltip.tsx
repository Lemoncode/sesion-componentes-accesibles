import React from 'react';
import { Tooltip, TooltipProps } from '@mui/material';

interface Props extends TooltipProps {}

export const MuiTooltip: React.FC<Props> = (props) => {
  return <Tooltip {...props} arrow={true} />;
};
