import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "@src/redux/store";

const AppLayout = () => {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView>
          <Stack
            initialRouteName="(tabs)"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="(tabs)" />
          </Stack>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ReduxProvider>
  );
};

export default AppLayout;
