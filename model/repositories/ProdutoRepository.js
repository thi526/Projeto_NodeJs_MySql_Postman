const pool = require('../database/connection');

class ProdutoRepository {
  static async criar(nome, preco) {
    const [result] = await pool.execute(
      'INSERT INTO produtos (nome, preco) VALUES (?, ?)',
      [nome, preco]
    );
    return result;
  }

  static async buscarPorId(id) {
    const [rows] = await pool.execute(
      'SELECT * FROM produtos WHERE id = ?',
      [id]
    );
    return rows[0];
  }

  static async atualizar(id, nome, preco) {
    const [result] = await pool.execute(
      'UPDATE produtos SET nome = ?, preco = ? WHERE id = ?',
      [nome, preco, id]
    );
    return result;
  }

  static async excluir(id) {
    const [result] = await pool.execute(
      'DELETE FROM produtos WHERE id = ?',
      [id]
    );
    return result;
  }
}

module.exports = ProdutoRepository;