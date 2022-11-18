import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Loading from "./components/Loading/Loading";
import GetLocationComponent from "./components/GetLocationComponent/GetLocationComponent";
import GetWeather from "./components/GetWeather/GetWeather";


export default function App() {
  const [name, setName] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(false);

  return (
    <View style={styles.container}>
      <GetWeather />
      {/* <GetLocationComponent /> */}
      {/* <Loading /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
