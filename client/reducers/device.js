export default function reducer(state = {
    device: ''
}, action) {
    switch (action.type){
        case 'SET_DEVICE': 
            //console.log('in reducer SET_DEVICE case')
            return {...state, data: action.payload, device: action.payload[0] }
        default: 
            //console.log('in reducer DEFAULT case')
            return state
    }
}
