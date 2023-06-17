// ユーザーのCRUDを行うAPI
// TODO: ユーザーのidの管理方法を考える
import axios from 'axios';
import { User } from '../type';


const api = axios.create({
    baseURL: "http://18.233.93.14:8080"
})
// ユーザーの作成
// 名前、メールアドレス、パスワードは必須、トレーニンググループと画像ファイルは任意
// トレーニンググループを指定しないと、自動的にグループ1に配属される
export const createUser = async (name: string, email: string, password: string, training_group_id?: number, imageFile?: Blob) => {
    const formData = new FormData();
    let user_info: User = {
        name: name,
        email: email,
        password: password,
        training_group_id: training_group_id
    }
    formData.append('user_info', JSON.stringify(user_info));
    formData.append('user_image', imageFile);
    
    try {
        const res = await api.post<{ message: string, data: User }>('/user', formData);
        return res.data.data;
    } catch (err) {
        console.log(err);
        return "api error"
    }
}

// ユーザーの取得
// urlは使える状態で返ってきているはず
// 現状ここからトレーニングや投稿にはアクセスできない
export const getUser = async (user_id: number) => {
    try {
        const res = await api.get<{ message: string, data: User }>(`/user/${user_id}`);
        return res.data.data;
    } catch (err) {
        console.log(err);
        return "api error"
    }
}

//ユーザーの複数取得
//画像は取得できない
export const getUsers = async (user_ids: number[]) => {
    try {
        const res = await api.get<{ message: string, data: User[] }>(`/users?id=${user_ids.join('&id=')}`);
        return res.data.data;
    } catch (err) {
        console.log(err);
        return "api error"
    }
}

//ユーザーの更新
export const updateUser = async (user_id: number, name?: string, email?: string, training_group_id?: number, imageFile?: Blob) => {
    const formData = new FormData();
    let user_info: User = { name: name, email: email, training_group_id: training_group_id }
    formData.append('user_info', JSON.stringify(user_info));

    if (imageFile) {
        formData.append('user_image', imageFile);
    } else {
        formData.append('user_image', undefined);
    }

    try {
        const res = await api.put<{ message: string, data: User }>(`/user/${user_id}`, formData);
        return res.data.data;
    } catch (err) {
        console.log(err);
        return "api error"
    }
}


