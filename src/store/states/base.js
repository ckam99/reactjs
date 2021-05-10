import { atom } from "recoil"; import storage from '../local'

export const isAuthState = atom({
    key: "is-auth-state",
    default: storage.guard,
});

export const authUserState = atom({
    key: "auth-user-state",
    default: storage.get('user'),
});

export const hideSidebarState = atom({
    key: "sidebar-state",
    default: false,
});
