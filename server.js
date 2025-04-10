const express = require('express');
const path = require('path'); // Adicione esta linha
const app = express();

// Configurações básicas
const PORT = process.env.PORT || 3000;

// Configuração do EJS (forma mais robusta com path.join)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Modificado

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Adicione esta linha

// Rotas
const homeRoutes = require('./routes/homeRoute');
app.use('/', homeRoutes);

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});