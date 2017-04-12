export function setDevice(data) {
    return {
        type: 'SET_DEVICE',
        payload: fetch('/click')
            .then(resp => resp.json())
            .then(data => data)
            .catch(err => console.err(err))
    }
}
