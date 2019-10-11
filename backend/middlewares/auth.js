module.exports = (app) => {
    return {
        validarToken: (req, res, next) => {
            if(req.originalUrl == "/usuarios/login"){
                next();
            } else{
                let token = req.headers.token

                if(!token) {
                    res.end("Faltou enviar o token")
                } else {
                    app.get("jwt").verify(token, "senhasupersecreta", (err, decoded) => {
                            if(err){
                                res.end(err)
                            } else {
                                req.decoded = decoded
                                next()
                            }
                        })

                    // next();
                }
            }
        }
    }
}