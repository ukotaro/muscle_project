import { StatusBar } from "expo-status-bar"
import { StyleSheet, TextInput, FlatList, View, Alert, Button } from "react-native"
import React, { useEffect, useState } from "react"
import Team from "../components/uiGroup/team"
import BrownButton from "../components/uiParts/button"
import { getGroupPosts } from "../utils/group_api"
import { getGroups } from "../utils/group_api"

type teamProps = {
  title: string
  uri: string
  member: number
  detail: string
}

export default function GroupList() {
  const [text, onChangeText] = React.useState<string>("チームを検索してください")
  const damyData: teamProps[] = [
    {
      uri: "https://newsatcl-pctr.c.yimg.jp/t/amd-img/20230408-00010000-vitup-000-1-view.jpg?pri=l&w=521&h=640&exp=10800",
      title: "チームゴリラ",
      detail: "ゴリラ限定です",
      member: 3,
    },
    {
      uri: "https://stat.ameba.jp/user_images/20230109/17/lycra/09/14/j/o0861144715227708362.jpg",
      title: "チームごりごり",
      detail: "ごりごりになろう",
      member: 5,
    },
    {
      uri: "https://static.tokyo-np.co.jp/image/article/size1/e/4/b/0/e4b060bf6943a50cd4643d8c6e1f5e38_4.jpg",
      title: "細マッチョの会",
      detail: "Gacktを目指そう!",
      member: 4,
    },
  ]
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const groups = await getGroups()
        console.log(groups)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])
  return (
    <View style={{ backgroundColor: "#F8F4E6", flex: 1 }}>
      <View style={styles.serch}>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
        <View style={styles.button}>
          <Button
            title="検索"
            onPress={() => {
              Alert.alert("そんなチームねえよばーか消えろ")
            }}
            color="#F8F4E6"
          ></Button>
        </View>
      </View>
      <FlatList
        data={damyData}
        renderItem={({ item }) => (
          <Team title={item.title} uri={item.uri} detail={item.detail} member={item.member} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  teamDetail: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  image: {
    height: 200,
    width: 160,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    borderColor: "#594639",
    width: "78%",
  },
  serch: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    marginTop: 20,
    marginHorizontal: 12,
    justifyContent: "space-around",
    marginBottom: 12,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#594639",
  },
})
