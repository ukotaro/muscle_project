import { StyleSheet, View, Text } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const AddButton = () => {
  const onPress = () => {
    console.log("ok");
  };

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
  container: {
    flex: 1,
    backgroundColor: "#F8F4E6",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
  },
  record: {
    fontSize: 15,
    textAlign: "left",
  },
});
