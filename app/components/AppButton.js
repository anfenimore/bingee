import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
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
    color: colors.white,
    fontSize: 18,
    fontFamily: "Avenir Next",
    textTransform: "uppercase",
    alignContent: "center",
    letterSpacing: 7,
  },
});

export default AppButton;
