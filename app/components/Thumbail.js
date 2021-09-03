import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Button, Text } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "./AppText";

function Thumbail({ title, imageURL, id }) {
  const [details, setDetails] = useState([]);

  useEffect((id) => {
    getDetails(id);
  });

  const getDetails = async () => {
    // console.log("id: " + id);
    const response = await fetch(
      "https://www.episodate.com/api/show-details?q=" + id
    );
    if (!response.ok) {
      console.log(response.problem);
    }
    const json = await response.json();
    setDetails(json.tvShow);
    // console.log(details.description);
    // console.log(details);
  };

  return (
    <View style={styles.container}>
      {/* Face Side */}
      <TouchableOpacity style={styles.face}>
        <Image style={styles.image} tint="light" uri={imageURL} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>View Details</Text>
        </TouchableOpacity>

        {/* <Button title="See Details" style={styles.button} /> */}
        {/* <View style={styles.textContainer}> */}
        {/* <AppText style={styles.title}>{title}</AppText> */}
        {/* </View> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    // borderRadius: 25,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    height: 15,
    position: "absolute",
    bottom: 2,
    // borderBottomColor: colors.dark,
    // borderBottomWidth: 2,
  },
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  face: {
    height: 150,
    width: 84,
    backgroundColor: colors.primary,
    borderColor: "black",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 84,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
  },
  title: {
    fontSize: 4,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
  },
  text: {
    color: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
  },
  textContainer: {
    backgroundColor: colors.primary,
    height: 30,
    width: 84,
    position: "absolute",
    bottom: 0,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Thumbail;
