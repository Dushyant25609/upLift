import { produce } from "immer";
import { LOADED_PROJECT } from "../actions/documents";
import { Action } from "../actions/main";
import { Project } from "../Models/project";

export type ProjectsState = {
    loading: boolean,
    projects: Project[]
};

export const initialState: ProjectsState = {
    loading: true,
    projects: [],
};

function projectsReducer(state = initialState, action: Action): ProjectsState {
  switch (action.type) {
    case LOADED_PROJECT:
        return produce(state, (draft) => {
            draft.loading = false;
            console.log("Project reducer",action.payload.projects)
            draft.projects = [...action.payload.projects];
        } )
    default:
      return state;
  }
}

export default projectsReducer;