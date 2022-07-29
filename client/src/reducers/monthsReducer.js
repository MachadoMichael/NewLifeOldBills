export default function mounthReducer(state = [], action) {

    switch (action.type) {
        case 'ADD_MONTH':
            state[action.nameMonth] = action.payload

            const options = {
                method: 'POST',
                headers: new Headers({ 'content-type': 'application/json' }),
                body: JSON.stringify(state[action.nameMonth]),
            }

            fetch('/stateMonth', options)
                .then(res => {
                    return res.json()
                }).then(data => console.log(data))
            return state
        case 'LIST_MONTHS_VALUE':
            return state = action.payload
        default:
            return state
    }

}


