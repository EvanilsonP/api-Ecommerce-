const User = require('../../models/User');
const bcrypt = require('bcrypt');

// Método de login
const LoginController = {

    async createSession(req, res) {

        const { username, password } = req.body;
        
        // Em caso de que o usuário não preencha nenhum dos campos
        if(username === '' || password === '') return res.status(401).json({ message: 'Preencha todos os campos obrigatórios.'});

        // Verifica se há um usuário cadastrado no BD com o nome fornecido
        const user = await User.findOne({ username });
        if(!user) return res.status(401).json({ message: 'Nenhum usuário encontrado.'});

        // Compara as senhas do req.body e a senha salva no BD
        const comparingPasswords = await bcrypt.compare(password, user.password);
        if(!comparingPasswords) return res.status(401).json({ message: 'Senha inválida'});

        // Em caso de sucesso
        return res.status(200).json({ message: 'Usuário logado', username });
    }
};

module.exports = LoginController;