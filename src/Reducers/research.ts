import { produce } from "immer";
import { LOADED_RESEARCH } from "../actions/documents";
import { Action } from "../actions/main";
import { Research } from "../Models/research";

export type ResearchState = {
    loading: boolean,
    research: Research[]
};

export const initialState: ResearchState = {
    loading: true,
    research: []
};

function researchReducer(state = initialState, action: Action): ResearchState {
  switch (action.type) {
    case LOADED_RESEARCH:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.research = action.payload.researchPapers;
      })
    default:
      return state;
  }
}

export default researchReducer;