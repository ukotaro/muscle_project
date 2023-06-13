import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  onPress: () => void,
};
type addProps = Props | StackScreenProps<RootStackParamList>


const AddButton = ({ onPress }: Props) => {
  return (
    <View style={styles.iconContainer}>
      <MaterialCommunityIcons.Button
        size={44}
        backgroundColor="#594639"
        name="plus"
        iconStyle={{ marginRight: 0 }}
        onPress={onPress}
      />
    </View>
  );
};
export default AddButton;

const styles = StyleSheet.create({
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    marginRight:20,
    marginBottom:10
  },
});
