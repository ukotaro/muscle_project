import * as React from "react"
import { Text, View, FlatList, ScrollView, Button, Alert, StyleSheet } from "react-native"
import Post from "../components/uiGroup/Post"
import AddButton from "../components/uiParts/AddButton"
import { RootStackParamList } from "../navigation/StackNavigator"
import { StackScreenProps } from "@react-navigation/stack"
import SettingButton from "../components/uiParts/SettingButton"
import { getUser } from "../utils/user_api"
import { createUser } from "../utils/user_api"
import { getUserPosts } from "../utils/post_api"

type record = {
  name: string
  record: string
  bodyImageUrl: string
  profileImageUrl: string
}

export default function MyPage({ navigation }: StackScreenProps<RootStackParamList, "マイ記録">) {
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserPosts(1).then((res) => console.log(res))
        console.log(user)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const damyData: record[] = [
    {
      bodyImageUrl: require("../assets/muscle.png"),
      name: "りゅーたん",
      record: "ベンチプレス 50kg 7回",
      profileImageUrl: require("../assets/topimg.png"),
    },
    {
      bodyImageUrl: require("../assets/muscle2.png"),
      name: "りゅーたん",
      record: "スクワット 70kg 20回",
      profileImageUrl: require("../assets/topimg.png"),
    },
    {
      bodyImageUrl: require("../assets/muscle3.png"),
      name: "りゅーたん",
      record: "デッドリフト 80kg 9回",
      profileImageUrl: require("../assets/topimg.png"),
    },
  ]
  return (
    <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#F8F4E6" }}>
      <View></View>
      <FlatList
        data={damyData}
        renderItem={({ item }) => (
          <Post
            name={item.name}
            record={item.record}
            bodyImageUrl={item.bodyImageUrl}
            profileImageUrl={item.profileImageUrl}
          />
        )}
      />
      <View style={styles.settingButton}>
        <SettingButton
          onPress={() => {
            navigation.navigate("プロフィール設定")
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  settingButton: {
    position: "absolute",
    bottom: 20,
    zIndex: 300,
    right: 20,
  },
})
