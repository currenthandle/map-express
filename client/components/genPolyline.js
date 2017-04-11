module.exports = (route) => {
    return route.reduce((crt, nxt) => {
        let toPush = [ nxt.lng , nxt.lat]
        let newCrt = crt.concat([toPush])
        return newCrt
    }, [])
}
