import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, Text, Button, Image } from "react-native"
import React, { useEffect, useState } from "react"

type Props = {
  rank: number
  name: string
  weight: number
  uri: string
}
export default function RankingWeight({ rank, name, weight, uri }: Props) {
  const crown = {
    1: "https://4.bp.blogspot.com/-H3DJo6OsvRU/XLAdPsMHakI/AAAAAAABSWw/LWt4cZiyq3I3MBoWbb_XA9Sr6QbKyxOaACLcBGAs/s800/mark_oukan_crown1_gold.png",
    2: "https://4.bp.blogspot.com/-z8be5GXEMqc/XLAdPzglLmI/AAAAAAABSW0/ejH10sUufeEcXO3C320sc4KteX9b64rHgCLcBGAs/s800/mark_oukan_crown2_silver.png",
    3: "https://2.bp.blogspot.com/-aNak4afgYNg/XLAdQk9C9bI/AAAAAAABSW4/gFy0E_UQqi8lqaBUfYFdKQLt3yOE0mcnQCLcBGAs/s800/mark_oukan_crown3_bronze.png",
  }
  const [isCrown, setIsCrown] = useState<boolean>(false)
  const [ranking, setRanking] = useState<number>(1)
  const [url, setUrl] = useState<string>("")
  useEffect(() => {
    if (rank in [1, 2, 3]) {
      setIsCrown(true)
      if (rank === 1) {
        setRanking(1)
      } else if (rank === 2) {
        setRanking(2)
      } else if (rank === 3) {
        setRanking(3)
      }
    }
  }, [])
  useEffect(() => {
    if (ranking == 1) {
      setUrl(crown[1])
    } else if (ranking == 2) {
      setUrl(crown[2])
    } else if (ranking == 3) {
      setUrl(crown[3])
    }
  }, [ranking])

  return (
    <View style={styles.container}>
      <View>
        <View style={{flexDirection:"row"}}>
        {isCrown ? (
          <Image source={{ uri: url }} style={{ width: 30, height: 20,marginRight:10,marginTop:5 }}></Image>
        ) : (
          <View></View>
        )}
        <Text style={styles.title}>
          {rank}位　{name}
        </Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.weight2}>総重量</Text>
          <Text style={styles.weight}>{weight} kg</Text>
        </View>
      </View>
      <Image source={{ uri: uri }} style={{ width: 250, height: 250 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: "#594639",
    marginBottom: 8,
    fontWeight: "bold",
  },
  weight: {
    fontSize: 25,
    color: "#594639",
  },
  weight2: {
    fontSize: 16,
    color: "#594639",
    marginRight: 12,
  },
  flex: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 6,
  },
  container: {
    marginVertical: 20,
    alignItems: "center",
  },
})
