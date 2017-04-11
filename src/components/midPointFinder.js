// takes a list of route lists

module.exports = (routes) => {
    let agRoutes = routes.reduce((crt, nxt) => crt.concat(nxt))

    let midpoint = agRoutes.reduce((crt, nxt) => {
        return [ 
            crt[0]+(Number(nxt.lng)/agRoutes.length),
            crt[1]+(Number(nxt.lat)/agRoutes.length)
        ]
    }, [0, 0])

    return midpoint;
}

