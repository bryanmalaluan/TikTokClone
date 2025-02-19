/* eslint-disable prettier/prettier */
import { fireEvent, render } from "@testing-library/react-native";

import Button from "../Button";

describe("<Button />", () => {
  test("Renders component with correct label", () => {
    const { getByText } = render(<Button label="Button Label" />);
    const buttonElement = getByText("Button Label");
    expect(buttonElement).toBeTruthy();
  });

  test("Calls onPress when button is pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button label="Press Me" onPress={onPressMock} />
    );

    const buttonElement = getByText("Press Me");
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });
});
