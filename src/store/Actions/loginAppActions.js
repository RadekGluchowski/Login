export const SAVE_USER_TO_STORE = "SAVE_USER_TO_STORE";
export const DELETE_USER_FROM_STORE = "DELETE_USER_FROM_STORE"
export const DELETE_ALL_USERS = "DELETE_ALL_USERS"

export const saveUserToStore = (payload) =>({type: SAVE_USER_TO_STORE, payload});
export const deleteUser = (payload) =>({type: DELETE_USER_FROM_STORE, payload})
export const deleteAllUsers = (payload) => ({type: DELETE_ALL_USERS, payload})