import { StyleSheet, View, Text } from "react-native";
import React from "react";

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
    backgroundColor: "#F8F4E6",
    alignItems: "flex-start",
    justifyContent: "center",
    fontColor: "#594639",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom:3
  },
  record: {
    fontSize: 15,
    textAlign: "left",
  },
});
