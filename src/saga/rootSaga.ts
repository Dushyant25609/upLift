import { takeLeading } from "redux-saga/effects";
import { SEND_TOKEN } from "../actions/user";
import { getUserSaga } from "./getUserSaga";
import { LOAD_ALL_USER } from "../actions/admin";
import { getAllUserSaga } from "./getAllUsers";
// Create the saga middleware


function* rootSaga() {
    yield takeLeading(SEND_TOKEN, getUserSaga);
    yield takeLeading(LOAD_ALL_USER,getAllUserSaga);
}

export default rootSaga;
