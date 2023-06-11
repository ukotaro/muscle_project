import { StatusBar } from "expo-status-bar"
import { Alert, StyleSheet, View, Text, SafeAreaView } from "react-native"
import React, { useEffect, useState } from "react"
import TitleDetail from "./components/uiParts/TitleDetail"
import { NavigationContainer } from "@react-navigation/native"
import AppNavigator from "./navigation/AppNavigator"
import GroupList from "./screens/GroupList"
import Setting from "./screens/Setting"
export default function App() {
  return (
    <View style={styles.container}>
      <Setting></Setting>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F4E6",
  },
})
