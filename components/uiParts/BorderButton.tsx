import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";

type Props = {
  title: string;
  onPress: () => void;
};
export default function BorderButton({ title, onPress }: Props) {
  return (
    <View style={styles.square}>
      <Button title={title} color="#594639" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#F8F4E6",
    borderWidth: 1,
    borderColor: "#594639",
  },
});
