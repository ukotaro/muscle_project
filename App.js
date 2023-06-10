import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import NewsKizi from "./components/NewsKizi"
import React, { useEffect, useState } from "react"

export default function App() {
  const [news, setNews] = useState([]);
  useEffect(()=>{alert("useEffectが動いたよ")},[])
  return (
    <View style={styles.container}>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
