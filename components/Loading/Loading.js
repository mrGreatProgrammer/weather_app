import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.loadingTxt}>Получение погоды ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingTxt: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1f1f1f"
  },
});
