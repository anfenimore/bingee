import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import showApi from "../api/showApi";
import Thumbail from "../components/Thumbail";
import ShowPreview from "../components/ShowPreview";
import Screen from "../components/Screen";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

// import Shows from "../components/Shows";

function SearchResultsScreen({ route }) {
  const search = route.params.search;
  const navigation = useNavigation();
  //   const search = "Arrow";
  const [shows, setShows] = useState([]);

  useEffect(() => {
    loadSearch();
  }, []);

  const loadSearch = async () => {
    const response = await fetch(
      "https://www.episodate.com/api/search?q=" + search,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      // console.log(response.problem);
    }
    const json = await response.json();
    setShows(json.tv_shows);
    // console.log(newShows);
  };

  const numColumns = 4;
  const type = "Add to";

  return (
    <Screen>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            // style={{ marginRight: 300 }}
            name="chevron-left"
            size={40}
            onPress={() => navigation.goBack(null)}
          />
          <Text style={styles.header}>Search Results</Text>
        </View>
        <FlatList
          data={shows}
          numColumns={numColumns}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ShowPreview
              title={item.name}
              desc={item.network}
              imageURL={item.image_thumbnail_path}
              id={item.id}
              type={type}
            />
          )}
        ></FlatList>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 65,
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

  input: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default SearchResultsScreen;
