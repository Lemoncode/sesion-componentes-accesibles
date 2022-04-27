import React from 'react';
import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material';

interface Props extends TooltipProps {}

export const Tooltip: React.FC<Props> = (props) => {
  return <MuiTooltip {...props} arrow={true} />;
};
