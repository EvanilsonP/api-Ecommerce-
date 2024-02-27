const User = require('../../models/User');

const UserController = {
    // Cadastrar usuário
    async createUser(req, res) {
        const bodyData = req.body;
        try {
            const newUser = await User.create(bodyData);
            return res.status(201).json(newUser);
        } 
        catch (error) {
            return res.status(400).json(error);
        }
    },

    // Listar usuários
    async getAllUsers(req, res) {
        try {
            const allUsers = await User.find();
            return res.status(200).json(allUsers);
        } 
        catch (error) {
            return res.status(400).json(error);
        }
    },

    // Listar um usuário especifíco por ID
    async getUserById(req, res) {
        const { user_id } = req.params;
        try {
            const user = await User.findById(user_id);
            return res.status(200).json(user);
        } 
        catch (error) {
            return res.status(400).json(error);    
        }
    },
};

module.exports = UserController;