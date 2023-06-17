import * as React from "react"
import { Text, View, FlatList } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import RankingWeight from "../components/uiParts/RankingWeight"
import { getGroupPosts, getRanking } from "../utils/group_api"

// Settingタブで表示される画面内容
export default function RankingBack() {
  const [data, setData] = React.useState()
  React.useEffect(() => {
    const fetchGroupPosts = async () => {
      try {
        const groups = await getRanking(1, 2)
        setData(groups)
        console.log(groups)
      } catch (error) {
        console.log(error)
      }
    }

    fetchGroupPosts()
  }, [])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F8F4E6",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <RankingWeight
            rank={index + 1}
            name={item.User.name}
            weight={item.Total_weight}
            uri={
              "https://yt3.googleusercontent.com/ytc/AGIKgqNFPZVpvvBHWw5mRjQY3UQNDBR7_PxSmRwHactimA=s900-c-k-c0x00ffffff-no-rj"
            }
          />
        )}
      />
    </View>
  )
}
