import { Camera, CameraType } from "expo-camera"
import React, { useState } from "react"
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { MaterialCommunityIcons, AntDesign, FontAwesome5 ,Ionicons} from "@expo/vector-icons"

export default function CameraShot() {
  const [type, setType] = useState(CameraType.back)
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const [camera,setCamera] = useState(null)

  if (!permission) {
    // Camera permissions are still loading
    return <View />
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  function toggleCameraType() {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back))
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              borderWidth: 5,
              borderColor: "#594639",
            }}
          />
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Ionicons size={60} color="#594639" name="camera-reverse" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
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
    alignItems:"flex-end",
    backgroundColor: "transparent",
    justifyContent:"space-between",
    margin: 64,
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
})
