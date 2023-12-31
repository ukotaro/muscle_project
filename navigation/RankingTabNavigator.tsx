import * as React from "react"
import { Text, View } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import RankingChest from "../screens/RankingChest"
import RankingBack from "../screens/RankingBack"
import RankingLeg from "../screens/RankingLeg"

const RankingTab = createMaterialTopTabNavigator()

export default function RankingTabNavigator() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F8F4E6" }}>
      <Text style={{color:"#594639",margin:10,fontSize:20,textAlign:"center",fontWeight:"bold"}}>グループ：チームごりごり</Text>
      <RankingTab.Navigator
        tabBarOptions={{
          activeTintColor: "#594639",
          inactiveTintColor: "rgba(89, 70, 57, 0.4)",
          indicatorStyle: { backgroundColor: "transparent" },
          labelStyle: { fontSize: 20 },
          style: { backgroundColor: "#F8F4E6" },
        }}
      >
        <RankingTab.Screen name="胸" component={RankingChest} />
        <RankingTab.Screen name="背中" component={RankingBack} />
        <RankingTab.Screen name="脚" component={RankingLeg} />
      </RankingTab.Navigator>
    </View>
  )
}
