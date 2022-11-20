import { StyleSheet, Text, View, Image } from "react-native";

export default function WeatherDaily({
  day,
  temp,
  icon,
  title,
  sunrise,
  sunset,
}) {
  return (
    // <View style={styles.container}>

    <LinearGradient
      colors={["#3c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <View style={styles.iconContainer}>
        {/* <Image
          style={styles.tinyIcon}
          source={{
            uri: `https://openweathermap.org/img/w/${icon}.png`,
          }}
        /> */}
        <Text>{temp.day}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",
  },
  iconContainer: {
    flex: 1,
  },
  tinyIcon: {
    width: 80,
    height: 80,
    marginBottom: 15,
    marginTop: 15,
  },
});
