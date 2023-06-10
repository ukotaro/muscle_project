import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";

type Props = {
  name: string;
  record: string;
};

const NameRecord = ({ name, record }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.record}>本日の記録</Text>
      <Text style={styles.record}>{record}</Text>
    </View>
  );
};

export default NameRecord;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
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
