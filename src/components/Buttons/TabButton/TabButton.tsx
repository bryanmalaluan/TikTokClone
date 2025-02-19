import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";

import { Column } from "@src/components/Containers";
import Text from "@src/components/Text";
import useRenderCount from "@src/hooks/useRenderCount";
import { arePropsEqual } from "@src/utils/memoize";

interface TabButtonProps extends PressableProps {
  label: string;
  iconName: "home" | "search" | "chatbox-outline" | "person-outline";
  isFocused: boolean;
  isCustom?: boolean;
}

const TabButton = ({
  label,
  iconName,
  isFocused,
  isCustom,
  onPress,
  onLongPress,
}: TabButtonProps) => {
  useRenderCount(label);

  // Display Custom UI for post tab
  if (isCustom) {
    return (
      <Column flex={1} alignItems="center" style={{ paddingTop: 8 }}>
        <Pressable
          style={styles.postButton}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          <Ionicons name="add" size={28} color={"#dddddd"} />
        </Pressable>
      </Column>
    );
  }

  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Ionicons
        name={iconName}
        size={28}
        color={isFocused ? "#000" : "#dddddd"}
      />

      <Text
        fontSize="xs"
        fontWeight={isFocused ? "bold" : undefined}
        color={isFocused ? "#000" : "#dddddd"}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default React.memo(
  TabButton,
  arePropsEqual<TabButtonProps>(["isFocused"])
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingTop: 8,
    alignItems: "center",
  },
  postButton: {
    width: "60%",
    maxWidth: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "black",
  },
});
