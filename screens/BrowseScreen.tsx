import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export const BrowseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
