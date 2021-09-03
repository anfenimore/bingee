import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppButton from "./AppButton";

function ShowDetails({ title, type }) {
  const [details, setDetails] = useState([]);

  const id = 35624;

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
    // console.log(details.image_path);
    // console.log(details);
  };

  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.image} tint="light" uri={details.image_path} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{details.name}</Text>
          <Text style={styles.header}>Genres:</Text>
          {/* <Text style={styles.subTitle}>{details.genres}</Text> */}
          <Text style={styles.subTitle}>{details.genres.join(", ")}</Text>
          <Text style={styles.header}>Network:</Text>
          <Text style={styles.subTitle}>{details.network}</Text>
          <Text style={styles.header}>Rating:</Text>
          <Text style={styles.subTitle}>{details.rating} / 10</Text>
        </View>
      </View>
      <View style={styles.details}>
        {/* <Text style={styles.header}>Description: </Text> */}
        <Text style={styles.subTitle}>Description: {details.description}</Text>
        <Text style={styles.descText}>Status: {details.status}</Text>
        <Text style={styles.descText}>
          Number of Seasons: {details.countdown.season}
        </Text>
      </View>
      <AppButton title={type} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    flexDirection: "row",
  },
  details: { paddingTop: 310, paddingLeft: 10 },
  descText: {
    paddingTop: 10,
    color: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
  },
  header: {
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
    fontWeight: "bold",
    color: colors.dark,
  },
  image: {
    width: 200,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // top: 0,
  },
  subTitle: {
    color: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
  },
  title: {
    color: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
    fontWeight: "bold",
  },
  textContainer: {
    paddingLeft: 10,
    width: 200,
    height: 300,
    justifyContent: "space-evenly",
    // alignItems: "right",
  },
});

export default ShowDetails;
