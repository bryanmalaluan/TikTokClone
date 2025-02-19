/* eslint-disable prettier/prettier */
import { render } from "@testing-library/react-native";

import useAppTheme from "@src/hooks/useAppTheme";

import Container from "../Container";

// Mock `useAppTheme` hook
jest.mock("@src/hooks/useAppTheme", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<Container />", () => {
  beforeEach(() => {
    // Mock default theme values
    (useAppTheme as jest.Mock).mockReturnValue({
      background: {
        default: "#FFFFFF",
      },
    });
  });

  test("Renders component with default background color from app theme", () => {
    const { getByTestId } = render(
      <Container testID="container-1" backgroundColor="#FFFFFF" />
    );

    const containerElement = getByTestId("container-1");
    expect(containerElement.props.backgroundColor).toBe("#FFFFFF");
  });

  test("Overrides background color if provided", () => {
    const { getByTestId } = render(
      <Container testID="container-2" backgroundColor="#007BFF" />
    );

    const containerElement = getByTestId("container-2");
    expect(containerElement.props.backgroundColor).toBe("#007BFF");
  });
});
