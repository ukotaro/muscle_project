import * as React from "react"
import { Text, View, StyleSheet } from "react-native"
import BrownButton from "../components/uiParts/button"
import { RootStackParamList } from "../navigation/StackNavigator"
import { StackScreenProps } from "@react-navigation/stack"
import PostEdit from "../components/uiGroup/PostEdit"
import Board from "../components/uiParts/Board"
import NameRecord from "../components/uiParts/NameRecord"
import Post from "../components/uiGroup/Post"
import { createTraining } from "../utils/training_api"
import { createPost } from "../utils/post_api"
import { Training } from "../type"

export default function FinalCheck({
  navigation,
}: StackScreenProps<RootStackParamList, "投稿編集">) {
  const training = { user_id: 1, menu_id: 1, weight: 100, times: 30, sets: 3 }
  const handleButtonPress = async () => {
    try {
      const post = await createPost(1, "コメント", 1, training)
      console.log(post)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F4E6",
      }}
    >
      <Post
        name="範馬刃牙"
        profileImageUrl="https://blog-imgs-93.fc2.com/n/w/1/nw11/20150619_uchimurateruyoshi_32.jpg"
        record="ベンチプレス 500kg 30000回"
        bodyImageUrl="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20230408-00010000-vitup-000-1-view.jpg?pri=l&w=521&h=640&exp=10800"
      />
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
            title="投稿する"
            onPress={() => {
              handleButtonPress()
              navigation.navigate("タイムライン")
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
    width: 300,
  },
  box: {
    width: 120,
  },
})
