export default function reducer(state = {
    restaurants: [] 
}, action) {

    let temp = {...state, restaurants: action.payload ? action.payload.items : action.payload }
    switch (action.type){
        case 'SET_RESTAURANTS': 
            return temp
        default: 
            return state
    }
}
