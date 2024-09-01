import { Action } from "../actions/main";
import { produce } from "immer";
import { DELETE_TOKEN, LOAD_USER, LOADED_USER } from "../actions/user";
import { User } from "../Models/user";
import { Project } from "../Models/project";
import { Research } from "../Models/research";
import { Seminar } from "../Models/seminars";
import { Certificate } from "../Models/certificates";

export type UserState = {
    loading: boolean,
    user: User,
    projects: Project[],
    researchs: Research[],
    seminars: Seminar[],
    certificates: Certificate[],
};

export const initialState: UserState = {
    loading: true,
    user: {
      id: "",
      is_admin: false,
      full_name: "",
      organization_email_id: "",
      personal_email_id: "",
      department_name: "",
      phone_number: 0,
      role: "",
      averageRating: 0
    },
    projects: [],
    researchs: [],
    seminars: [],
    certificates: [],
};

function userReducer(state = initialState, action: Action): UserState {
  switch (action.type) {
    case LOAD_USER:
      return produce(state, (draft) =>{
        draft.loading = true;
    })
    case LOADED_USER:
      return produce(state, (draft) =>{
        draft.loading = false;
        draft.user = {...action.payload.user.user};
        draft.projects = action.payload.projects.projects;
        draft.researchs = action.payload.research.researchPapers;
        draft.seminars = action.payload.seminars.seminars;
        draft.certificates = action.payload.certificates.certificates;
        console.log("Research:",action.payload.seminars.seminars)
    })
    case DELETE_TOKEN:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.user = {
          id: "",
          is_admin: false,
          full_name: "",
          organization_email_id: "",
          personal_email_id: "",
          department_name: "",
          phone_number: 0,
          role: "",
          averageRating: 0,
        };
        draft.certificates = [];
        draft.projects = [];
        draft.researchs = [];
        draft.seminars = [];
      })
    default:
      return state;
  }
}

export default userReducer;