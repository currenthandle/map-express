export function getData(data) {
    return {
        type: 'GET_DATA',
        payload: fetch('/click')
            .then(resp => resp.json())
            .then(data =>  data )
            .catch(err => console.error(err))
    }
}
/*
export function setDevice(crt, direction) {
    return {
        type: 'SET_DEVICE',
        payload: 
    }
}
*/
