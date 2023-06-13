import { StyleSheet, View, Text } from "react-native"
import React from "react"

import { MaterialCommunityIcons } from "@expo/vector-icons"
type props ={
  onPress:()=>void
}
const SettingButton = ({onPress}:props) => {
  return (
    <View style={styles.iconContainer}>
      <MaterialCommunityIcons.Button
        size={44}
        color="#F8F4E6"
        backgroundColor="#594639"
        name="cog"
        iconStyle={{ marginRight: 0 }}
        onPress={onPress}
      />
    </View>
  )
}
export default SettingButton

const styles = StyleSheet.create({
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
})
