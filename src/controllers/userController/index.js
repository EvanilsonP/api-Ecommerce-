const User = require('../../models/User');
const bcrypt = require('bcrypt');

const UserController = {
    // Cadastrar usuário
    async createUser(req, res) {

       try {
         const { username, password } = req.body;
         const hashedPassword = await bcrypt.hash(password, 10);  
         
        // Verifica se já há algum usuário cadastrado com o nome fornecido e se o usuário preencheu os campos obrigatórios
        const existingUser = await User.findOne({ username });   
        
        if(existingUser) {
            return res.status(400).json({ message: 'Nome de usuário já cadastrado. '});

        } else if(username === '' || password === '') {
            return res.status(400).json({ message: 'Preencha todos os campos obrigatórios.'});
            
        } else {
            const user = await User.create({ username, password: hashedPassword});
            return res.status(201).json({ message: 'Usuário cadastrado', user});
        }

       } 

       catch (error) {
            res.status(400).json({error});
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