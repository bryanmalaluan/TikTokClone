import { useColorScheme } from "react-native";

import { darkTheme, lightTheme } from "@src/theme/colors";
import { AppTheme } from "@src/theme/types";

/** Custom hook for detecting device theme */
const useAppTheme = (): { theme: AppTheme; isDarkMode: boolean } => {
  const colorScheme = useColorScheme();

  return {
    theme: colorScheme === "dark" ? darkTheme : lightTheme,
    isDarkMode: colorScheme === "dark",
  };
};

export default useAppTheme;
