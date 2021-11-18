const jwtService = require("jsonwebtoken");
class Auth{
    constructor(key){
        this.privateKey = key
    }
    verifyToken(req, res, next){
        const jwt = req.headers['x-access-token'];
        console.log(jwt)
        jwtService.verify(jwt, this.privateKey, (err, user) => {
            if (err) {
                res.status(403).end();
                return;
            }
            req.user = user;
            next();
        });
    }
}
module.exports = Auth