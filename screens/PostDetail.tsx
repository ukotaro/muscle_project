import * as React from "react";
import { Text, View, StyleSheet, Alert, Image } from "react-native";
import BrownButton from "../components/uiParts/button";
import { RootStackParamList } from "../navigation/StackNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import PostCheck from "../components/uiGroup/PostCheck";
import NameRecord from "../components/uiParts/NameRecord";

export default function PostDetail({
  route,
  navigation,
}: StackScreenProps<RootStackParamList, "投稿詳細">) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F4E6",
      }}
    >
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImageContainer}
            source={{
              uri: "https://blog-imgs-93.fc2.com/n/w/1/nw11/20150619_uchimurateruyoshi_32.jpg",
            }}
          />
          <View style={styles.nameRecordContainer}>
            <NameRecord name="りゅうたん" record="デッドリフト 400kg 9999回" />
          </View>
        </View>
        <Image
          style={styles.bodyImageContainer}
          source={{
            uri: "https://blog-imgs-93.fc2.com/n/w/1/nw11/20150619_uchimurateruyoshi_32.jpg",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F4E6",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    marginVertical: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  profileImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  bodyImageContainer: {
    width: "90%",
    height: 350,
    marginTop: 15,
    marginRight: "5%",
    alignSelf: "flex-end",
    borderRadius: 20,
  },
  nameRecordContainer: {
    marginLeft: 20,
  },
});
