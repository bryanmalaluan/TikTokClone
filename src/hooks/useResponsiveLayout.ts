import { useWindowDimensions } from "react-native";

import layout from "@src/theme/layout";

/** Hook for checking device type base on width if tablet or mobile phone */
const useResponsiveLayout = () => {
  const { width } = useWindowDimensions();
  const isTablet = width >= layout.mobile_max_width;

  return { isTablet };
};

export default useResponsiveLayout;
