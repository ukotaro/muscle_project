import * as React from "react"
import { Text, View, FlatList } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import RankingWeight from "../components/uiParts/RankingWeight"
import { getGroupPosts } from "../utils/group_api"

// Settingタブで表示される画面内容
export default function RankingBack() {
  React.useEffect(() => {
    const fetchGroupPosts = async () => {
      try {
        const groups = await getGroupPosts(3)
        console.log(groups)
      } catch (error) {
        console.log(error)
      }
    }

    fetchGroupPosts()
  }, [])
  const dammyData = [
    {
      rank: 1,
      name: "範馬勇次郎",
      weight: 500000,
      uri: "https://m-78.jp/wp-content/uploads/2022/12/thumb_decker_ragon.jpg",
    },
    {
      rank: 2,
      name: "範馬刃牙",
      weight: 636363636,
      uri: "https://www.cnn.co.jp/storage/2023/01/27/d6c727430eb83a7008c6d9f438a4acae/leopard-2-file-101317-super-169.jpg",
    },
    {
      rank: 3,
      name: "花山薫",
      weight: 600000,
      uri: "https://askul.c.yimg.jp/img/product/3L2/NW94013_3L2.jpg",
    },
  ]
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F8F4E6",
      }}
    >
      <FlatList
        data={dammyData}
        renderItem={({ item }) => (
          <RankingWeight rank={item.rank} name={item.name} weight={item.weight} uri={item.uri} />
        )}
      />
    </View>
  )
}
