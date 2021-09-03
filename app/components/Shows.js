import React from "react";
import { Flatlist, View, StyleSheet, TouchableOpacity } from "react-native";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import AppText from "./AppText";

function Shows({ data }) {
  const renderItem = ({ item }) => {
    console.log(item);
    ReloadInstructions(
      <TouchableOpacity>
        <Text>Show1</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Flatlist
        // data={[data]}
        data={[
          { id: 1, name: "Amber" },
          { id: 2, name: "Test" },
        ]}
        jeyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      ></Flatlist>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Shows;
