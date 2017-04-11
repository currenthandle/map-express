export function setRestaurants(restaurants) {
    return {
        type: 'SET_RESTAURANTS',
        payload: fetch('/getListings') 
            .then(resp => {
                return resp.json() 
            })
            .then(response => {
                return response
            })
            .catch(err => console.err(err))
    }
}
