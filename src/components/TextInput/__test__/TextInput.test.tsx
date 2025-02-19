/* eslint-disable prettier/prettier */
import { render } from "@testing-library/react-native";

import useAppTheme from "@src/hooks/useAppTheme";

import TextInput from "../TextInput";

jest.mock("@src/hooks/useAppTheme", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<TextInput />", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // ✅ Ensures no mock leakage between tests

    // ✅ Mock theme hook values
    (useAppTheme as jest.Mock).mockReturnValue({
      theme: {
        text: {
          primary: "#212529",
        },
        border: "#DEE2E6",
        error: "#DC3545",
      },
    });
  });

  const mockProps = {
    label: "First name",
    value: "",
    onChangeText: jest.fn(),
  };

  test("Renders the component correctly", () => {
    const { getByTestId } = render(
      <TextInput {...mockProps} testID="text-input" />
    );
    const textInput = getByTestId("text-input");
    expect(textInput).toBeTruthy();
  });

  test("Applies the error style when error prop is passed", () => {
    const { getByText, getByTestId } = render(
      <TextInput
        {...mockProps}
        error="This field is required"
        testID="text-input"
      />
    );
    const errorText = getByText("This field is required");
    const textInput = getByTestId("text-input");

    expect(errorText).toBeTruthy();
    expect(textInput.props.borderColor).toBe("#DC3545");
  });
});
