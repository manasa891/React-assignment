import { combineReducers } from "redux";

import { USER_DATA, DElETE_USER, USER_DETAIL, UPDATE_USER_DATA } from './Actions';

const userData = (state = [], action) => {
    switch (action.type) {
        case USER_DATA:
          return action.users
        case DElETE_USER:
          return action.users
        default:
          return state
    } 
}

const userDetails = (state = {}, action) => {
    switch(action.type) {
        case USER_DETAIL:
            return action.data
        case UPDATE_USER_DATA:
            return {
              ...state,
              ...action.data
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    userData,
    userDetails
  })

export default rootReducer;