export default function reducer(state = {
    device: []
}, action) {
    switch (action.type){
        case 'CHANGE_DEVICE': 
            let crt = action.payload.crt
            if(action.payload.direction === 'forward') {
                if (crt === action.payload.numDevices - 1){
                    crt = 0
                }
                else {
                    crt++
                }
            }
            // direction is backword
            else {
                if(crt === 0) {
                    crt = action.payload.numDevices - 1
                }
                else {
                    crt--
                }
            }
            return {
                ...state, 
                currentDevice: crt 
            }
        default: 
            return state
    }
}
