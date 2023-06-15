import * as React from "react"
import { Text, View, FlatList, ScrollView, Button, Alert, StyleSheet } from "react-native"
import Post from "../components/uiGroup/Post"
import AddButton from "../components/uiParts/AddButton"
import { RootStackParamList } from "../navigation/StackNavigator"
import { StackScreenProps } from "@react-navigation/stack"
import SettingButton from "../components/uiParts/SettingButton"
import { getUser } from "../utils/user_api"

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
        const user = await getUser(1)
        console.log(user)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFEGcAp4g6HtiLSN7r0Qalc3oYFJnXSShCblsZE5f-dFL6eM3mpo7gkOu0QiomHZiFbII&usqp=CAU",
      name: "マスオさん",
      record: "スクワット 700kg 4242回",
      profileImageUrl: "https://blog-imgs-93.fc2.com/n/w/1/nw11/20150619_uchimurateruyoshi_32.jpg",
    },
    {
      bodyImageUrl:
        "https://stat.ameba.jp/user_images/20190823/14/ragu5093/02/7c/j/o0300043514548068133.jpg",
      name: "マスオさん",
      record: "デッドリフト 400kg 9999回",
      profileImageUrl: "https://blog-imgs-93.fc2.com/n/w/1/nw11/20150619_uchimurateruyoshi_32.jpg",
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
