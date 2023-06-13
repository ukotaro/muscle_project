import React from "react";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default function NumberInput() {
  const [number, onChangeNumber] = React.useState("");
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
          onChangeText={onChangeNumber}
          value={number}
          placeholder=""
          keyboardType="numeric"
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 80,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
