import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Header from "../components/uiParts/Header";
// Homeタブで表示される画面内容
export default function RankingChest() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Header name={"ランキング"} />
    </View>
  );
}
