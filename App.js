import { StatusBar } from "expo-status-bar"
import { Alert, StyleSheet, View } from "react-native"
import React, { useEffect, useState } from "react"
import TitleDetail from "./components/uiParts/TitleDetail"

export default function App() {
  return (
    <View style={styles.container}>
      <TitleDetail></TitleDetail>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F4E6",
    alignItems: "center",
    justifyContent: "center",
  },
})
