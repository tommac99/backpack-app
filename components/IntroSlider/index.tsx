import React, { FC } from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../../components/Themed";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "one",
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../../assets/images/splash.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../../assets/images/splash.png"),
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../../assets/images/splash.png"),
    backgroundColor: "#22bcb5",
  },
];

type IntroSliderType = {
  setShowIntro: (showIntro: boolean) => void;
};

export const IntroSlider: FC<IntroSliderType> = ({ setShowIntro }) => {
  const renderIntroSlider = ({ item }) => {
    return (
      <View style={slideStyles.container}>
        <Text style={slideStyles.title}>{item.title}</Text>
        <Image style={slideStyles.image} source={item.image} />
        <Text style={slideStyles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderIntroSlider}
      data={slides}
      onDone={() => setShowIntro(false)}
    />
  );
};

const slideStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "hotpink",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
  },
});
