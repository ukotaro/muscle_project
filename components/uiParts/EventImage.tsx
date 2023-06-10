import { StyleSheet, View, Text, Image } from "react-native";
import React, { useState } from "react";

type Props = {
  eventId: number;
};

const EventImage = ({ eventId }: Props) => {
  const [event, setEvent] = useState<string>("");

  return (
    <View style={styles.container}>
      {eventId === 0 ? (
        <>
          <Image
            style={styles.imageContainer}
            source={require("../../assets/dumbbell.png")}
          />
          <Text style={styles.textContainer}>ベンチプレス</Text>
        </>
      ) : eventId === 1 ? (
        <>
          <Image
            style={styles.imageContainer}
            source={require("../../assets/dumbbell.png")}
          />
          <Text style={styles.textContainer}>スクワット</Text>
        </>
      ) : (
        <>
          <Image
            style={styles.imageContainer}
            source={require("../../assets/dumbbell.png")}
          />
          <Text style={styles.textContainer}>デッドリフト</Text>
        </>
      )}
    </View>
  );
};

export default EventImage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F4E6",
    alignItems: "flex-start",
    justifyContent: "center",
    fontColor: "#594639",
    flexDirection: "row",
  },
  imageContainer: {
    width: 50,
    height: 50,
  },
  textContainer: {
    fontSize: 26,
    color: "#594639",
    marginLeft: 10,
    marginTop: 10,
  },
});
