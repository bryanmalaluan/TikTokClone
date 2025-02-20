import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "@src/redux/store";
import queryClient from "@src/services/queryClient";

const AppLayout = () => {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </ReduxProvider>
  );
};

export default AppLayout;
