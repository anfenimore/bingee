import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppText from "../components/AppText";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import AppButton from "../components/AppButton";

function AccountScreen(props) {
  const navigation = useNavigation();
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.header}>Account</Text>
      </View>
      <ListItem
        title="Amber Fenimore"
        subTitle="anfenimore@crimson.ua.edu"
        image={require("../assets/bingeelogo.png")}
      />
      <AppButton
        title="Log Out"
        onPress={() => navigation.navigate("Welcome")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
    fontWeight: "bold",
  },
});

export default AccountScreen;
