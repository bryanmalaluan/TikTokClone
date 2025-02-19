import React from "react";
import { View } from "react-native";
import styled from "styled-components";

import useAppTheme from "@src/hooks/useAppTheme";

import { StyledViewProps } from "../Containers.types";

const StyledContainer = styled(View)<StyledViewProps>`
  flex: 1;
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`};
  ${({ gap }) => gap && `gap: ${gap}px;`}
`;

const Container = (props: StyledViewProps) => {
  // Props
  const { backgroundColor, ...styledProps } = props;

  // Hooks
  const { theme } = useAppTheme();

  // Styles
  const containerBackground = backgroundColor ?? theme.background["primary"];

  return (
    <StyledContainer {...styledProps} backgroundColor={containerBackground} />
  );
};

export default Container;
