
export default function dataMonthReducer(state = [], action) {

    switch (action.type) {
        case 'ADD_DATA_MONTH':
            const chosenMonth = Object.keys(action.payload).map((item, index) => {
                return (
                    { bills: item, value: action.payload[item] }
                )
            })
            chosenMonth['name'] = action.nameMonth;
            state =  chosenMonth 
            return state
        default:
            return state
    }

}


