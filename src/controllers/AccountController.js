const {accountService} = require('../service/index');

class AccountController{
    async register(req, res){
        try{
            const user = await accountService.register(req.body);
            res.json(user);
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }
}