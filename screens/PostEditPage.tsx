import * as React from "react";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import BrownButton from "../components/uiParts/button";
import { RootStackParamList } from "../navigation/StackNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import PostEdit from "../components/uiGroup/PostEdit";

export default function PostEditPage({
  route,
  navigation,
}: StackScreenProps<RootStackParamList, "投稿編集">) {
  const { eventId } = route.params;
  const [weight, setWeight] = useState<number>();
  const [time, setTime] = useState<number>();
  const [timeSet, setTimeSet] = useState<number>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F4E6",
      }}
    >
      <PostEdit
        eventId={eventId}
        weight={weight}
        setWeight={setWeight}
        time={time}
        setTime={setTime}
        timeSet={timeSet}
        setTimeSet={setTimeSet}
      />
      <View style={styles.flex}>
        <View style={styles.box}>
          <BrownButton
            title="戻る"
            onPress={() => {
              navigation.goBack();
            }}
          ></BrownButton>
        </View>
        <View style={styles.box}>
          <BrownButton
            title="撮影する"
            onPress={() => {
              navigation.navigate("最終確認", {
                eventId: eventId,
                weight: weight,
                time: time,
                timeSet: timeSet,
              });
            }}
          ></BrownButton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    width: 280,
  },
  box: {
    width: 120,
  },
});
