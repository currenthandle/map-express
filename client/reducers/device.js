export default function reducer(state = {
    device: []
}, action) {
    switch (action.type){
        case 'SET_DEVICE': 
            return {...state, data: action.payload, device: action.payload[0] }
        default: 
            return state
    }
}
