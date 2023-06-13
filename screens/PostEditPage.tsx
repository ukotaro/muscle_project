import * as React from "react";
import { Text, View } from "react-native";
import BrownButton from "../components/uiParts/button";
import { RootStackParamList } from "../navigation/StackNavigator";
import { StackScreenProps } from "@react-navigation/stack";

export default function PostEditPage({
  navigation,
}: StackScreenProps<RootStackParamList, "投稿編集">) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <BrownButton
        title="投稿編集ページです"
        onPress={() => {
          navigation.goBack();
        }}
      ></BrownButton>
    </View>
  );
}
