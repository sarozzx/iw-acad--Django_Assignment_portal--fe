import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  assignments: [],
  error: null,
  loading: false
};

const getGASNTListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getGASNTListSuccess = (state, action) => {
  return updateObject(state, {
    assignments: action.assignments,
    error: null,
    loading: false
  });
};

const getGASNTListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_G_ASSIGNMENT_LIST_START:
      return getGASNTListStart(state, action);
    case actionTypes.GET_G_ASSIGNMENTS_LIST_SUCCESS:
      return getGASNTListSuccess(state, action);
    case actionTypes.GET_G_ASSIGNMENTS_LIST_FAIL:
      return getGASNTListFail(state, action);


    default:
      return state;
  }
};

export default reducer;
