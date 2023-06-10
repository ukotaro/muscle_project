import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  height: number;
};

const Board = ({ height }: Props) => {
  return (
    <View style={styles.outer}>
      <View style={[styles.shadowBox, { height: height }]} />
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  outer: {
    paddingTop: 10, // adjust this value to control the top shadow
    width: "100%",
    padding: 10,
  },
  shadowBox: {
    backgroundColor: "#F8F4E6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 20,
  },
});
