import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";
import Icon from "./Icon";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </AppText>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.interactContainer}>
        <View style={styles.interact}>
          <Icon name="heart-outline" size={16} />
          <Text style={styles.text}>Like</Text>
        </View>
        <View style={styles.interact}>
          <Icon name="comment-outline" size={16} />
          <Text style={styles.text}>Comment</Text>
        </View>
      </View>
      {/* <View style={styles.interactContainer}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            style={styles.interact}
            name="heart-outline"
            size={16}
          >
            <Text style={styles.text}>Like</Text>
          </MaterialCommunityIcons>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            style={styles.interact}
            name="comment-outline"
            size={16}
          >
            <Text style={styles.text}>Comment</Text>
          </MaterialCommunityIcons>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  interact: {
    width: "40%",
    padding: 10,
    alignItems: "center",
  },
  interactContainer: {
    backgroundColor: colors.light,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    fontFamily: "Avenir Next",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
