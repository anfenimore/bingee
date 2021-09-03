import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Screen from "../components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ShowPreview from "../components/ShowPreview";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../config/colors";

function PopularScreen(props) {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    loadShows();
  }, []);

  const loadShows = async () => {
    // const response = await fetch(showApi.getShows());
    const response = await fetch(
      "https://www.episodate.com/api/most-popular?page=1"
    );
    if (!response.ok) {
      console.log(response.problem);
    }
    const json = await response.json();
    setShows(json.tv_shows);
    // console.log(shows);
  };

  const numColumns = 4;
  const type = "Add to";

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.header}>Popular Shows</Text>
        {/* <ScrollView> */}
        <FlatList
          data={shows}
          numColumns={numColumns}
          keyExtractor={(item) => item.id.toString()}
          // renderItem={({ item }) => <Text>{item.name}</Text>}
          renderItem={({ item }) => (
            // <Thumbail
            //   title={item.name}
            //   imageURL={item.image_thumbnail_path}
            //   id={item.id}
            // />
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
    paddingBottom: 25,
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

export default PopularScreen;
