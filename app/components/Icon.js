import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function Icon({ name, size = 40, iconColor = colors.black }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <MaterialCommunityIcons name={name} color={iconColor} size={size} /> */}
      <MaterialCommunityIcons name={name} size={size} />
    </View>
  );
}

export default Icon;
