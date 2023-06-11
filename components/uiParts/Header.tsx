import { StyleSheet, View, Text } from "react-native";
import React from "react";
import SettingButton from "./SettingButton";

type Props = {
  name: string;
};

export default function Header({ name }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.rightContainer}>
        <SettingButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#F8F4E6",
    borderBottomColor: "#594639",
    borderBottomWidth: 0.2,
    padding: 5,
  },
  leftContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  name: {
    fontSize: 26,
    color: "#594639",
  },
  record: {
    fontSize: 15,
    color: "#594639",
  },
});
