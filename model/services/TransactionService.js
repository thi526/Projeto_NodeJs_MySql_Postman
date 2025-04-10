const pool = require('../database/connection');

class TransactionService {
  /**
   * Exemplo: criar um usuário e logar a operação em uma tabela de logs na mesma transação
   */
  static async criarUsuarioComLog(nome, email, celular) {
    const connection = await pool.getConnection();
    
    try {
      await connection.beginTransaction();

      // Inserir usuário
      const [usuarioResult] = await connection.execute(
        'INSERT INTO usuarios (nome, email, celular) VALUES (?, ?, ?)',
        [nome, email, celular]
      );

      const usuarioId = usuarioResult.insertId;

      // Registrar log da criação
      await connection.execute(
        'INSERT INTO logs (usuario_id, acao, data) VALUES (?, ?, NOW())',
        [usuarioId, 'Criação de usuário']
      );

      // Confirmar transação
      await connection.commit();
      return { success: true, usuarioId };
    } catch (error) {
      await connection.rollback();
      console.error('Erro na transação:', error);
      throw error;
    } finally {
      connection.release();
    }
  }
}

module.exports = TransactionService;
