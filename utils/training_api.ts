import axios from "axios";
import { Training } from "../type";
const api = axios.create({
  baseURL: "http://18.233.93.14:8080",
});
// トレーニングの取得
export const getTraining = async (id: number) => {
  try {
    const res = await api.get<{ message: string; data: Training }>(
      `/training/${id}`
    );
    return res.data.data;
  } catch (err) {
    console.log(err);
    return "api error";
  }
};

// トレーニング作成
export const createTraining = async (
  user_id: number,
  menu_id: number,
  weight: number,
  times: number,
  sets: number
) => {
  try {
    const res = await api.post<{ message: string; data: Training }>(
      `/training`,
      {
        user_id: user_id,
        menu_id: menu_id,
        weight: weight,
        times: times,
        sets: sets,
      }
    );
    return res.data.data;
  } catch (err) {
    console.log(err);
    return "api error";
  }
};

// ユーザーのトレーニングを全て取得
export const getUserTrainings = async (user_id: number) => {
  try {
    const res = await api.get<{ message: string; data: Training[] }>(
      `/user/trainings/${user_id}`
    );
    return res.data.data;
  } catch (err) {
    console.log(err);
    return "api error";
  }
};

// ユーザーの一ヶ月の総重量を取得
export const getTotalWeight = async (userId: number, menu_id: number) => {
  try {
    const res = await api.get<{ message: string; data: number }>(
      `/user/total_weight/${userId}?menu_id=${menu_id}`
    );
    return res.data.data;
  } catch (err) {
    console.log(err);
    return "api error";
  }
};
