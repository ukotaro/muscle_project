import axios from "axios";
import { Training, Post } from "../type";
//import { Platform } from "react-native";
import mime from 'react-native-mime-types';
import RNFetchBlob from 'rn-fetch-blob';


const api = axios.create({
    baseURL: "http://18.233.93.14:8080",
})

// タイムライン投稿の作成
// トレーニングを同時に作成するには、トレーニングの情報を引数に追加する
// 既存のトレーニングを使う場合は、training_idを引数に追加する
export const createPost = async (user_id: number, comment: string, training_id?: number, training?: Training, imageUri?: string) => {
    const formData = new FormData();

    let post_info = {
        user_id: user_id,
        training_id: training_id,
        training: training,
        comment: comment
    }
    formData.append('post_info', JSON.stringify(post_info));
    if (imageUri) {
        RNFetchBlob.fetch('POST', 'http://18.233.93.14:8080/post', {
            'Content-Type': 'multipart/form-data',
        }, [
            { name: 'post_info', data: JSON.stringify(post_info) },
            { name: 'post_image', filename: imageUri, type: mime.lookup(imageUri), data: RNFetchBlob.wrap(imageUri) }
        ]).then((res) => {
            console.log(res);
            return res.data.data;
        }).catch((err) => {
            console.log(err);
            return "api error"
        })
    } else {
        formData.append('post_image', '');
        try {
            const res = await api<{ message: string, data: Post }>({
                url: '/post',
                data: formData,
                method: 'post',
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return res.data.data;
        } catch (err) {
            console.log(err);
            return "api error"
        }
    }
}

// ユーザーのタイムライン投稿を全て取得
export const getUserPosts = async (user_id: number) => {
    try {
        const res = await api.get<{ message: string, data: Post[] }>(`/user/post/${user_id}`);
        return res.data.data;
    } catch (err) {
        console.log(err);
        return "api error"
    }
}

createPost(1, "test", 1, undefined, '/Users/itouryuunosuke/Project/muscle_project/o0320048214003980269-1-1.jpeg').then((res) => {
    console.log(res);
})

// getUserPosts(1).then((res) => {
//     console.log(res);
// })
// TODO:トレーニングメニュー一覧の取得