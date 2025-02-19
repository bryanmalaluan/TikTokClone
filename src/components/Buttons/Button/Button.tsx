import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import Text from "@src/components/Text";
import useAppTheme from "@src/hooks/useAppTheme";
import layout from "@src/theme/layout";
import spacing from "@src/theme/spacing";

import { StyledButtonProps } from "./Button.types";

const StyledButton = styled(Pressable)<
  Omit<StyledButtonProps, "label" | "labelColor" | "variant">
>`
  min-height: 48px;
  width: 100%;
  max-width: ${layout.button_max_width}px;
  ${({ alignItems }) => `align-items: ${alignItems ? alignItems : "center"};`}
  ${({ justifyContent }) =>
    `justify-content: ${justifyContent ? justifyContent : "center"};`}
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
`;

const Button = (props: StyledButtonProps) => {
  // Props
  const { label, backgroundColor, labelColor, variant, ...buttonProps } = props;

  // Hooks
  const { theme } = useAppTheme();

  // Styles
  const buttonColor = React.useMemo(() => {
    if (!variant) {
      return backgroundColor ?? theme.primary["default"];
    }

    switch (variant) {
      case "info":
        return theme.primary[100];
      case "success":
        return theme.success;
      case "warning":
        return theme.warning;
      case "error":
        return theme.error;
      default:
        return theme.primary["default"];
    }
  }, [variant, backgroundColor, theme.primary["default"]]);

  const textColor = React.useMemo(() => {
    if (!variant) {
      return labelColor ?? theme.background.primary;
    }

    switch (variant) {
      case "info":
        return theme.text.primary;
      default:
        return labelColor ?? theme.background.primary;
    }
  }, [variant, backgroundColor, theme.background.primary]);

  const borderRadius = spacing.sm;

  return (
    <StyledButton
      {...buttonProps}
      backgroundColor={buttonColor}
      borderRadius={borderRadius}
    >
      <Text fontWeight="bold" color={textColor}>
        {label}
      </Text>
    </StyledButton>
  );
};

export default Button;
