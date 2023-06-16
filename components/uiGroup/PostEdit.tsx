import BrownButton from "../uiParts/button"
import Board from "../uiParts/Board"
import EventImage from "../uiParts/EventImage"
import { StyleSheet, View, Text, Button, Image, Alert } from "react-native"
import React, { useEffect, useState } from "react"
import NumberInput from "../uiParts/NumberInput"

type Props = {

  
  eventId: number;
  weight: number | undefined;
  setWeight: React.Dispatch<React.SetStateAction<number | undefined>>;
  time: number | undefined;
  setTime: React.Dispatch<React.SetStateAction<number | undefined>>;
  timeSet: number | undefined;
  setTimeSet: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export default function PostEdit({
  eventId,
  weight,
  setWeight,
  time,
  setTime,
  timeSet,
  setTimeSet,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <EventImage eventId={eventId} />
      </View>
      <View>
        <Text style={styles.textContainer}>重量</Text>
        <View style={styles.title}>
          <NumberInput />
          <Text style={styles.textContainer2}>kg</Text>
        </View>
        <Text style={styles.textContainer}>回数</Text>
        <View style={styles.title}>
          <NumberInput />
          <Text style={styles.textContainer2}>回</Text>
        </View>
        <Text style={styles.textContainer}>セット数</Text>
        <View style={styles.title}>
          <NumberInput />
          <Text style={styles.textContainer2}>回</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F4E6",
    alignItems: "center",
    justifyContent: "center",
    fontColor: "#594639",
    flexDirection: "column",
  },
  textContainer: {
    fontSize: 22,
    color: "#594639",
    marginLeft: 10,
  },
  textContainer2: {
    fontSize: 20,
    color: "#594639",
    marginTop:25
  },
  title: {
    flexDirection: "row",
  },
})
