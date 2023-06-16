// 型定義ファイル

export type User = {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  training_group_id?: number;
  training_group?: TrainingGroup;
  image_url?: string;
  posts?: Post[];
  trainings?: Training[];
};

export type TrainingGroup = {
  id: number;
  name: string;
  image_url: string;
  users: User[];
};

// タイムライン投稿
export type Post = {
  id: number;
  user_id: number;
  training_id?: number;
  training: Training;
  created_at: string;
  image_url: string;
  comment: string;
};

export type Training = {
  user_id: number;
  menu_id: number;
  weight?: number; //重さ(kg)
  times?: number; //回数
  sets?: number; //セット数
  created_at?: string;
};

export type UserTotalWeight = {
  user: User;
  total_weight: number;
};

export type Menu = {
  id: number;
  name: string;
};
