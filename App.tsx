import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Container, Content, StyleProvider, View } from "native-base";
import commonColor from "./native-base-theme/variables/commonColor";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import getTheme from "./native-base-theme/components";
import { IntroSlider } from "./components/IntroSlider";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [showIntro, setShowIntro] = useState(true);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StyleProvider style={getTheme(commonColor as any)}>
          {showIntro ? (
            <IntroSlider setShowIntro={setShowIntro} />
          ) : (
            <Navigation colorScheme={colorScheme} />
          )}
        </StyleProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
