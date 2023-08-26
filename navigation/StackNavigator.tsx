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
import MyPage from "../screens/MyPage";
import TimeLine from "../screens/TimeLine";
import FinalCheck from "../screens/FinalCheck";
import { Camera } from "expo-camera";
import CameraShot from "../screens/Camera";
import PostDetail from "../screens/PostDetail";

export type RootStackParamList = {
  マイ記録: undefined;
  プロフィール設定: undefined;
  "投稿・記録": undefined;
  投稿編集: { eventId: number };
  タイムライン: undefined;
  カメラ: {
    eventId: number;
    weight: number | undefined;
    time: number | undefined;
    timeSet: number | undefined;
  };
  最終確認: {
    eventId: number;
    weight: number | undefined;
    time: number | undefined;
    timeSet: number | undefined;
    image: string | null;
  };
  投稿詳細: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="マイ記録" component={MyPage} />
      <Stack.Screen name="タイムライン" component={TimeLine} />
      <Stack.Screen name="プロフィール設定" component={Setting} />
      <Stack.Screen name="投稿・記録" component={EditReportPage} />
      <Stack.Screen name="投稿編集" component={PostEditPage} />
      <Stack.Screen name="最終確認" component={FinalCheck} />
      <Stack.Screen name="カメラ" component={CameraShot} />
      <Stack.Screen name="投稿詳細" component={PostDetail} />
    </Stack.Navigator>
  );
}
