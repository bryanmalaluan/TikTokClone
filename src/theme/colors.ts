import { AppTheme } from "./types";

/** @TODO Update colors base on brand color palette */
export const lightTheme: AppTheme = {
  primary: {
    default: "#007BFF",
    100: "#E3F2FD",
    500: "#007BFF",
    900: "#004085",
  },
  secondary: {
    default: "#6C757D",
  },
  background: {
    primary: "#FFFFFF",
    secondary: "#F8F9FA",
  },
  text: {
    primary: "#212529",
    secondary: "#6C757D",
  },
  border: "#DEE2E6",
  success: "#28A745",
  warning: "#FFC107",
  error: "#DC3545",
};

export const darkTheme: AppTheme = {
  primary: {
    default: "#0A84FF",
    100: "#001F3F",
    500: "#0A84FF",
    900: "#003366",
  },
  secondary: {
    default: "#A1A1A1",
  },
  background: {
    primary: "#121212",
    secondary: "#1E1E1E",
  },
  text: {
    primary: "#E0E0E0",
    secondary: "#B0B0B0",
  },
  border: "#DEE2E6",
  success: "#28A745",
  warning: "#FFC107",
  error: "#DC3545",
};
