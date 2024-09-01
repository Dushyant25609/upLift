import { User } from "../Models/user";
import { ActionCreator } from "./main";

export const LOAD_ALL_USER = "Load_All_User";

export const loadAllUserAction: ActionCreator<string> = (token:string) => ({
  type: LOAD_ALL_USER,
  payload: token,
});


export const LOADING_ALL_USER = "Loading_All_User";

export const loadingAllUserAction: ActionCreator<User[]> = (users:User[]) => ({
  type: LOADING_ALL_USER,
  payload: users,
});