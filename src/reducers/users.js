export default function reducer(state = {
    signupFlash: ''
}, action) {
    switch (action.type){
        case 'SET_SIGNUP_FLASH': 
            return {...state, signupFlash: action.payload }
        default: 
            return state
    
    }
}
