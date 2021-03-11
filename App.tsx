import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleProvider } from "native-base";
import commonColor from "./native-base-theme/variables/commonColor";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import getTheme from "./native-base-theme/components";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StyleProvider style={getTheme(commonColor as any)}>
          <Navigation colorScheme={colorScheme} />
        </StyleProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
