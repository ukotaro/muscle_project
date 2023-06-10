import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, Text, Button } from "react-native"
import React, { useEffect, useState } from "react"

type Props = {
  title: string
  onPress: () => {}
}
export default function BrownButton({ title, onPress }: Props) {
  return (
    <View style={styles.square}>
      <Button title={title} color="#F8F4E6" onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    color: "#F8F4E6",
    paddingVertical: 8,
    backgroundColor: "#594639",
    textAlign: "center",
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#594639",
    overflow: "hidden",
  },
  square: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#594639",
  },
})
