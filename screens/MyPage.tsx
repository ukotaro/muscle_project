import * as React from "react";
import { Text, View } from "react-native";
import BrownButton from "../components/uiParts/button";
import { RootStackParamList } from "../navigation/StackNavigator";
import { StackScreenProps } from "@react-navigation/stack";

export default function SecondBottomTabScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "マイ記録">) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <BrownButton
        title="編集"
        onPress={() => {
          navigation.navigate("投稿・記録");
        }}
      ></BrownButton>
    </View>
  );
}
