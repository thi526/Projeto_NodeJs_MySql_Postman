const pool = require('../database/connection');

class UsuarioRepository {
  static async criar(nome, email, celular) {
    const [result] = await pool.execute(
      'INSERT INTO usuarios (nome, email, celular) VALUES (?, ?, ?)',
      [nome, email, celular]
    );
    return result;
  }

  static async buscarPorId(id) {
    const [rows] = await pool.execute(
      'SELECT * FROM usuarios WHERE id = ?',
      [id]
    );
    return rows[0];
  }
  
}


module.exports = UsuarioRepository;