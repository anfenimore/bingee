import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";

import showApi from "../api/showApi";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { TextInput } from "react-native-gesture-handler";
import ShowPreview from "../components/ShowPreview";
import Thumbail from "../components/Thumbail";

// import Shows from "../components/Shows";

function TestDiscover(props) {
  const [filteredShows, setFilteredShows] = useState([]);
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadShows();
  }, []);

  const loadShows = async () => {
    // const response = await fetch(showApi.getShows());
    const response = await fetch("https://www.episodate.com/api/search?q=");
    if (!response.ok) {
      console.log(response.problem);
    }
    const json = await response.json();
    setShows(json.tv_shows);
    setFilteredShows(json.tv_shows);
    console.log(shows);
  };

  const searchFilter = (text) => {
    if (text) {
      //this is where the issue is... I need to figure out how to do a filter with a flatlist
      const newData = shows.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : data;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredShows(newData);
      setSearch(text);
      console.log("filter:" + filteredShows);
      console.log("search" + search);
      console.log("text:" + text);
      console.log("newData: " + newData);
      // console.log("itemData:" + itemData);
      // console.log("textData:" + textData);
    } else {
      setFilteredShows(shows);
      setSearch(text);
    }
  };

  const numColumns = 4;

  return (
    <View>
      {/* <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="magnify"
        value={search}
        returnKeyType="search"
        onChangeText={(text) => searchFilter(text)}
        placeholder="Search"
      /> */}
      <TextInput
        value={search}
        placeholder="Search"
        onChangeText={(text) => searchFilter(text)}
      />
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
          />
        )}
      ></FlatList>
    </View>
  );
}

export default TestDiscover;
