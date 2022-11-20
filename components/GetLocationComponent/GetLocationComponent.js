import React from 'react';
import { StyleSheet, View, Text, Alert, Button } from "react-native";
import * as Location from 'expo-location';

export default function GetLocationComponent() {

    const [longitude, setLongitude] = React.useState("");
    const [latitude, setLatitude] = React.useState("");
    const [speed, setSpeed] = React.useState("");
    const [currTime, setCurrTime] = React.useState("");
    const [sec, setSec] = React.useState("");
    const [a, setA] = React.useState("");
    const [stopTracking, setStopTracking] = React.useState(false);
 
    const getLocation = async()=> {
        try {
            // const response = await Location.requestBackgroundPermissionsAsync();
            const responseA = await Location.requestForegroundPermissionsAsync();
            // console.log("response", response)
            // console.log("responseA", responseA)
            // const responseB = Location.getBackgroundPermissionsAsync();
            // const responseF = Location.getForegroundPermissionsAsync();
            // console.log("responseB", responseB);
            // console.log("responseF", responseF)
            const location= await Location.getCurrentPositionAsync();
            // console.log("location", location);
            let cT = new Date(location.timestamp)
            // console.log("*** Time ****", cT.getHours());
            setCurrTime(`${cT.getHours()}:${cT.getMinutes()}`)
            setSec(`${cT.getSeconds()}`);
            setLongitude(location.coords.longitude);
            setLatitude(location.coords.latitude);
            setSpeed(location.coords.speed);
            
            
        } catch (error) {
            Alert.alert("Не могу определить местоположение", "Очень грустно :(")
        }
    }

    const b = React.useCallback(()=>setInterval(()=>{
      getLocation();
  }, 80))



    React.useEffect(()=>{
       
      b();
        
        // if(stopTracking){
        //     clearInterval(b);
        // }
    }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.loadingTxt}> GetLocationComponent ...</Text>
      <Text style={styles.loadingTxt}> Координаты </Text>
      <Text style={styles.loadingTxt}> Широта: {latitude}</Text>
      <Text style={styles.loadingTxt}> Долгата: {longitude}</Text>
      <Text style={styles.speedTxt}> Скорость: {speed}</Text>
      <Text style={styles.dateTxt}> Время: {currTime}</Text>
      <Text style={styles.dateTxt}> Время: {sec}</Text>
      <Button onPress={()=>
        // setStopTracking(true)
        clearInterval(b)
        } title={"остановить трекинг"} ></Button>
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
  speedTxt: {
    fontSize: 20,
    marginTop: 5,
    color: "#78e"
  },
  dateTxt: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 30
  }
});

