import { StyleSheet, Text, View } from "react-native";


export default function ErrMsg({errTxt}) {

  return (
    <View style={styles.container}>
      <Text style={styles.errMsg} >{errTxt}</Text>
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
  errMsg: {
    fontSize: 14,
    fontWeight: "600",
    color: "#e88"
  }
});
