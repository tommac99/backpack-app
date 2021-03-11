import React, { FC } from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../../components/Themed";
import AppIntroSlider from "react-native-app-intro-slider";
import LottieView from "lottie-react-native";
import fruitSVG from "../../assets/svgs/fruit.json";
import basketSVG from "../../assets/svgs/basket.json";
import noSVG from "../../assets/svgs/backet.json";

const slides = [
  {
    key: "one",
    title: "Want lekker cheap food?",
    svg: basketSVG,
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "Buy food before expiry date",
    svg: basketSVG,
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    title: "Pre-purchase, enjoy a bargain!",
    svg: fruitSVG,
    backgroundColor: "#22bcb5",
  },
];

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

type IntroSliderType = {
  setShowIntro: (showIntro: boolean) => void;
};

type Item = {
  title: string;
  text: string;
  svg: any;
  backgroundColor: string;
};

type ItemType = {
  item: Item;
};

export const IntroSlider: FC<IntroSliderType> = ({ setShowIntro }) => {
  const renderIntroSlider = ({
    item: { title, text, svg, backgroundColor },
  }: ItemType) => {
    return (
      <View style={slideStyles.container}>
        <LottieView source={svg} autoPlay loop style={slideStyles.svg} />
        <View style={slideStyles.textContainer}>
          <Text style={slideStyles.title}>{title}</Text>
        </View>
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
    backgroundColor: "#A3CAAF",
    alignItems: "center",
    overflow: "hidden",
  },
  textContainer: {
    backgroundColor: "transparent",
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: "bold",
  },
  svg: {
    width: 600,
  },
});
