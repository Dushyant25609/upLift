import { State } from "../store";

export const userDetailsSelector = (state: State) =>{
    return state.user.user;
}

export const projectDetailsSelector = (state: State) =>{
    return state.user.projects;
}

export const researchDetailsSelector = (state: State) =>{
    return state.user.researchs;
}

export const seminarsDetailsSelector = (state: State) =>{
    return state.user.seminars;
}

export const certificatesDetailsSelector = (state: State) =>{
    return state.user.certificates;
}

export const userLoadingSelector = (state: State) =>{
    return state.user.loading;
}