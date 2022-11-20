import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Loading from "./components/Loading/Loading";
import GetLocationComponent from "./components/GetLocationComponent/GetLocationComponent";
import GetWeather from "./components/GetWeather/GetWeather";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import GetWeatherDaily from "./components/GetWeather/GetWeatherDaily";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();

export default function App() {
  const [name, setName] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(false);

  return (
    <View style={styles.container}>
    {/* <LinearGradient
      // Background Linear Gradient
      colors={["#3c669f", "#3b5998", "#192f6a"]}
      // style={styles.container}
    > */}
      {/* <GetWeather /> */}

      {/* <GetLocationComponent /> */}
      {/* <Loading /> */}

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Home") {
                return (
                  <Ionicons
                    name={
                      focused
                        ? "ios-information-circle"
                        : "ios-information-circle-outline"
                    }
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Daily") {
                return (
                  <FontAwesome name="calendar" size={size} color={color} />
                );
              } else if (route.name === "Location") {
                return (
                  <Ionicons name="location-sharp" size={size} color={color} />
                );
              }
            },
            tabBarInactiveTintColor: "gray",
            tabBarActiveTintColor: "tomato",
          })}
        >
          <Tab.Screen name="Home" component={GetWeather} />
          <Tab.Screen name="Daily" component={GetWeatherDaily} />
          <Tab.Screen name="Location" component={GetLocationComponent} />
        </Tab.Navigator>
      </NavigationContainer>
      {/* <StatusBar style="auto" /> */}
      {/* <FontAwesome name="calendar" size={24} color="black" /> */}
      <StatusBar style="auto" />
    {/* </LinearGradient> */}
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
