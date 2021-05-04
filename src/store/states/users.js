import { atom } from "recoil";

export const listUserState = atom({
    key: "users-list-state",
    default: [],
});

export const currentUserState = atom({
    key: "current-user-state",
    default: {},
});