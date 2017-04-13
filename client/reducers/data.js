export default function reducer(state = {
    device: []
}, action) {
    switch (action.type){
        case 'GET_DATA': 
            return {
                ...state, 
                data: action.payload, 
                //device: action.payload[0],
                numDevices: action.payload.length,
                currentDevice: 0
            }
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
