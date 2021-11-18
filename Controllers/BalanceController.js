const Balance = require('../Models/Balance');
class BalanceController{
    constructor(user_id, amount){
        this.Balance = new Balance()
        this.user_id = user_id,
        this.amount = amount
    }
    get(){

    }
    update(){
        
    }

}
module.exports = BalanceController