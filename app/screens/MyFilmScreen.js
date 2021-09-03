import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Screen from "../components/Screen";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ShowPreview from "../components/ShowPreview";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../config/colors";
import RemoveShowPreview from "../components/RemoveShowPreview";

function MyFilmScreen(props) {
  const [myShows, setMyShows] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    loadShows();
  }, []);

  //https://localhost:5001/list

  const loadShows = async () => {
    // const response = await fetch(showApi.getShows());
    const response = await fetch("https://bingee-react.herokuapp.com/list");
    if (!response.ok) {
      console.log(response.problem);
    }
    const json = await response.json();
    setMyShows(json);
    // console.log("myShows:" + myShows);
  };

  const numColumns = 4;
  // const type = "Remove";
  const type = "Want to Watch";
  const place = "RemoveDetails";
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <MaterialCommunityIcons
            // style={{ marginRight: 300 }}
            name="chevron-left"
            size={40}
            onPress={() => navigation.goBack(null)}
          />
          <Text style={styles.header}>Want to Watch</Text>
        </View>
        {/* <ScrollView> */}
        <FlatList
          data={myShows}
          numColumns={numColumns}
          keyExtractor={(item) => item.showId}
          // renderItem={({ item }) => <Text>{item.name}</Text>}
          renderItem={({ item }) => (
            // <Thumbail
            //   title={item.name}
            //   imageURL={item.image_thumbnail_path}
            //   id={item.id}
            // />
            <RemoveShowPreview
              title={item.name}
              desc={item.network}
              imageURL={item.image_thumbnail_path}
              id={item.showId}
              type={type}
              // place={place}
              // title={item.showId}
              // desc={item.userId}
              // imageURL="https://static.episodate.com/images/tv-show/thumbnail/35624.jpg"
              // id={item.showId}
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
  rowContainer: {
    flexDirection: "row",
  },
});

export default MyFilmScreen;
