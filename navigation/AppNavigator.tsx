import * as React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirstBottomTabScreen from "../screens/TimeLine";
import SecondBottomTabScreen from "../screens/MyPage";
import { NavigationContainer, Route } from "@react-navigation/native";
import GroupList from "../screens/GroupList";
import Header from "../components/uiParts/Header";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import RankingTabNavigator from "./RankingTabNavigator";

const BottomTab = createBottomTabNavigator();

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
      <View style={{ flex: 1 }}>
        <Header name="My Custom Header" />
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
      </View>
    </NavigationContainer>
  );
}
