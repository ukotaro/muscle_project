import { StyleSheet, View, Text } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  onPress: () => {};
};
const AddButton = ({ onPress }: Props) => {
  return (
    <View style={styles.iconContainer}>
      <MaterialCommunityIcons.Button
        size={44}
        backgroundColor="#594639"
        name="plus"
        iconStyle={{ marginRight: 0 }}
        onPress={onPress}
      />
    </View>
  );
};
export default AddButton;

const styles = StyleSheet.create({
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    marginRight:20,
    marginBottom:10
  },
});
