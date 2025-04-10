const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.index);
router.get('/cadastro-produto', homeController.cadastroProduto);
router.get('/cadastro-usuario', homeController.cadastroUsuario);

// Produtos
router.post('/produtos/criar', homeController.criarProduto);
router.get('/produtos/buscar', homeController.cadastroProduto);
router.post('/produtos/atualizar', homeController.atualizarProduto);
router.get('/produtos/excluir/:id', homeController.excluirProduto);

// Usuários
router.post('/usuarios/criar', homeController.criarUsuario);

module.exports = router;