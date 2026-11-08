
import { conectarBanco } from "../database/database";
import { jogos } from '../data/jogos';

export async function inserirJogosIniciais() {
  const db = await conectarBanco();

  for (const jogo of jogos) {
    // Verifica se o jogo já está cadastrado
    const existente = await db.getFirstAsync<{ id: number }>(
      'SELECT id FROM jogo WHERE nome = ?',
      jogo.nome
    );

    // Insere somente se ainda não existir
    if (!existente) {
      await db.runAsync(
        `INSERT INTO jogo (
          nome,
          descricao,
          desenvolvedora,
          genero,
          data_lancamento
        ) VALUES (?, ?, ?, ?, ?)`,
        jogo.nome,
        jogo.descricao,
        jogo.desenvolvedora,
        jogo.genero,
        jogo.data_lancamento
      );
    }
  }
}
