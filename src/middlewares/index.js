const Middleware = {

    authenticate(req, res, next) {

        const { authentication } = req.headers;
        const { user_id } = req.params;

        if(!authentication) return res.status(400).json({ message: 'Você precisa fornecer um token para prosseguir com essa ação.'});
        // Teremos que fornecer o ID tanto pelas rotas tanto pelo headers de authentication
        if(authentication != user_id) return res.status(400).json({ message: 'Acesso negado.'});

        // Em caso de sucesso
        next();
    }
};

module.exports = Middleware;
