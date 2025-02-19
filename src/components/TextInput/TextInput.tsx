import React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from "react-native";
import styled from "styled-components";

import useAppTheme from "@src/hooks/useAppTheme";
import fonts from "@src/theme/fonts";
import layout from "@src/theme/layout";

import { Column } from "../Containers";
import Text from "../Text";
import { StyledTextInputProps } from "./TextInput.types";

const StyledTextInput = styled(RNTextInput)<
  Omit<StyledTextInputProps, "label" | "error">
>`
  height: 56px;
  width: 100%;
  border-width: 1px;
  border-radius: 8px;
  padding: 0px 16px;
  font-size: ${fonts.size["body"]}px;
  ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
`;

const TextInput = (props: StyledTextInputProps) => {
  // Props
  const { label, error, ...textInputProps } = props;

  // Hooks
  const { theme } = useAppTheme();

  // Styles
  const borderColor = error ? theme["error"] : theme["border"];

  return (
    <Column gap={4} style={styles.container}>
      {!!label && (
        <Text fontSize={"sm"} fontWeight="500">
          {label}
        </Text>
      )}

      <StyledTextInput {...textInputProps} borderColor={borderColor} />

      {!!error && (
        <Text fontSize={"xs"} fontWeight="500" color={theme["error"]}>
          {error}
        </Text>
      )}
    </Column>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: layout.button_min_height,
    maxWidth: layout.button_max_width,
  },
});
