import * as React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RankingChest from "../screens/RankingChest";
import RankingBack from "../screens/RankingBack";

const RankingTab = createMaterialTopTabNavigator();

export default function RankingTabNavigator() {
  return (
    <View style={{ flex: 1 }}>
      <RankingTab.Navigator
        tabBarOptions={{
          activeTintColor: "#594639",
          inactiveTintColor: "rgba(89, 70, 57, 0.4)",
          indicatorStyle: { backgroundColor: "transparent" },
          labelStyle: { fontSize: 20 },
          style: { backgroundColor: "#F8F4E6" },
        }}
      >
        <RankingTab.Screen name="胸" component={RankingChest} />
        <RankingTab.Screen name="背中" component={RankingBack} />
      </RankingTab.Navigator>
    </View>
  );
}
