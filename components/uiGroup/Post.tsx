import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import NameRecord from "../uiParts/NameRecord";

type Props = {
  profileImageUrl: string;
  name: string;
  record: string;
  bodyImageUrl: string;
};

export default function Post({
  profileImageUrl,
  name,
  record,
  bodyImageUrl,
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
    justifyContent: "center",
    fontColor: "#594639",
    width: "100%",
    marginVertical:20
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
    borderRadius:20
  },
  nameRecordContainer: {
    marginLeft: 20,
  },
});
