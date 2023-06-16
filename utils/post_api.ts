import axios from "axios";
import { Training, Post } from "../type";
import { exp } from "react-native-reanimated";
const api = axios.create({
    baseURL: "http://localhost:8020",
})
// タイムライン投稿の作成
// トレーニングを同時に作成するには、トレーニングの情報を引数に追加する
// 既存のトレーニングを使う場合は、training_idを引数に追加する
export const createPost = async (user_id: number, comment: string, training_id?: number, training?: Training, imageFile?: Blob) => {
    const formData = new FormData();
    let post_info = {
        user_id: user_id,
        training_id: training_id,
        training: training,
        comment: comment
    }
    formData.append('post_info', JSON.stringify(post_info));
    formData.append('post_image', imageFile);

    try {
        const res = await api.post<{ message: string, data: Post }>(`/post`, formData);
        return res.data.data;
    } catch (err) {
        console.log(err);
        return "api error"
    }
}

// ユーザーのタイムライン投稿を全て取得
export const getUserPosts = async (user_id: number) => {
    try {
        const res = await api.get<{ message: string, data: Post[] }>(`/user/posts/${user_id}`);
        return res.data.data;
    } catch (err) {
        console.log(err);
        return "api error"
    }
}

// TODO:トレーニングメニュー一覧の取得