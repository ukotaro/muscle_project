import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, Text, Button, Image, Alert } from "react-native"
import React, { useEffect, useState } from "react"
import Board from "../uiParts/Board"
import TitleDetail from "../uiParts/TitleDetail"
import BrownButton from "../uiParts/button"

type Props = {
  title: string
  uri: string
  member: number
  detail:string
}
export default function Team({title,uri,detail,member}:Props) {
  return (
    <Board>
      <View style={styles.title}>
        <Image
          source={{
            uri: uri,
          }}
          style={styles.image}
        />
        <View style={styles.teamDetail}>
          <TitleDetail title={title} member={member} detail={detail}></TitleDetail>
          <BrownButton
            title="参加する"
            onPress={() => {
              Alert.alert("今日から君もマッチョ！")
            }}
          ></BrownButton>
        </View>
      </View>
    </Board>
  )
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  teamDetail :{
    flexDirection:"column",
    justifyContent:"space-around"
  },
  image :{ 
    height:200,
    width:160,
    borderRadius:10
  }
})
