/* eslint-disable prettier/prettier */
import { render } from "@testing-library/react-native";

import useAppTheme from "@src/hooks/useAppTheme";

import Row from "../Row";

// Mock `useAppTheme` hook
jest.mock("@src/hooks/useAppTheme", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<Row />", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Mock default theme values
    (useAppTheme as jest.Mock).mockReturnValue({
      background: {
        default: "#FFFFFF",
      },
    });
  });

  test("Renders component with transparent background", () => {
    const { getByTestId } = render(
      <Row testID="row-1" backgroundColor="transparent" />
    );

    const rowElement = getByTestId("row-1");
    expect(rowElement.props.backgroundColor).toBe("transparent");
  });

  test("Overrides background color if provided", () => {
    const { getByTestId } = render(
      <Row testID="row-2" backgroundColor="#007BFF" />
    );

    const rowElement = getByTestId("row-2");
    expect(rowElement.props.backgroundColor).toBe("#007BFF");
  });
});
