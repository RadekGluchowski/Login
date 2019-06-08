import * as loginAppActions from '../Actions/loginAppActions'

const initialState = {
    users: [],
}

export function loginAppReducer(state = initialState, action) {
    switch (action.type) {
        case loginAppActions.SAVE_USER_TO_STORE: {
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        }
        case loginAppActions.DELETE_USER_FROM_STORE: {

            return {
                ...state,
                users: state.users.filter(item => item.ID !== action.payload)
            }
        }
        case loginAppActions.DELETE_ALL_USERS: {
            return {
                ...state,
                users: state.users.filter(item => item.ID === action.payload)
            }
        }
        default: {
            return state;
        }
    }
}