import React from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TabButton } from "../Buttons";
import { Row } from "../Containers";

/**
 * Custom Tab Bar component for Tabs
 *  */
const CustomTabBar = (props: any) => {
  // Props
  const { state, descriptors, navigation } = props;

  // Hooks
  const insets = useSafeAreaInsets();

  // Styles
  const tabBarHeight = 56 + insets.bottom;

  return (
    <Row
      backgroundColor="white"
      borderColor="#dddddd"
      style={[styles.container, { height: tabBarHeight }]}
    >
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];

        // Retrieves label of tab item
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        // Check if tab item is active/focused
        const isFocused = state.index === index;

        // Navigates to tab item screen
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        // Emits/disable onLongPress of event
        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabButton
            key={route.key}
            label={label}
            iconName={
              index === 1
                ? "search"
                : index === 3
                  ? "chatbox-outline"
                  : index === 4
                    ? "person-outline"
                    : "home"
            }
            isFocused={isFocused}
            isCustom={index === 2} // Show custom button for Post tab
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </Row>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopWidth: 1,
  },
  tabButton: {
    flex: 1,
    paddingTop: 8,
    alignItems: "center",
  },
});
