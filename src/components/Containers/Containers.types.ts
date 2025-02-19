import { FlexAlignType, ViewProps as RNViewProps } from "react-native";

export type JustifyContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export interface StyledViewProps extends RNViewProps {
  flex?: number;
  alignItems?: FlexAlignType;
  justifyContent?: JustifyContentType;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  gap?: number;
}
