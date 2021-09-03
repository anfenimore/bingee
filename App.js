import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Screen from "./app/components/Screen";
import DiscoverScreen from "./app/screens/DiscoverScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import colors from "./app/config/colors";
import AccountScreen from "./app/screens/AccountScreen";
import MyFilmScreen from "./app/screens/MyFilmScreen";
import PopularScreen from "./app/screens/PopularScreen";
import DetailsScreen from "./app/screens/DetailsScreen";
import MyListScreen from "./app/screens/MyListScreen";
import MyWatchedScreen from "./app/screens/MyWatchedScreen";
import SearchResultsScreen from "./app/screens/SearchResultsScreen";
import RemoveDetailsScreen from "./app/screens/RemoveDetailsScreen";
import AddConfirmationScreen from "./app/screens/AddConfirmationScreen";
import RemoveConfirmationScreen from "./app/screens/RemoveConfirmationScreen";

export default function App() {
  const Stack = createStackNavigator();
  const Welcome = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarVisible: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          tabBarVisible: false,
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );

  const Discover = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={DiscoverScreen} />
      <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Confirm" component={AddConfirmationScreen} />
    </Stack.Navigator>
  );

  const Popular = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Popular" component={PopularScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Confirm" component={AddConfirmationScreen} />
    </Stack.Navigator>
  );

  const MyLists = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyList" component={MyListScreen} />
      <Stack.Screen name="MyFilm" component={MyFilmScreen} />
      <Stack.Screen name="MyWatched" component={MyWatchedScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="RemoveDetails" component={RemoveDetailsScreen} />
      <Stack.Screen name="ConfirmRemove" component={RemoveConfirmationScreen} />
    </Stack.Navigator>
  );

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.lightGreen,
        activeTintColor: colors.secondary,
        inactiveBackgroundColor: colors.light,
        inactiveTintColor: colors.gray,
        style: {
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Welcome}
        options={{
          tabBarVisible: false,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyList"
        component={MyLists}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="television" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Popular"
        component={Popular}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  return (
    <Screen>
      <NavigationContainer>
        {/* <SearchResultsScreen /> */}
        {/* <StackNavigator /> */}
        <TabNavigator />
      </NavigationContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    backgroundColor: colors.primary,
  },
});
