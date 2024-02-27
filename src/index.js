require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000 || process.env.PORT;
const db = require('./database/db.js');
// Exportando função para conexão ao Banco de Dados
db();

app.use(cors());
app.use(express.json());

// Rotas
app.use(require('./routes/route.js'));

app.listen(PORT, () => {
    console.log(`Rodando na Port ${PORT}`);
});