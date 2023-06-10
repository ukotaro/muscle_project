import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import React, { useEffect, useState } from "react"

export default function App() {
  const [news, setNews] = useState([])
  useEffect(() => {
    alert("useEffectが動いたよ")
  }, [])
  return 
  <View>
    <View></View>
  </View>
}
