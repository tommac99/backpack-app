import { Button } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button onPress={() => navigation.navigate("BrowseScreen")}>
        <Text>Browse</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
});
