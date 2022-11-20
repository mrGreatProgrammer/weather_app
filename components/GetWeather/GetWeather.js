// 40ace7f2f5de9b334f76f48ece232e28
import axios from "axios";
import React from "react";
import { StyleSheet, Text, View, Button, Alert, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import ErrMsg from "../Msgs/ErrMsg";
import Weather from "./Weather";
// import Loading from "./Loading/Loading";

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
export const API_KEY = "40ace7f2f5de9b334f76f48ece232e28"

export default function GetWeather() {
  const [weatherData, setWeatherData] = React.useState(null);
  const [sunTime, setSunTime] = React.useState({sunrise: 0, sunset: 0});
  const [tempreture, setTempreture] = React.useState(null);
  const [icon, setIcon] = React.useState(null);
  const [weatherName, setWeatherName] = React.useState("");
  const [errMsg, setErrMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const getWeather = async (latitude, longitude) => {
    try {
      
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    if (res.status===200) {
      console.log("weather...", res.data);
      const weather = res.data.weather?.find(e=>e);
      const timezone = res.data?.timezone
      console.log("=----=-=-=-=-=-=-=-=-=-==-=\n",res.data?.timezone)
      const {sunrise, sunset} = res.data.sys;
      setTempreture(res.data.main.temp);
      setIcon(weather.icon);
      setWeatherName(weather.main)
      setSunTime({sunrise: +`${sunrise}${timezone/100}`, sunset: +`${sunset}${timezone/100}`});
      setIsLoading(false)
    }else if (res.status>=400&&res.status<500) {
      throw new Error("Some error occured !");
    } else if(res.status>499){
      throw new Error("Server error !");
    } else {
      
      throw new Error("Somthing went wrong !");
    }
  } catch (error) {
    setErrMsg(error.message);
    setIsLoading(false)
  }
  };

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      // const {
      //   coodrs: { latitude, longitude },
      // } = await Location.getCurrentPositionAsync();
      const location = await Location.getCurrentPositionAsync();
      // console.log(location)
      getWeather(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      console.log("/n**********************************************\n", error, "/n**********************************************")
      Alert.alert("Не могу определить местоположение", "Очень грустно :(");
    }
  };

  React.useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.txt}>hello</Text>
      <Button title="click!" onPress={() => getLocation()}></Button> */}
      {
        isLoading?
        <ActivityIndicator color={"#3ad"} size={"large"} />
        :
        errMsg ? 
        <ErrMsg errTxt={"error"} />
        :
        <Weather sunrise={sunTime.sunrise} sunset={sunTime.sunset} weatherName={weatherName} iconId={icon} tempreture={tempreture} />
      }
      {/* <Loading /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 32,
    marginBottom: 5,
  },
});
