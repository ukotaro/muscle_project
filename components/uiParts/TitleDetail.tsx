import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, Text, Button } from "react-native"
import React, { useEffect, useState } from "react"

type Props = {
  title: string
  onPress: () => {}
}
export default function TitleDetail({}) {
  return (
    <View>
      <Text style={styles.title}>チームごりごり</Text>
      <View>
        <Text style={styles.subtitle}>所属人数：3名</Text>
        <Text style={styles.subtitle}>一言：ごりごりになろう!</Text>
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
    marginBottom:8
  },
  subtitle:{
    color:"#594639",
    marginBottom:3
  }
})
