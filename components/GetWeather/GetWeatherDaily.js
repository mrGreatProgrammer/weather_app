import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import * as Location from 'expo-location';
import moment from "moment/moment";
import axios from "axios";
import { API_KEY } from "./GetWeather";
import WeatherDaily from "./WeatherDaily";

export default function GetWeatherDaily({}) {
  const [list, setList]  = React.useState(null);
  const [timezone, setTimezone] = React.useState(0);
  const [err, setErr] = React.useState("");

  const getWeatherDaily = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=${API_KEY}`
        );
        console.log("&&&&&&&\n&&&&&&&&\n&&&&&&&&&\n&&&&&&",res.status);
        if(res.status===200){
          setList(res.data);
        } else {
          throw new Error("Not Authorized");
        }

      } catch (error) {
        console.log("fertcing ERROR ==========", error.message)
        setErr("Not Authorized !");
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
      getWeatherDaily(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      console.log(
        "/n**********************************************\n",
        error,
        "/n**********************************************"
      );
      Alert.alert("Не могу определить местоположение", "Очень грустно :(");
    }
  };

  React.useEffect(() => {
    getLocation();
  }, []);

  return (
    // <View style={styles.container}>

    // <LinearGradient
    //   // Background Linear Gradient
    //   colors={["#3c669f", "#3b5998", "#192f6a"]}
    //   style={styles.container}
    // >
      // {/* <StatusBar style="inverted" /> */}

      <View style={styles.halfContainer}>

        {err && <Text style={styles.errTxt} >{err}</Text> }
        {list?.map((e, id) => (
          <WeatherDaily
            day={e.dt}
            temp={e.temp}
            icon={e.weather?.find(e=>e)?.icon}
            title={e.weather?.find(e=>e)?.main}
            sunrise={`${e.sunrise}${timezone / 100}`}
            sunset={`${e.sunset}${timezone / 100}`}
          />
        ))}
      </View>
    // </LinearGradient>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errTxt: {
    fontSize: 24,
    color: "#e88",
    marginTop: 10,
    marginBottom: 10,
  },
  tinyIcon: {
    width: 80,
    height: 80,
    marginBottom: 15,
    marginTop: 15,
  },
  weatherNameTxt: {
    color: "#fff",
    fontSize: 14,
  },
});
