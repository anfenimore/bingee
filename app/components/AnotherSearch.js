import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";

const API_ENDPOINT = `https://randomuser.me/api/?seed=1&page=1&results=20`;

// const data = [
//   { id: "1", title: "First item" },
//   { id: "2", title: "Second item" },
//   { id: "3", title: "Third item" },
//   { id: "4", title: "Fourth item" },
// ];

function AnotherSearch(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((results) => {
        setData(results);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorite Contacts</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.first}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              source={{ uri: item.picture.thumbnail }}
              style={styles.coverImage}
            />
            <View style={styles.metaInfo}>
              <Text
                style={styles.title}
              >{`${item.name.first} ${item.name.last}`}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#101010",
    marginTop: 60,
    fontWeight: "700",
  },
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  metaInfo: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    width: 200,
    padding: 10,
  },
});

export default AnotherSearch;
