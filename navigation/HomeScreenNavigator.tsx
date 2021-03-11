import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, BrowseScreen } from "../screens";
import { BrowseScreenParamList, HomeScreenParamList } from "../types";

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeScreenStack = createStackNavigator<HomeScreenParamList>();
const BrowseScreenStack = createStackNavigator<BrowseScreenParamList>();

export const HomeScreenNavigator = () => {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
      />
      <BrowseScreenStack.Screen
        name="BrowseScreen"
        component={BrowseScreen}
        options={{ headerTitle: "Browse" }}
      />
    </HomeScreenStack.Navigator>
  );
};
