import React from "react";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

type Props = {
  number: number | undefined;
  onChangeNumber: React.Dispatch<React.SetStateAction<number | undefined>>;
};
export default function NumberInput({ number, onChangeNumber }: Props) {
  //使いたい部分をTouchableで囲う必要あり
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeNumber(Number(text))}
          value={number ? number.toString() : ""}
          placeholder=""
          keyboardType="numeric"
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 140,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
