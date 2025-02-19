import React from "react";
import { Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Container, Row } from "@src/components/Containers";
import CustomList from "@src/components/CustomList";
import Text from "@src/components/Text";

const HomeScreen = () => {
  // Hooks
  const insets = useSafeAreaInsets();

  return (
    <Container alignItems="center">
      {/* Displays list of items */}
      <CustomList />

      {/* Header for filters */}
      <Row
        alignItems="center"
        gap={16}
        style={{ position: "absolute", top: insets.top + 16 }}
      >
        <Pressable style={{ gap: 4 }}>
          <Text fontSize="sm" fontWeight="500" color="white">
            Following
          </Text>
        </Pressable>

        <Row backgroundColor="white" style={{ width: 1, height: "70%" }} />

        <Pressable>
          <Text fontSize="sm" color="white">
            For You
          </Text>
        </Pressable>
      </Row>
    </Container>
  );
};

export default HomeScreen;
