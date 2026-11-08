import { conectarBanco } from "../database/database";

export async function inserirJogo(
    nome: string,
    descricao: string,
    desenvolvedora: string,
    genero: string,
    data_lancamento: Date
) {
    const db = await conectarBanco();

    const resultado = await db.runAsync(`
        INSERT INTO jogo (nome, descricao, desenvolvedora, genero, data_lancamento)
        VALUES (?, ?, ?, ?, ?);
        `,
        [nome,
        descricao,
        desenvolvedora,
        genero,
        data_lancamento.toISOString()]
    );

    return resultado.lastInsertRowId;
}

export async function buscarJogos(){
    const db = await conectarBanco();

    const jogos = await db.getAllAsync(
        'SELECT * FROM jogo'
    );

    return jogos;
}

export async function limparJogos() {
    const db = await conectarBanco();
    await db.runAsync('DELETE FROM jogo');
    console.log('Tabela de jogos limpa!');
}