const User = require('../../models/User');

// Método de login
const LoginController = {

    async createSession(req, res) {
        const { username } = req.body;
        try {
            const user = await User.findOne({ username });
            // Se não houver usuário cadastrado com seu username no banco de dados
            if(!user) return res.status(400).json({ message: 'Usuário não encontrado.'});
            return res.status(200).json(user);

        } 

        catch (error) {
            return res.status(400).json(error);
        }
    }
};

module.exports = LoginController;