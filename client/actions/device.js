export function setDevice(data) {
    //console.log('in setDevice action')
    return {
        type: 'SET_DEVICE',
        payload: fetch('/click')
            .then(resp => resp.json())
            .then(data => {
                //console.log('in second then of fetch')
                return data
            })
            .catch(err => console.error(err))
    }
}
