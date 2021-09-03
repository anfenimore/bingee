import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Image } from "react-native-expo-image-cache";
import FlipCard from "react-native-flip-card";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";

function RemoveShowPreview({ title, imageURL, id, type }) {
  const navigation = useNavigation();
  const [details, setDetails] = useState([]);

  useEffect((id) => {
    getDetails(id);
  });

  const getDetails = async () => {
    // console.log("id: " + id);
    const response = await fetch(
      "https://www.episodate.com/api/show-details?q=" + id,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      console.log(response.problem);
    }
    const json = await response.json();
    setDetails(json.tvShow);
  };

  return (
    //Works
    <View style={styles.container}>
      <FlipCard style={styles.card}>
        {/* Face Side */}
        <View style={styles.face}>
          <Image style={styles.image} tint="light" uri={imageURL} />
          {/* <Text style={styles.title}>{title}</Text> */}
        </View>
        {/* Back Side */}
        <View style={styles.face}>
          <Text style={styles.title}>{title}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("RemoveDetails", { id: id, type: type })
            }
          >
            <Text style={styles.text}>View Details</Text>
          </TouchableOpacity>
        </View>
      </FlipCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: 84,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
  },
  subTitle: {
    justifyContent: "center",
    alignItems: "center",
    color: colors.offwhite,
    fontSize: 12,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
    overflow: "hidden",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
  },
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 25,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    height: 15,
    position: "absolute",
    bottom: 5,
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
  text: {
    color: colors.white,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
  },
  card: {
    height: 150,
    width: 84,
    backgroundColor: colors.primary,
    borderColor: "black",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RemoveShowPreview;
