import * as React from "react"
import { Text, View, StyleSheet } from "react-native"
import BrownButton from "../components/uiParts/button"
import { RootStackParamList } from "../navigation/StackNavigator"
import { StackScreenProps } from "@react-navigation/stack"
import PostEdit from "../components/uiGroup/PostEdit"

export default function PostEditPage({
  navigation,
}: StackScreenProps<RootStackParamList, "投稿編集">) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F4E6",
      }}
    >
      <PostEdit eventId={1} />
      <View style={styles.flex}>
        <View style={styles.box}>
          <BrownButton
            title="戻る"
            onPress={() => {
              navigation.goBack()
            }}
          ></BrownButton>
        </View>
        <View style={styles.box}>
          <BrownButton
            title="撮影する"
            onPress={() => {
              navigation.navigate("最終確認")
            }}
          ></BrownButton>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    width: 280,
  },
  box: {
    width: 120,
  },
})
