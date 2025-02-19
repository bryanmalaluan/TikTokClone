import { TextInputProps as RNTextInputProps } from "react-native";

export interface StyledTextInputProps extends RNTextInputProps {
  label?: string;
  error?: string;
  borderColor?: string;
}
