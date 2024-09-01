import {call, put} from 'redux-saga/effects'
import {getUser} from "../APIs"
import { Action } from '../actions/main'
import { loadedUserAction } from '../actions/user';

export function* getUserSaga(action: Action) : Generator {
    const data = yield call(getUser,action.payload);
    yield put(loadedUserAction(data))
}