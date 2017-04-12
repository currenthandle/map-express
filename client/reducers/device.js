export default function reducer(state = {
    device: ''
}, action) {
    switch (action.type){
        case 'SET_DEVICE': 
            return {...state, device: action.payload }
        default: 
            return state
    }
}
