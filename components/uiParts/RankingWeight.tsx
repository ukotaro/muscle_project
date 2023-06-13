import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, Text, Button, Image } from "react-native"
import React, { useEffect, useState } from "react"

type Props = {
  rank: number
  name: string
  weight: number
  uri:string
}
export default function RankingWeight({rank,name,weight,uri}:Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{rank}位　{name}</Text>
        <Text style={styles.weight}>総重量　{weight} kg</Text>
      </View>
      <Image source={{ uri: uri }} style={{ width: 250, height: 250 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize:25,
    color:"#594639",
    marginBottom:8,
    fontWeight:"bold"
  },
  weight :{
    fontSize:25,
    color:"#594639",
    marginBottom:8,
  },
  container :{
    marginVertical:20
  }
})
