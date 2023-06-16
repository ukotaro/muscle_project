import * as React from "react"
import { Text, View, StyleSheet, TextInput, Image, Alert, TouchableOpacity } from "react-native"
import BrownButton from "../components/uiParts/button"
import { NavigationProp } from "@react-navigation/native"
import { RootStackParamList } from "../navigation/StackNavigator"
import { StackScreenProps } from "@react-navigation/stack"
import { getUser } from "../utils/user_api"
import { updateUser } from "../utils/user_api"

// import { launchCamera, launchImageLibrary } from "react-native-image-picker"

export default function Setting({
  navigation,
}: StackScreenProps<RootStackParamList, "プロフィール設定">) {
  const [text, onChangeText] = React.useState<string>("名前を入力してください")
  const [userId, setUserId] = React.useState<number>(1)
  const [userGroupId, setUserGroupId] = React.useState<number>(1)
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUser(1)
        console.log(user)
        onChangeText(user.name)
        setUserId(user.id)
        setUserGroupId(user.training_group.id)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  const handleUpdateUser = async () => {
    try {
      const updatedUser = await updateUser(userId, text, "jofafan@example.com", userGroupId) 
      console.log(updatedUser)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.settingContainer}>
      <Image
        source={{
          uri: "https://yt3.googleusercontent.com/ytc/AGIKgqNFPZVpvvBHWw5mRjQY3UQNDBR7_PxSmRwHactimA=s900-c-k-c0x00ffffff-no-rj",
        }}
        style={{
          width: 150,
          height: 150,
          marginTop: 100,
          marginBottom: 30,
          borderRadius: 100,
        }}
      ></Image>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
      <View style={styles.button}>
        <BrownButton
          title="確定"
          onPress={() => {
            handleUpdateUser()
            navigation.navigate("マイ記録")
          }}
        ></BrownButton>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  settingContainer: {
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#F8F4E6",
  },
  input: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    borderColor: "#594639",
    width: "80%",
    fontSize: 15,
  },
  button: {
    width: "40%",
    marginTop: 30,
  },
})
