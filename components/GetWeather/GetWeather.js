// 40ace7f2f5de9b334f76f48ece232e28
import axios from "axios";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Loading from "./components/Loading/Loading";

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

export default function GetWeather() {
  const [weatherData, setWeatherData] = React.useState(null);

React.useEffect(()=>{
  const res = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={40ace7f2f5de9b334f76f48ece232e28}`)
  console.log(res)
}, [])

  return (
    <View style={styles.container}>
        
    <Loading />
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