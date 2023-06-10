import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, Text, Button } from "react-native"
import React, { useEffect, useState } from "react"

type Props = {
  title: string
  detail:string
  member:number
}
export default function TitleDetail({title,detail,member}:Props) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View>
        <Text style={styles.subtitle}>所属人数：{member}名</Text>
        <Text style={styles.subtitle}>一言：{detail}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "#594639",
    fontWeight:"bold",
    fontSize:20,
    letterSpacing:2.5,
    marginBottom:16
  },
  subtitle:{
    color:"#594639",
    marginBottom:3
  }
})
