export default function reducer(state = {
    user: {}
}, action) {
    switch (action.type){
        case 'CREATE_SESSION': 
            return {...state, user: action.payload }
        default: 
            return state
    }
}
