import * as React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirstBottomTabScreen from "../screens/TimeLine";
import SecondBottomTabScreen from "../screens/MyPage";
import RankingChest from "../screens/RankingChest";
import RankingBack from "../screens/RankingBack";
import { NavigationContainer } from "@react-navigation/native";

const RankingTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

function RankingTabNavigator() {
  return (
    <RankingTab.Navigator>
      <RankingTab.Screen name="胸" component={RankingChest} />
      <RankingTab.Screen name="背中" component={RankingBack} />
    </RankingTab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="マイページ" component={SecondBottomTabScreen} />
        <BottomTab.Screen
          name="タイムライン"
          component={FirstBottomTabScreen}
        />
        <BottomTab.Screen name="ランキング" component={RankingTabNavigator} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
