import { render } from "@testing-library/react-native";

import fonts from "@src/theme/fonts";

import Text from "../Text";

describe("<Text />", () => {
  test("Renders component with large text", () => {
    const { getByText } = render(
      <Text fontSize={fonts.size["lg"]}>Large Text</Text>
    );
    const textElement = getByText("Large Text");
    expect(textElement).toBeTruthy();
  });

  test("Renders component with body text", () => {
    const { getByText } = render(
      <Text fontSize={fonts.size["body"]}>Body Text</Text>
    );
    const textElement = getByText("Body Text");
    expect(textElement).toBeTruthy();
  });
});
