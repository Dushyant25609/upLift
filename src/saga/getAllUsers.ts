import {call, put} from 'redux-saga/effects'
import { Action } from '../actions/main'
import { getAllUsers } from '../APIs';
import { loadingAllUserAction } from '../actions/admin';

export function* getAllUserSaga(action: Action) : Generator {
    const data = yield call(getAllUsers,action.payload);
    yield put(loadingAllUserAction(data))
}