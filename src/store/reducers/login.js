import { LOGIN_EMPTY, LOGIN_FULFILLED, LOGIN_PENDING, LOGIN_REJECTED } from "../action_type"
import initialState from "../initialState"

export default (state = initialState.userLogin, action) => {
    switch (action.type) {
        case LOGIN_FULFILLED:
            console.log("LOGIN_FULFILLED")
            return {
                in_progess: false,
                data: action.payload,
                error: null
            }
        case LOGIN_PENDING:
            console.log("LOGIN_PENDING")
            return {
                in_progess: true,
                data: {},
                error: {}
            }
        case LOGIN_REJECTED:
            console.log("LOGIN_REJECTED")
            return {
                in_progess: false,
                data: null,
                error: action.payload
            }
        case LOGIN_EMPTY:
            console.log("LOGIN_EMPTY")
            return {
                in_progess: false,
                data: {},
                error: {}
            }
        default:
            return state
    }
}