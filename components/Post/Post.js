import { useEffect, useState } from "react";

const aboutMe = [
  { id: 0, title: "mr. Greate Programmer", b: false },
  { id: 1, title: "Somon", b: true },
];

export default function Post() {
  const [name, setName] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <Text style={styles.firstTxt}>
          {aboutMe.find((e) => e.b === name).title}
        </Text>
        <Button
          color={name ? "#ae8" : ""}
          onPress={() => setName((c) => !c)}
          title="Press me!"
        ></Button>
      </View>
      {/* <Button
          color={"#ae8"}
          onPress={() => setVisiblePosts(c=>!c)}
          // title={visiblePosts?"hide posts":"show posts"}
          title={"show posts"}
        ></Button> */}

      <View style={styles.postsContainer}>
        <Text style={styles.secondTxt}>Wooooow</Text>
      </View>

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
  firstView: {
    flex: 1,
    backgroundColor: "#8a8",
    alignItems: "center",
    justifyContent: "center",
  },
  firstTxt: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
  },
  postsContainer: {
    flex: 3,
    backgroundColor: "#eea",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 5,
    borderColor: "#000",
  },
  secondTxt: {
    color: "#1f1f1f",
    fontSize: 22,
    fontWeight: "600",
  },
});
