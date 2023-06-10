import { StyleSheet, View, Text } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  onPress: () => {};
};
const SettingButton = ({ onPress }: Props) => {
  return (
    <MaterialCommunityIcons.Button
      size={50}
      color="#594639"
      backgroundColor="#F8F4E6"
      name="cog"
      iconStyle={{ marginRight: 0 }}
      onPress={onPress}
    />
  );
};
export default SettingButton;

const styles = StyleSheet.create({
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
});
