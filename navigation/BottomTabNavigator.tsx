import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { HomeScreen } from "../screens/HomeScreen";
import { BrowseScreen } from "../screens/BrowseScreen";
import {
  BottomTabParamList,
  HomeScreenParamList,
  BrowseScreenParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeScreenIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="BrowseScreen"
        component={BrowseScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <BrowseScreenIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function HomeScreenIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function BrowseScreenIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeScreenStack = createStackNavigator<HomeScreenParamList>();

function HomeScreenNavigator() {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
      />
    </HomeScreenStack.Navigator>
  );
}

const BrowseScreenStack = createStackNavigator<BrowseScreenParamList>();

function BrowseScreenNavigator() {
  return (
    <BrowseScreenStack.Navigator>
      <BrowseScreenStack.Screen
        name="BrowseScreen"
        component={BrowseScreen}
        options={{ headerTitle: "Browse" }}
      />
    </BrowseScreenStack.Navigator>
  );
}
