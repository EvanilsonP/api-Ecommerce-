const Middleware = {

    authenticate(req, res, next) {

        const { authentication } = req.headers;
        const { user_id } = req.params;

        if(!authentication) return res.status(400).json({ message: 'Você precisa fornecer um token para prosseguir com essa ação.'});
        // Teremos que fornecer o ID tanto pelas rotas tanto pelo headers de authentication
        if(authentication != user_id) return res.status(400).json({ message: 'Acesso negado.'});

        // Em caso de sucesso
        next();
    },
    // middleware que faz com que o usuário forneça um ID de usuário válido ao listar um usuário por ID
    checkUserId(req, res, next) {
        const { user_id } = req.params.user_id;

        if(!user_id) return res.status(400).json({ error: 'Você precisa fornecer um ID de usuário válido.' });
        req.user_id = user_id;
        next();
    }
};


module.exports = Middleware;
