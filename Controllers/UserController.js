const user = require('../Models/User');
const jwt = require("jsonwebtoken");
class UserController{
    constructor(){ 
        this.key = process.env.SECRET_API
    }
    async auth(req, res, next){
        const { login, password } = req.body;
       
       try{
           let token="";
           const auth = await user.findOne({
                where:{
                    login:login,
                    password:password
                }
            })
            if(auth){
                const user = {
                    nome: auth.name,
                    login: auth.login,
                    id: auth.id
                };
                
                token = jwt.sign(user, this.key,{expiresIn:300});
            } else {
                res.status(401);
                res.end();
            }
            res.json({ auth: true, token: token });
        }catch(error){
            res.json({error:error});
        }
    }
    logout(req, res, next){
        res.json({ auth: false, token: null });
    }
    async register(req, res, next){
      try{
        const newUser= await user.create({
            login: this.login,
            name: this.name,
            password: this.password
        });
        res.json({response: 'success :)'}); 
      } catch(error){
        res.json({response: 'failed :('}); 
      }
    }
    async getUser(req, res, next){
        const user = req.user
        res.json(req.user);
    }
}
module.exports = UserController