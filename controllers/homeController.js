const ProdutoRepository = require('../model/repositories/ProdutoRepository');
const UsuarioRepository = require('../model/repositories/UsuarioRepository');

module.exports = {
  index: (req, res) => {
    res.render('index');
  },

  cadastroProduto: async (req, res) => {
    let produto = null;
    if (req.query.id) {
      produto = await ProdutoRepository.buscarPorId(req.query.id);
    }
    res.render('cadastroProduto', { produto });
  },

  cadastroUsuario: (req, res) => {
    res.render('cadastroUsuario');
  },

  criarProduto: async (req, res) => {
    await ProdutoRepository.criar(req.body.nome, req.body.preco);
    res.redirect('/cadastro-produto');
  },

  atualizarProduto: async (req, res) => {
    await ProdutoRepository.atualizar(
      req.body.id,
      req.body.nome,
      req.body.preco
    );
    res.redirect('/cadastro-produto');
  },

  excluirProduto: async (req, res) => {
    await ProdutoRepository.excluir(req.params.id);
    res.redirect('/cadastro-produto');
  },

  criarUsuario: async (req, res) => {
    await UsuarioRepository.criar(
      req.body.nome,
      req.body.email,
      req.body.celular
    );
    res.redirect('/cadastro-usuario');
  }
};