import { State } from "../store";

export const getAllJuniorSelector = (state: State) => {
    return state.admin.junior;
}

export const getAllSeniorSelector = (state: State) => {
    return state.admin.senior;
}

export const getAllPhdSelector = (state: State) => {
    return state.admin.Phd;
}

export const adminLoading = (state: State) => {
    return state.admin.adminLoading;
}