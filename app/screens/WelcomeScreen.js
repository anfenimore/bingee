import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import routes from "../navigation/routes";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import LoginScreen from "./LoginScreen";
import SingUpScreen from "./SignUpScreen";

// const Stack = createStackNavigator();
// const StackNavigator = () => {
//   <Stack.Navigator>
//     <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
//     <Stack.Screen name="LoginScreen" component={LoginScreen} />
//     <Stack.Screen name="SignUp" component={SingUpScreen} />
//   </Stack.Navigator>;
// };

function WelcomeScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigation("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/bingeelogo.png")}
        />
        <AppText style={styles.tagline}>Bingee</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Sign Up"
          onPress={() => navigation.navigate("SignUp")}
          // onPress={() => navigation.navigate(routes.SIGNUP)}
        />
        <AppButton
          title="Sign In"
          color="secondary"
          // onPress={() => goToLogin()}
          onPress={() => navigation.navigate("Login")}
          // onPress={() => navigation.navigate(routes.LOGIN)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 20,
    width: "100%",
    paddingBottom: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 300,
    resizeMode: "contain",
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  tagline: {
    fontSize: 36,
    fontWeight: "500",
    paddingVertical: 10,
    letterSpacing: 7,
  },
});

export default WelcomeScreen;
