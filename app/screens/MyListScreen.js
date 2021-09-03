import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Screen from "../components/Screen";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ShowPreview from "../components/ShowPreview";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../config/colors";
import List from "../components/List";

function MyListScreen() {
  const navigation = useNavigation();

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.header}>My Lists</Text>
      </View>
      <View style={styles.listContainer}>
        <MaterialCommunityIcons name="chevron-right" size={40} />
        <List list="Want to Watch" endpoint={"MyFilm"} />
      </View>
      <View style={styles.listContainer}>
        <MaterialCommunityIcons name="chevron-right" size={40} />
        <List list="My Watched" endpoint={"MyWatched"} />
      </View>
      {/* <TouchableOpacity
          styles={styles.list}
          onPress={() => navigation.navigate("MyFilm")}
        >
          <Text style={styles.text}>Want to Watch</Text>
        </TouchableOpacity> */}
      {/* <TouchableOpacity
          styles={styles.list}
          //   onPress={() => navigation.navigate("MyWatched")}
        >
          <Text style={styles.text}>My Watched List</Text>
        </TouchableOpacity> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: colors.dark,
    borderBottomWidth: 2,
  },
  header: {
    color: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
    fontWeight: "bold",
  },
  listContainer: {
    backgroundColor: colors.light,
    borderBottomColor: colors.dark,
    borderBottomWidth: 2,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default MyListScreen;
