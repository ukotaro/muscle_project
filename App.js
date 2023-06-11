import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import TitleDetail from "./components/uiParts/TitleDetail";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
export default function App() {
  return <AppNavigator />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F4E6",
    alignItems: "center",
    justifyContent: "center",
  },
});
