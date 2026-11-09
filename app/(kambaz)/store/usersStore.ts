"use client";

import { create } from "zustand";
import usersJson from "../database/users.json";

export type StoredUser = (typeof usersJson)[number];

type UsersStore = {
  users: StoredUser[];
  addUser: (user: StoredUser) => void;
};

export const useUsersStore = create<UsersStore>((set) => ({
  users: usersJson,
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
}));
