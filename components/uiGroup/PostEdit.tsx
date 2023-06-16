import BrownButton from "../uiParts/button"
import Board from "../uiParts/Board"
import EventImage from "../uiParts/EventImage"
import { StyleSheet, View, Text, Button, Image, Alert } from "react-native"
import React, { useEffect, useState } from "react"
import NumberInput from "../uiParts/NumberInput"

type Props = {
  eventId: number
}

export default function PostEdit({ eventId }: Props) {
  const [weight, setWeight] = useState<number>()
  const [time, setTime] = useState<number>()
  const [timeSet, setTimeSet] = useState<number>()

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
