import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import { Colors } from "react-native/Libraries/NewAppScreen";

function DetailsScreen({ route }) {
  const [details, setDetails] = useState([]);
  const navigation = useNavigation();

  const id = route.params.id;
  const type = route.params.type;

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
    // console.log(details.image_path);
    // console.log(details);
  };

  const getDetail = async () => {
    const AllPostsApiUrl = "https://www.episodate.com/api/show-details?q=" + id;
    fetch(AllPostsApiUrl)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (json) {
        shows = json;
        // console.log(inventory);
        setDetails(shows.tvShow);
      });
  };

  const addToList = async () => {
    // console.log("id: " + id);
    let myShow = {
      userId: 1,
      showId: route.params.id,
      name: details.name,
      image_thumbnail_path: details.image_thumbnail_path,
      network: details.network,
    };
    const response = await fetch("https://bingee-react.herokuapp.com/list", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myShow),
    }).then((response) => {
      if (!response.ok) {
        console.log(response.problem);
      }
    });
    navigation.navigate("Confirm");
    // console.log("Body: " + JSON.stringify(myShow));
  };

  // const myMethod = "PUT";

  const addToWatched = async () => {
    // console.log("id: " + id);
    let myShow = {
      userId: 1,
      showId: route.params.id,
      name: details.name,
      image_thumbnail_path: details.image_thumbnail_path,
      network: details.network,
    };
    // if (type == "Remove") {
    //   myMethod = "DELETE";
    //   console.log("Remove");
    // }
    const response = await fetch("https://bingee-react.herokuapp.com/watch", {
      method: "PUT",
      // method: myMethod,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myShow),
    }).then((response) => {
      if (!response.ok) {
        console.log(response.problem);
      }
    });
    navigation.navigate("Confirm");
  };

  return (
    <Screen>
      <MaterialCommunityIcons
        name="chevron-left"
        size={40}
        onPress={() => navigation.goBack(null)}
      />
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.image}
            tint="light"
            uri={details.image_thumbnail_path}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{details.name}</Text>
            <Text style={styles.header}>Genres:</Text>
            <Text style={styles.subTitle}>{details.genres}</Text>
            {/* <Text style={styles.subTitle}>{details.genres.join(", ")}</Text> */}
            <Text style={styles.header}>Network:</Text>
            <Text style={styles.subTitle}>{details.network}</Text>
            <Text style={styles.header}>Rating:</Text>
            <Text style={styles.subTitle}>{details.rating} / 10</Text>
          </View>
        </View>
        <View style={styles.details}>
          {/* <Text style={styles.header}>Description: </Text> */}
          <Text style={styles.subTitle}>
            Description: {details.description}
          </Text>
          <Text style={styles.descText}>Status: {details.status}</Text>
          {/* <Text style={styles.descText}>
          Number of Seasons: {details.countdown.season}
        </Text> */}
        </View>
        <AppButton
          title={type + " Want to Watch"}
          onPress={() => addToList()}
        />
        {/* <AppButton title="Add to Want to Watch" onPress={() => addToList()} /> */}
        <AppButton
          title={type + " Watched"}
          color="secondary"
          onPress={() => addToWatched()}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    flexDirection: "row",
  },
  details: { paddingTop: 10, paddingLeft: 10 },
  descText: {
    paddingTop: 10,
    color: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
  },
  header: {
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
    fontWeight: "bold",
    color: colors.dark,
  },
  image: {
    width: 200,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // top: 0,
  },
  subTitle: {
    color: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
  },
  title: {
    color: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir Next",
    fontWeight: "bold",
  },
  textContainer: {
    paddingLeft: 10,
    width: 200,
    height: 300,
    justifyContent: "space-evenly",
    // alignItems: "right",
  },
});

export default DetailsScreen;
