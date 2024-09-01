import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./Reducers/user";
import rootSaga from "./saga/rootSaga";
import createSagaMiddleware from "redux-saga";
import adminReducer from "./Reducers/admin";


const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    user: userReducer,
    admin: adminReducer,
})

export type State = ReturnType<typeof reducer>;

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);