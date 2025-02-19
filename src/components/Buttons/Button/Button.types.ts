import { FlexAlignType, PressableProps } from "react-native";

import { JustifyContentType } from "@src/components/Containers/Containers.types";

export interface StyledButtonProps extends PressableProps {
  label: string;
  labelColor?: string;
  alignItems?: FlexAlignType;
  justifyContent?: JustifyContentType;
  backgroundColor?: string;
  borderRadius?: number;
  variant?: "info" | "success" | "warning" | "error";
}
