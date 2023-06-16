import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import React from "react";
import NameRecord from "../uiParts/NameRecord";
import { useState } from "react";

type Props = {
  profileImageUrl: string;
  name: string;
  record: string;
  bodyImageUrl: string;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
};

export default function PostCheck({
  profileImageUrl,
  name,
  record,
  bodyImageUrl,
  comment,
  setComment,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImageContainer}
          source={{
            uri: profileImageUrl,
          }}
        />
        <View style={styles.nameRecordContainer}>
          <NameRecord name={name} record={record} />
        </View>
      </View>
      <TextInput
        style={{
          height: 200,
          width: "90%",
          marginRight: "5%",
          marginLeft: "5%",
        }}
        multiline={true}
        placeholder="ここにコメントを入力してください"
        onChangeText={(text) => setComment(text)}
        value={comment}
      />
      <Image
        style={styles.bodyImageContainer}
        source={{
          uri: bodyImageUrl,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F4E6",
    alignItems: "flex-start",
    justifyContent: "space-between",
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
    height: 250,
    marginTop: 15,
    marginRight: "5%",
    alignSelf: "flex-end",
    borderRadius: 20,
  },
  nameRecordContainer: {
    marginLeft: 20,
  },
});
