import { StyleSheet, View, Text, Image } from "react-native";
import React, { useState } from "react";

type Props = {
  eventId: number;
};

export default function EventImage({ eventId }: Props) {
  return eventId === 1 ? (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("../../assets/dumbbell.png")}
      />
      <Text style={styles.textContainer}>ベンチプレス</Text>
    </View>
  ) : eventId === 2 ? (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("../../assets/dumbbell.png")}
      />
      <Text style={styles.textContainer}>スクワット</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("../../assets/dumbbell.png")}
      />
      <Text style={styles.textContainer}>デッドリフト</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F4E6",
    alignItems: "center",
    justifyContent: "space-around",
    fontColor: "#594639",
    flexDirection: "row",
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  textContainer: {
    fontSize: 26,
    color: "#594639",
  },
});
