import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

function ShowDetails({ title, imageURL }) {
  const [details, setDetails] = useState([]);

  const id = 27983;

  useEffect((id) => {
    getDetails(id);
  });

  const getDetails = async () => {
    // console.log("id: " + id);
    const response = await fetch(
      "https://www.episodate.com/api/show-details?q=" + id
    );
    if (!response.ok) {
      console.log(response.problem);
    }
    const json = await response.json();
    setDetails(json.tvShow);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} tint="light" uri={details.image_path} />
      <Text>{details.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ShowDetails;
