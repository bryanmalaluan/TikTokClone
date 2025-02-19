import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 375; // Base width for scaling (iPhone 11)

// Function for responsive font sizes
export function responsiveFontSize(size: number) {
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
}

export default {
  size: {
    /** Font size 12 */
    xs: responsiveFontSize(12),
    /** Font size 14 */
    sm: responsiveFontSize(14),
    /** Font size 16 */
    body: responsiveFontSize(16),
    /** Font size 18 */
    md: responsiveFontSize(18),
    /** Font size 24 */
    lg: responsiveFontSize(24),
    /** Font size 32 */
    xl: responsiveFontSize(32),
    /** Font size 40 */
    xxl: responsiveFontSize(40),
    /** Font size 48 */
    xxxl: responsiveFontSize(48),
  },
};
