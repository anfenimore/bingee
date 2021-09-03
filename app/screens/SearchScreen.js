import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";

import Shows from "../components/Shows";

function DiscoverScreen(props) {
  const [search, setSearch] = useState();

  const { showState } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="magnify"
        returnKeyType="search"
        onChangeText={(text) => setSearch(text)}
        placeholder="Search"
      ></AppTextInput>
      <Shows />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default DiscoverScreen;
