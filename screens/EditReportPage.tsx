import * as React from "react"
import { Text, View, FlatList } from "react-native"
import BrownButton from "../components/uiParts/button"
import { RootStackParamList } from "../navigation/StackNavigator"
import { StackScreenProps } from "@react-navigation/stack"
import PostEditEvent from "../components/uiGroup/PostEditEvent"

export default function EditReportPage({
  navigation,
}: StackScreenProps<RootStackParamList, "投稿・記録">) {
  const dammyData = [
    {
      eventId: 0,
      onPress: () => {
        navigation.navigate("投稿編集")
      },
    },
    {
      eventId: 1,
      onPress: () => {
        navigation.navigate("投稿編集")
      },
    },
    {
      eventId: 2,
      onPress: () => {
        navigation.navigate("投稿編集")
      },
    },
  ]
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#F8F4E6",
      }}
    >
      <FlatList
        data={dammyData}
        renderItem={({ item }) => (
          <PostEditEvent
            eventId={item.eventId}
            onPress={item.onPress}
          />
        )}
      />
    </View>
  )
}
