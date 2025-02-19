/* eslint-disable prettier/prettier */
import { render } from "@testing-library/react-native";

import useAppTheme from "@src/hooks/useAppTheme";

import Column from "../Column";

// Mock `useAppTheme` hook
jest.mock("@src/hooks/useAppTheme", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<Column />", () => {
  beforeEach(() => {
    // Mock default theme values
    (useAppTheme as jest.Mock).mockReturnValue({
      background: {
        default: "#FFFFFF",
      },
    });
  });

  test("Renders component with transparent background", () => {
    const { getByTestId } = render(
      <Column testID="column-1" backgroundColor="transparent" />
    );

    const columnElement = getByTestId("column-1");
    expect(columnElement.props.backgroundColor).toBe("transparent");
  });

  test("Overrides background color if provided", () => {
    const { getByTestId } = render(
      <Column testID="column-2" backgroundColor="#007BFF" />
    );

    const columnElement = getByTestId("column-2");
    expect(columnElement.props.backgroundColor).toBe("#007BFF");
  });
});
