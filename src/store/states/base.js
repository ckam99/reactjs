import { atom } from "recoil";
import storage from '../local'

export const IsAuthState = atom({
    key: "auth-user-state",
    default: storage.exists('token'),
});
