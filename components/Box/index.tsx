import React, { Component } from "react";
import { View, Text } from "react-native";

const Box = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>Hello Custom Component</Text>
    </View>
  );
};

const defaultStyles = {
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  textContent: {
    fontSize: 20,
    color: "white",
  },
};

export default connectStyle("BoxTheme", defaultStyles)(Box);
