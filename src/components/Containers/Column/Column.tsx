import React from "react";
import { View } from "react-native";
import styled from "styled-components";

import { StyledViewProps } from "../Containers.types";

const StyledColumn = styled(View)<StyledViewProps>`
  flex-direction: column;
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`};
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth}px;`}
  ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
  ${({ gap }) => gap && `gap: ${gap}px;`}
`;

const Column = (props: StyledViewProps) => {
  // Props
  const { backgroundColor, ...styledProps } = props;

  // Styles
  const columnBackground = backgroundColor ?? "transparent";

  return <StyledColumn {...styledProps} backgroundColor={columnBackground} />;
};

export default Column;
