
import * as React from "react"
import { Text, View, FlatList } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import RankingWeight from "../components/uiParts/RankingWeight"
import { getGroupPosts } from "../utils/group_api"

type data = {}
// Settingタブで表示される画面内容
export default function RankingLeg() {
  React.useEffect(() => {
    const fetchGroupPosts = async () => {
      try {
        const groups = await getGroupPosts(2)
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
      name: "りゅーたん",
      weight: 7000,
      uri: "https://www.cnn.co.jp/storage/2023/01/27/d6c727430eb83a7008c6d9f438a4acae/leopard-2-file-101317-super-169.jpg",
    },
    {
      rank: 2,
      name: "ゆいぴん",
      weight: 5000,
      uri: "https://www.city.sendai.jp/zoo/dobutsu/honyurui/zo/images/doubutsusyoukai_afurikazou_wb500px.jpg",
    },
    {
      rank: 3,
      name: "タコさん",
      weight: 1000,
      uri: "https://www.carsensor.net/contents/article_images/_67229/daihatsu_top.jpg",
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
