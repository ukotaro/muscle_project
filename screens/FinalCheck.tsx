import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import BrownButton from "../components/uiParts/button";
import { RootStackParamList } from "../navigation/StackNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import PostEdit from "../components/uiGroup/PostEdit";
import Board from "../components/uiParts/Board";
import NameRecord from "../components/uiParts/NameRecord";
import Post from "../components/uiGroup/Post";
import PostCheck from "../components/uiGroup/PostCheck";
import BorderButton from "../components/uiParts/BorderButton";
import { useState, useEffect } from "react";
import { createTraining } from "../utils/training_api";
import { createPost } from "../utils/post_api";
import { Training } from "../type";
import { getUser } from "../utils/user_api";

export default function FinalCheck({
  route,
  navigation,
}: StackScreenProps<RootStackParamList, "最終確認">) {
  const [userId, setUserId] = React.useState<number>(1);
  const [userImageUrl, setUserImageUrl] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUser(1);
        console.log(user);
        setUserImageUrl(user.image_url);
        setUserName(user.name);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const { eventId, weight, time, timeSet } = route.params;
  const training = {
    user_id: 1,
    menu_id: eventId,
    weight: weight,
    times: time,
    sets: timeSet,
  };
  const handleButtonPress = async () => {
    try {
      const post = await createPost(userId, comment, eventId, training);
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  };
  const [comment, setComment] = useState<string>("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F4E6",
      }}
    >
      <View style={styles.flex}>
        <View style={styles.box}>
          <BorderButton
            title="戻る"
            onPress={() => {
              navigation.goBack();
            }}
          ></BorderButton>
        </View>
        <View style={styles.box}>
          <BrownButton
            title="投稿する"
            onPress={() => {
              handleButtonPress();
              navigation.navigate("タイムライン");
            }}
          ></BrownButton>
        </View>
      </View>
      <PostCheck
        name={userName}
        profileImageUrl="https://blog-imgs-93.fc2.com/n/w/1/nw11/20150619_uchimurateruyoshi_32.jpg"
        record="ベンチプレス 500kg 30000回"
        bodyImageUrl="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20230408-00010000-vitup-000-1-view.jpg?pri=l&w=521&h=640&exp=10800"
        comment={comment}
        setComment={setComment}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 0,
    width: 300,
  },
  box: {
    width: 120,
  },
});
