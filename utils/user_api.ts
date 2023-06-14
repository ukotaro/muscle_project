// ユーザーのCRUDを行うAPI
// TODO: ユーザーのidの管理方法を考える
import axios from 'axios';
import { User } from '../type';


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
    formData.append('image', imageFile);
    
    try {
        const res = await axios.post<{ message: string, data: User }>('/user', formData);
        return res.data.data;
    } catch (err) {
        console.log(err);
        return "api error"
    }
}

//ユーザーの取得
export const getUser = async (id: number) => {
    try {
        const res = await axios.get<{ message: string, data: User }>(`/user/${id}`);
        return res.data.data;
    } catch (err) {
        console.log(err);
        return "api error"
    }
}

//ユーザーの複数取得
export const getUsers = async (ids: number[]) => {
    try {
        const res = await axios.get<{ message: string, data: User[] }>(`/users/?id=${ids.join('?id=')}`);
        return res.data.data;
    } catch (err) {
        console.log(err);
        return "api error"
    }
}

//ユーザーの更新
export const updateUser = async (id: number, name?: string, email?: string, training_group_id?: number, imageFile?: Blob) => {
    const formData = new FormData();
    let user_info: User = { name: name ? name : undefined, email: email ? email : undefined, training_group_id: training_group_id ? training_group_id : undefined }
    formData.append('user_info', JSON.stringify(user_info));

    if (imageFile) {
        formData.append('image', imageFile);
    } else {
        formData.append('image', undefined);
    }

    try {
        const res = await axios.put<{ message: string, data: User }>(`/user/${id}`, formData);
        return res.data.data;
    } catch (err) {
        console.log(err);
        return "api error"
    }
}
