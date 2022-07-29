export default function accountsReducer(state = [], action) {

    switch (action.type) {
        case 'ADD_BILL':
            state = [...state, action.payload]
            return state
        case 'ADD_VALUE':
            return action.payload
        case 'RESET_BILLS_VALUE':
            return state = action.payload
        case 'BILLS':
            return state
        default:
            return state
    }

}
