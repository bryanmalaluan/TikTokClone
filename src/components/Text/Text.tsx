import React from "react";
import { Text as RNText } from "react-native";
import styled from "styled-components";

import useAppTheme from "@src/hooks/useAppTheme";
import fonts from "@src/theme/fonts";

import { StyledTextProps } from "./Text.types";

const StyledText = styled(RNText)<StyledTextProps>`
  ${({ fontSize }) =>
    `font-size: ${fontSize ? fontSize : fonts.size["body"]}px;`};
  ${({ color }) => color && `color: ${color};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily};`}
`;

const Text = (props: StyledTextProps) => {
  // Props
  const { color, fontSize, ...textProps } = props;

  // Hooks
  const { theme } = useAppTheme();

  // Styles
  const textSize = fontSize
    ? typeof fontSize === "number"
      ? fontSize
      : fonts.size[fontSize]
    : fontSize;

  const textColor = color ?? theme.text["primary"];

  return (
    <StyledText
      {...textProps}
      allowFontScaling={false}
      fontSize={textSize}
      color={textColor}
    />
  );
};

export default Text;
