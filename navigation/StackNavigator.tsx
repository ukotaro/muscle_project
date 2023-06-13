import * as React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstBottomTabScreen from "../screens/TimeLine";
import SecondBottomTabScreen from "../screens/MyPage";
import { NavigationContainer, Route } from "@react-navigation/native";
import GroupList from "../screens/GroupList";
import Header from "../components/uiParts/Header";
import RankingTabNavigator from "./RankingTabNavigator";
import Setting from "../screens/Setting";
import EditReportPage from "../screens/EditReportPage";
import PostEditPage from "../screens/PostEditPage";

export type RootStackParamList = {
  マイ記録: undefined;
  プロフィール設定: undefined;
  "投稿・記録": undefined;
  投稿編集: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="マイ記録" component={SecondBottomTabScreen} />
      <Stack.Screen name="プロフィール設定" component={Setting} />
      <Stack.Screen name="投稿・記録" component={EditReportPage} />
      <Stack.Screen name="投稿編集" component={PostEditPage} />
    </Stack.Navigator>
  );
}
