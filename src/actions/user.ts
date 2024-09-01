import { User } from "../Models/user";
import { ActionCreator } from "./main";

export const LOAD_USER = "Load_User";

export const loadUserAction: ActionCreator = () => ({
  type: LOAD_USER,
});

export const SEND_TOKEN = "Send_Token";

export const sendTokenAction: ActionCreator<string> = (token:string) => ({
  type: SEND_TOKEN,
  payload: token,
});

export const LOADED_USER = "Loaded_Order";

export const loadedUserAction: ActionCreator<User> = (user: User) => ({
  type: LOADED_USER,
  payload: user,
});

export const DELETE_TOKEN = "Delete_Token";

export const deleteTokenAction: ActionCreator = () => ({
  type: DELETE_TOKEN,
});