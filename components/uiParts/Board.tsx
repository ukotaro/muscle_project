import React, { ReactNode } from "react"
import { View, StyleSheet } from "react-native"

type Props = {
  children: ReactNode
}

const Board = ({ children }: Props) => {
  return (
    <View style={styles.outer}>
      <View style={[styles.shadowBox]}>{children}</View>
    </View>
  )
}

export default Board

const styles = StyleSheet.create({
  outer: {
    width: "95%",
    marginTop:20,
    marginHorizontal:10
  },
  shadowBox: {
    backgroundColor: "#F8F4E6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal:20
  },
})
