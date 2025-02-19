import React from "react";
import { View } from "react-native";
import styled from "styled-components";

import { StyledViewProps } from "../Containers.types";

const StyledRow = styled(View)<StyledViewProps>`
  flex-direction: row;
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`};
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth}px;`}
  ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
  ${({ gap }) => gap && `gap: ${gap}px;`}
`;

const Row = (props: StyledViewProps) => {
  // Props
  const { backgroundColor, ...styledProps } = props;

  // Styles
  const rowBackground = backgroundColor ?? "transparent";

  return <StyledRow {...styledProps} backgroundColor={rowBackground} />;
};

export default Row;
