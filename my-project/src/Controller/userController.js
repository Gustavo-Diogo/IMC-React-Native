const dataBase = require('../../models/')

class userController {
    static async pegaTodasAsTurmas(req, res) {
        try {
            const todosOsUser = await dataBase.User.findOne({
                where:{
                    id: Number(id)
                }
            })
            return res.status(200).json(todasAsTurmas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}