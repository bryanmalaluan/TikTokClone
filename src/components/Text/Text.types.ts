import { TextProps as RNTextProps } from "react-native";

import fonts from "@src/theme/fonts";

export type FontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";
export interface StyledTextProps extends RNTextProps {
  fontSize?: keyof typeof fonts.size | number;
  fontWeight?: FontWeight;
  lineHeight?: number;
  letterSpacing?: number;
  color?: string;
  fontFamily?: string;
  textAlign?: "center" | "auto" | "left" | "right" | "justify";
  type?: "default" | "heading";
}
