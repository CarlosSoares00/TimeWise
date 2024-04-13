const jwt = require('jsonwebtoken');

const secretJwt = "carlossoares2004@";

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({error: "Token nao fornecido"});
    }

    const tokenParts = token.split(' ');
    if(tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(401).json({error: "Formato de token invalido."});
    }

    const cleanToken = tokenParts[1];
    jwt.verify(cleanToken, secretJwt, (err, decoded) => {
        if(err) {
            return res.status(401).json({error: 'Erro de Autenticacao.'})
        };

        req.user = decoded;
        next()
    })
}

module.exports = verifyToken