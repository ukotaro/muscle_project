import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import BrownButton from "../components/uiParts/button";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/StackNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { getUser } from "../utils/user_api";
import { updateUser } from "../utils/user_api";
import { ComponentProps } from "react";

// import { launchCamera, launchImageLibrary } from "react-native-image-picker"

import { FlatList, SafeAreaView, StatusBar } from "react-native";

function generateRandomData(length = 168) {
  const data = [];
  for (let i = 0; i < length; i++) {
    data.push(Math.floor(Math.random() * 4)); // 0から3までのランダムな整数
  }
  return data;
}

const DATA = generateRandomData();

type FlatListProps = ComponentProps<typeof FlatList<number>>;

// 1行あたりのitem数を指定
const COLUMNS = 7;

export default function Setting({
  navigation,
}: StackScreenProps<RootStackParamList, "プロフィール設定">) {
  const handleItemClick = () => {
    navigation.navigate("投稿詳細");
  };

  const renderItem: FlatListProps["renderItem"] = (props) => {
    const { item, index } = props;
    const isLastItem = index === DATA.length - 1;

    return isLastItem ? (
      <>
        <Item item={item} />
        {
          // columnsの指定数に対し、item何個分データが足りないかを計算し、その分spacerとして表示
          Array.from({ length: COLUMNS - (index % COLUMNS) - 1 }).map(() => (
            <View style={[styles.item, { backgroundColor: "lightgrey" }]} />
          ))
        }
      </>
    ) : (
      <Item item={item} />
    );
  };

  const characters = "日月火水木金土".split("");
  const getLastSixMonth = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;

    const months = [];
    for (let i = 0; i < 6; i++) {
      const month = ((currentMonth - i - 1 + 12) % 12) + 1;
      months.push(month);
    }

    return months;
  };
  const months = getLastSixMonth();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>トレーニング履歴</Text>
      <View style={styles.container2}>
        {characters.map((char, index) => (
          <Text key={index} style={styles.character}>
            {char}
          </Text>
        ))}
      </View>
      <TouchableOpacity onPress={handleItemClick}>
        <View>
          <FlatList<number>
            data={DATA}
            numColumns={COLUMNS}
            renderItem={renderItem}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const Item = ({ item }) => {
  let backgroundColor;

  switch (item) {
    case 0:
      backgroundColor = "rgba(89, 70, 57, 1)"; // 100% 不透明
      break;
    case 1:
      backgroundColor = "rgba(89, 70, 57, 0.8)"; // 80% 不透明
      break;
    case 2:
      backgroundColor = "rgba(89, 70, 57, 0.6)"; // 60% 不透明
      break;
    case 3:
      backgroundColor = "rgba(89, 70, 57, 0.4)"; // 40% 不透明
      break;
    default:
      backgroundColor = "rgba(89, 70, 57, 1)"; // デフォルトの色
  }

  return <View style={[styles.item, { backgroundColor }]}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 5, // 余白を調整する場合
  },
  character: {
    flex: 1,
    textAlign: "center",
  },
  item: {
    flex: 1,
    aspectRatio: 1,
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    color: "#594639",
  },
  week: {
    fontSize: 20,
    color: "#594639",
  },
});
