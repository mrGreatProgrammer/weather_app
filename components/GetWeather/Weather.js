import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment/moment";

export default function Weather({
  sunrise,
  sunset,
  weatherName,
  iconId,
  tempreture,
}) {
  const sunriseTime = new Date(sunrise);
  const sunsetTime = new Date(sunset);

  return (
    // <View style={styles.container}>

    <LinearGradient
      // Background Linear Gradient
      colors={["#3c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
    {/* <View styles={styles.container} > */}
      {/* <StatusBar style="inverted" /> */}

      <View style={styles.halfContainer}>
        {/* <Ionicons name="rainy" size={64} color={"#fff"} /> */}
        <Image
          style={styles.tinyIcon}
          source={{
            uri: `https://openweathermap.org/img/w/${iconId}.png`,
          }}
          />
        <Text style={styles.weatherNameTxt}>{weatherName}</Text>
        <Text style={styles.tempTxt}>{tempreture} °C</Text>

        <Text style={styles.tempTxt}>
          sunrise: {moment(sunriseTime).format('HH:mm')}
          {/* {sunriseTime.getHours()}:{sunriseTime.getMinutes()} */}
        </Text>
        <Text style={styles.tempTxt}>
          sunset: {moment(sunsetTime).format('HH:mm')}
           {/* {sunsetTime.getHours()}:{sunsetTime.getMinutes()} */}
        </Text>
      </View>
      <View style={styles.halfContainer} >

      </View>
      {/* </View> */}
    </LinearGradient>
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
  tempTxt: {
    fontSize: 24,
    color: "#fff",
    marginTop: 10,
    marginBottom: 10,
  },
  tinyIcon: {
    width: 80,
    height: 80,
    marginBottom: 15,
    marginTop: 15
  },
  weatherNameTxt: {
    color: "#fff",
    fontSize: 14,
  },
});
