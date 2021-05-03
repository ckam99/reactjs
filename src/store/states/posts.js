import { atom } from "recoil";

export const postState = atom({
    key: "posts-list-state",
    default: [],
});

export const currentPostState = atom({
    key: "current-post-state",
    default: {},
});
