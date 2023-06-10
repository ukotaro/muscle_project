import { StyleSheet, Text, View, Image } from "react-native"
import React from "react"

const NewsKizi = ({ imageuri, title, subtext }) => {
  return (
    <View style={styles.box}>
      <View style={styles.moziBox}>
        <Text style={styles.Text}>{title}</Text>
        <Text style={styles.subText}>{subtext}</Text>
      </View>
      <View style={styles.gazoBox}></View>
      <Image style={{ width: 100, height: 100 }} source={{ uri: imageuri }} />
    </View>
  )
}
export default NewsKizi

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    boederColor: "lightblue",
    borderWidth: 1,
    flexDirection: "row",
  },
  moziBox: {
    flex: 1,
    backgroundColor: "steelblue",
    padding: 16,
    justifyContent: "space-between",
  },
  gazoBox: {
    width: 100,
    backgroundColor: "powderblue",
  },
  Text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "red",
  },
})
