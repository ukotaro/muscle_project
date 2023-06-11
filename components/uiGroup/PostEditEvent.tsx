import BrownButton from "../uiParts/button";
import Board from "../uiParts/Board";
import EventImage from "../uiParts/EventImage";
import { StyleSheet, View, Text, Button, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";

type Props = {
  eventId: number;
};

export default function PostEditEvent({ eventId }: Props) {
  return (
    <Board>
      <View style={styles.container}>
        <View style={styles.title}>
          <EventImage eventId={eventId} />
        </View>
        <View style={styles.button}>
          <BrownButton
            title="編集する"
            onPress={() => {
              Alert.alert("ヤーーー！！！！！");
            }}
          ></BrownButton>
        </View>
      </View>
    </Board>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    flexDirection: "column",
    height: 150,
  },
  button: {
    width: 150,
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 160,
    borderRadius: 10,
  },
});
