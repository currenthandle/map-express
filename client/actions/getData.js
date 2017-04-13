export function getData(data) {
    return {
        type: 'GET_DATA',
        payload: fetch('/click')
            .then(resp => resp.json())
            .then(data => data
                .map(device => { 
                    return { 
                        ...device,
                        sessions: device.sessions
                            .map(session => {
                                return {
                                    ...session,
                                    active: false
                                } 
                            })
                    }
                })
            )
            .catch(err => console.error(err))
    }
}
