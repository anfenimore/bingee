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

function DiscoverScreen(props) {
  const [search, setSearch] = useState();
  const [newShows, setNewShows] = useState();
  const navigation = useNavigation();

  const [shows, setShows] = useState([]);

  useEffect(() => {
    loadShows();
  }, []);

  const loadShows = async () => {
    // const response = await fetch(showApi.getShows());
    const response = await fetch("https://www.episodate.com/api/search?q=", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      // console.log(response.problem);
    }
    const json = await response.json();
    setShows(json.tv_shows);
    // console.log(shows);
  };

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
    setNewShows(json.tv_shows);
    // console.log(newShows);
  };

  const numColumns = 4;
  const type = "Add to";

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.header}>Discover</Text>
        {/* <ScrollView> */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.searchContainer}>
            <MaterialCommunityIcons
              name="magnify"
              size={20}
              color={colors.medium}
              styles={styles.icon}
            />
            <TextInput
              placeholderTextColor={colors.medium}
              style={styles.input}
              icon="magnify"
              returnKeyType="search"
              onChangeText={(text) => setSearch(text)}
              // onChangeText={(text) => console.log(text)}
              placeholder="Search"
            />
          </View>
          {/* <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="magnify"
            returnKeyType="search"
            onChangeText={(text) => setSearch(text)}
            placeholder="Search"
          ></AppTextInput> */}
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate("SearchResults", {
                  search: search,
                  type: type,
                })
              }
            >
              <Text style={styles.text}>Search</Text>
            </TouchableOpacity>
          </View>
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

          // renderItem={({ item }) => <AppText>{state.data.name}</AppText>}
        ></FlatList>
        {/* </ScrollView> */}
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
  button: {
    width: 80,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 25,
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
  icon: {
    marginRight: 10,
  },
  input: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchContainer: {
    backgroundColor: colors.white,
    borderRadius: 25,
    flexDirection: "row",
    width: 300,
    padding: 10,
    marginVertical: 10,
  },
});

export default DiscoverScreen;
