import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";

function List({ list, endpoint }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      styles={styles.list}
      onPress={() => navigation.navigate(endpoint)}
      //onPress={() => console.log(endpoint)}
    >
      <Text style={styles.text}>{list}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "100%",
    marginVertical: 10,
    //IDK what this looks like
    shadowRadius: 15,
  },
  text: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    color: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
    backgroundColor: colors.light,
  },
});

export default List;
