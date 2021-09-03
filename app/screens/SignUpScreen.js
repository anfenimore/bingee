import React from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "../components/Screen";
import AppForm from "../components/AppForm";
import ErrorMessage from "../components/ErrorMessage";
import FormField from "../components/FormField";
import AppButton from "../components/AppButton";

function AnotherLogin(props) {
  const navigation = useNavigation();
  return (
    <Screen>
      <MaterialCommunityIcons
        name="chevron-left"
        size={40}
        onPress={() => navigation.goBack(null)}
      />
      <Image style={styles.logo} source={require("../assets/bingeelogo.png")} />
      <AppForm initialValues={"email"} onSubmit={console.log("email")}>
        <ErrorMessage error="Invalid email and/orpassword." />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          //   keyboardType="email-address"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Verify Password"
          secureTextEntry
          textContentType="password"
        />
        <AppButton
          title="Sign Up"
          onPress={() => navigation.navigate("Discover")}
        />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 120,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    resizeMode: "contain",
  },
});

export default AnotherLogin;
