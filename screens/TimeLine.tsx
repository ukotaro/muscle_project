import * as React from "react"
import { Text, View, FlatList, Button, StyleSheet } from "react-native"
import Post from "../components/uiGroup/Post"
import AddButton from "../components/uiParts/AddButton"
import { RootStackParamList } from "../navigation/StackNavigator"
import { StackScreenProps } from "@react-navigation/stack"
import { getGroupPosts } from "../utils/group_api"

type record = {
  name: string
  record: string
  bodyImageUrl: string
  profileImageUrl: string
}

export default function TimeLine({
  navigation,
}: StackScreenProps<RootStackParamList, "タイムライン">) {
  React.useEffect(() => {
    const fetchGroupPosts = async () => {
      try {
        const groups = await getGroupPosts(1)
        console.log(groups)
      } catch (error) {
        console.log(error)
      }
    }

    fetchGroupPosts()
  }, [])
  const damyData: record[] = [
    {
      bodyImageUrl: require("../assets/muscle4.png"),
      name: "りゅーたん",
      record: "ベンチプレス 50kg 70回",
      profileImageUrl: require("../assets/topimg.png"),
    },
    {
      bodyImageUrl:
      require("../assets/muscle5.png"),
      name: "ゆいぴん",
      record: "スクワット 70kg 8回",
      profileImageUrl:
      require("../assets/muscle6.png"),
    },
    {
      bodyImageUrl:
      require("../assets/muscle7.png"),
      name: "タコさん",
      record: "デッドリフト 40kg 99回",
      profileImageUrl: require("../assets/muscle8.png"),
    },
  ]
  return (
    <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#F8F4E6" }}>
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
      <View style={styles.buttonContainer}>
        <AddButton
          onPress={() => {
            navigation.navigate("投稿・記録")
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
})
