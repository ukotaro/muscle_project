import { Camera, CameraType } from "expo-camera";
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { RootStackParamList } from "../navigation/StackNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import * as Notifications from "expo-notifications";
import PostCheck from "../components/uiGroup/PostCheck";
import BorderButton from "../components/uiParts/BorderButton";
import { getUser } from "../utils/user_api";
import BrownButton from "../components/uiParts/button";
import { createPost } from "../utils/post_api";

type Subscription = {
  remove: () => void;
};

const requestPermissionsAsync = async () => {
  const { granted } = await Notifications.getPermissionsAsync();
  if (granted) {
    return;
  }
  await Notifications.requestPermissionsAsync();
};

const scheduleNotificationAsync = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      body: "今日のトレーニングは大丈夫ですか？梅田さんはやっていますよ！",
      title: "チーム:なかマッスル",
    },
    trigger: {
      seconds: 5,
    },
  });
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function CameraShot({
  route,
  navigation,
}: StackScreenProps<RootStackParamList, "カメラ">) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const { eventId, weight, time, timeSet } = route.params;
  const [image, setImage] = useState<string | null>(null);
  const [userId, setUserId] = React.useState<number>(1);
  const [userImageUrl, setUserImageUrl] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  useEffect(() => {
    requestPermissionsAsync();
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

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  const takePicture = async () => {
    if (camera) {
      const image = await camera.takePictureAsync({});
      setImage(image.uri);
      console.log(image);
    }
  };

  return (
    <View style={styles.container}>
      {image == null ? (
        <Camera
          style={styles.camera}
          type={type}
          ref={(ref) => {
            setCamera(ref);
          }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                borderWidth: 5,
                borderColor: "#594639",
              }}
              onPress={() => {
                takePicture();
                // setTimeout(() => {
                //   navigation.navigate("最終確認", {
                //     eventId: eventId,
                //     weight: weight,
                //     time: time,
                //     timeSet: timeSet,
                //     image: image,
                //   });
                // }, 2500);
              }}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                toggleCameraType();
              }}
            >
              <Ionicons size={60} color="#594639" name="camera-reverse" />
            </TouchableOpacity>
          </View>
        </Camera>
      ) : (
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
                  setImage(null);
                }}
              ></BorderButton>
            </View>
            <View style={styles.box}>
              <BrownButton
                title="投稿する"
                onPress={() => {
                  handleButtonPress();
                  navigation.navigate("タイムライン");
                  scheduleNotificationAsync();
                }}
              ></BrownButton>
            </View>
          </View>
          <PostCheck
            name={userName}
            profileImageUrl="https://blog-imgs-93.fc2.com/n/w/1/nw11/20150619_uchimurateruyoshi_32.jpg"
            record="ベンチプレス 500kg 30000回"
            bodyImageUrl={image}
            comment={comment}
            setComment={setComment}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "transparent",
    justifyContent: "space-evenly",

    margin: 64,
    marginLeft: 100,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
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
