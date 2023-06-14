// グループに関するAPIをまとめたファイル
import axios from "axios";
import { TrainingGroup, UserTotalWeight, Post } from "../type";


//グループ一覧の取得
export const getGroups = async () => {
    try {
        const res = await axios.get<{ message: string, data: TrainingGroup[] }>(`/groups`);
        return res.data.data;
    } catch (err) {
        console.log(err);
        return "api error"
    }
}

// グループ内のランキングを取得
// id: グループのid
// menu_id: トレーニングメニューのid
// UserTotalWeightの配列はtotal_weightの降順でソートされている
export const getRanking = async (id: number, menu_id: number) => {
    try {
        const res = await axios.get<{ message: string, data: UserTotalWeight[] }>(`/groups/ranking/${id}?menu_id=${menu_id}`);
        return res.data.data;
    } catch (err) {
        console.log(err);
        return "api error"
    }
}

// グループのタイムライン投稿を全て取得
// id: グループのid
// タイムライン投稿は投稿日時の降順でソートされている
export const getGroupPosts = async (id: number) => {
    try {
        const res = await axios.get<{ message: string, data: Post[] }>(`/groups/posts/${id}`);
        return res.data.data;
    } catch (err) {
        console.log(err);
        return "api error"
    }
}

// TODO:グループの作成は未実装

