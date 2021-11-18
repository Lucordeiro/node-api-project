const transactions = require('../Models/Transactions');
class TransactionsController{
    constructor(origin_id, destiny_id, amount){
        this.Transactions = new Transactions()
        this.origin_id = origin_id;
        this.destiny_id = destiny_id;
        this.amount = amount;
    }
    async register(){
        const newTransaction = await transactions.create({
            origin_id:this.origin_id,
            destiny_id:this.destiny_id,
            amount:this.amount
        });
        res.json({result: newTransaction});
    }
   async getAll(){
        const AllTransaction = await transactions.findAll();
        res.json({result: AllTransaction});
    }
  
}
module.exports = TransactionsController