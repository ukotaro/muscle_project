import * as React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirstBottomTabScreen from "../screens/TimeLine";
import SecondBottomTabScreen from "../screens/MyPage";
import RankingChest from "../screens/RankingChest";
import RankingBack from "../screens/RankingBack";
import { NavigationContainer, Route } from "@react-navigation/native";
import GroupList from "../screens/GroupList";
import {
  BottomTabNavigationOptions,
  BottomTabBarOptions,
} from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";

type TabRoute = {
  name: "Home" | "Clip";
};

const RankingTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

function RankingTabNavigator() {
  return (
    <RankingTab.Navigator
      tabBarOptions={{
        activeTintColor: "#594639",
        inactiveTintColor: "rgba(89, 70, 57, 0.4)",
        indicatorStyle: { backgroundColor: "transparent" },
        labelStyle: { fontSize: 20 },
        style: { marginTop: 100, backgroundColor: "#F8F4E6" },
      }}
    >
      <RankingTab.Screen name="胸" component={RankingChest} />
      <RankingTab.Screen name="背中" component={RankingBack} />
    </RankingTab.Navigator>
  );
}

const screenOption = ({ route }: { route: Route<string> }) => ({
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => {
    if (route.name === "マイ記録") {
      return (
        <MaterialCommunityIcons
          size={focused ? 30 : 20}
          color="#594639"
          name="file-document"
        />
      );
    } else if (route.name === "タイムライン") {
      return (
        <AntDesign
          size={focused ? 30 : 20}
          color="#594639"
          name="clockcircle"
        />
      );
    } else if (route.name === "ランキング") {
      return (
        <FontAwesome5 size={focused ? 30 : 20} color="#594639" name="crown" />
      );
    } else if (route.name === "グループ") {
      return (
        <MaterialCommunityIcons
          size={focused ? 30 : 20}
          color="#594639"
          name="account-group"
        />
      );
    }
  },
});

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={screenOption}
        tabBarOptions={{
          activeTintColor: "#594639",
          inactiveTintColor: "#594639",
          style: { height: 80, backgroundColor: "#F8F4E6" },
        }}
      >
        <BottomTab.Screen name="マイ記録" component={SecondBottomTabScreen} />
        <BottomTab.Screen
          name="タイムライン"
          component={FirstBottomTabScreen}
        />
        <BottomTab.Screen name="ランキング" component={RankingTabNavigator} />
        <BottomTab.Screen name="グループ" component={GroupList} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
