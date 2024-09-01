import { produce } from "immer";
import { LOADING_ALL_USER } from "../actions/admin";
import { Action } from "../actions/main";
import { User } from "../Models/user";

export type AdminState = {
    adminLoading: boolean,
    junior: User[],
    senior: User[],
    Phd: User[],
};

export const initialState: AdminState = {
    adminLoading: true,
    junior: [],
    senior: [],
    Phd: [],
};

function adminReducer(state = initialState, action: Action): AdminState {
  switch (action.type) {
    case LOADING_ALL_USER:
      return produce(state, (draft) => {
        draft.adminLoading = false;
        const juniorFaculty:User[] = []
        action.payload.users.filter((user:User) =>{ if(user.role && user.role.toLowerCase() === "junior faculty"){
            juniorFaculty.push(user)
        }})
        const seniorFaculty:User[] = [] 
        action.payload.users.filter((user:User) =>{  if(user.role && user.role.toLowerCase() === "senior faculty"){
            seniorFaculty.push(user)
        }})
        const phdFaculty:User[] = [] 
        action.payload.users.filter((user:User) =>{ if(user.role && user.role.toLowerCase() === "phd faculty"){
            phdFaculty.push(user);
        }})
        draft.junior = juniorFaculty;
        draft.senior = seniorFaculty;
        draft.Phd = phdFaculty;
      })
    default:
      return state;
  }
}

export default adminReducer;