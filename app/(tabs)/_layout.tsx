import { Tabs } from "expo-router";
import React from "react";

import CustomTabBar from "@src/components/CustomTabBar";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="discover" options={{ title: "Discover" }} />
      <Tabs.Screen name="post" options={{ title: "Post" }} />
      <Tabs.Screen name="inbox" options={{ title: "Inbox" }} />
      <Tabs.Screen name="account" options={{ title: "Account" }} />
    </Tabs>
  );
};

export default TabsLayout;
