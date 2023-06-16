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
      bodyImageUrl:
        "https://newsatcl-pctr.c.yimg.jp/t/amd-img/20230408-00010000-vitup-000-1-view.jpg?pri=l&w=521&h=640&exp=10800",
      name: "マスオさん",
      record: "ベンチプレス 500kg 7000回",
      profileImageUrl: "https://blog-imgs-93.fc2.com/n/w/1/nw11/20150619_uchimurateruyoshi_32.jpg",
    },
    {
      bodyImageUrl:
        "https://stat.ameba.jp/user_images/20230109/17/lycra/09/14/j/o0861144715227708362.jpg",
      name: "たらちゃん",
      record: "スクワット 700kg 4242回",
      profileImageUrl:
        "https://www.sponichi.co.jp/entertainment/news/2023/02/10/jpeg/20230210s00041000290000p_view.webp",
    },
    {
      bodyImageUrl:
        "https://static.tokyo-np.co.jp/image/article/size1/e/4/b/0/e4b060bf6943a50cd4643d8c6e1f5e38_4.jpg",
      name: "花澤さん",
      record: "デッドリフト 400kg 9999回",
      profileImageUrl: "https://pics.prcm.jp/5dc71768dd92f/82452502/jpeg/82452502.jpeg",
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
