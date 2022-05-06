import { css } from '@emotion/css';

export const globalTooltipClasses = {
  tooltip: 'Tooltip-tooltip',
  open: 'Tooltip-open',
};

export const root = css`
  position: relative;
  cursor: pointer;

  &:hover, &.${globalTooltipClasses.open} {
    .${globalTooltipClasses.tooltip} {
      opacity: 1;
    }
  }
`;

interface TooltipProps {
  rootWidth: number
}

export const tooltip = (props: TooltipProps) => css`
  cursor: default;
  opacity: 0;
  width: 200px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  position: absolute;
  z-index: 1;

  top: 8px;
  left: 10px;
  transform: translate(${props.rootWidth}px, -50%);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #555 transparent transparent;
  }
`;
