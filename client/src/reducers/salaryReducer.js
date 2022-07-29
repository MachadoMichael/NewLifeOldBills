export default function salaryReducer(state = [
    { name: 'Salário', value: 0 },
   
], action) {

    switch (action.type) {
        case 'ADD_SALARY':
            return action.payload
        default:
            return state
    }

}


