import React, { Component, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import ShowPreview from "./ShowPreview";

import AppTextInput from "./AppTextInput";
import showApi from "../api/showApi";

class AppSearchBar extends Component {
  state = {
    search: "",
  };

  filterList(list) {
    return list.filter(
      (listItem) =>
        listItem.title.toLowerCase().includes(this.state.search.toLowerCase())
      //   .includes(this.state.search.toLowerCase()) ||
      // listItem.season.toLowerCase().includes(this.state.search.toLowerCase())
    );
  }

  render() {
    const [shows, setShow] = useState([]);

    useEffect(() => {
      loadShows();
    }, []);

    const loadShows = async () => {
      const response = await showApi.getShows();
      setShow(response.data);
    };

    // const list = [
    //   { title: "The Weeknd" },
    //   { title: "Drake" },
    //   { title: "Roddy Ricch" },
    //   { title: "Dua Lipa" },
    // ];

    return (
      <View style={styles.container}>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="magnify"
          returnKeyType="search"
          placeholder="Search"
          onChangeText={(search) => this.setState({ search })}
          //   style={styles.searchBar}
        />
        {this.filterList(list).map((shows, index) => (
          <ShowPreview
            key={index}
            title={show.name}
            // season={listItem.season}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "black",
    alignItems: "center",
    height: "100%",
  },
  searchBar: {
    fontSize: 24,
    margin: 10,
    width: "90%",
    height: 50,
    backgroundColor: "white",
  },
});

export default AppSearchBar;
