import React from "react";

import { Button } from "@src/components/Buttons";
import { Column, Container } from "@src/components/Containers";
import TextInput from "@src/components/TextInput";
import spacing from "@src/theme/spacing";

const LoginScreen = () => {
  return (
    <Container
      alignItems="center"
      justifyContent="center"
      gap={spacing["lg"]}
      style={{ paddingHorizontal: 24 }}
    >
      <Column gap={spacing["lg"]} style={{ width: "100%" }}>
        <Column gap={spacing["md"]}>
          <TextInput label="Username" />
          <TextInput label="Password" secureTextEntry />
        </Column>

        <Button label="Login" />
      </Column>
    </Container>
  );
};

export default LoginScreen;
