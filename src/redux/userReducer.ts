
interface actions {
    type: string
    payload: any
}

interface IUserReducer {
    currentUser?:{}
}

const initialState = {currentUser : null}

export const userReducer = (state = initialState, action : actions) => {
    switch(action.type) {
        case 'SET_CURRENT_USER' :
        return {
            ...state,
            currentUser : action.payload
        }

        default:
            return state
    }
}