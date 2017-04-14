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
                currentDevice: 0,
                activeSessions: []
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
        case 'TOGGLE_TRAJECTORY':
            let ap = action.payload,
                data = ap.data,
                deviceId = ap.device,
                sessionId = ap.session

            return {
                ...state,
                data: data.map(device => {
                    if (device['device_id'] === deviceId) {
                        device.sessions.map(session => {
                            if (session['session_id'] === sessionId) {
                                session.active = !session.active
                                return session
                            }
                            return session
                        })
                    }
                    return device
                })
            }
		
        default: 
            return state
    }
}
