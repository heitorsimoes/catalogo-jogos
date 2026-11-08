import * as SQLite from 'expo-sqlite';

export async function conectarBanco() {
    const db = await SQLite.openDatabaseAsync('jogos.db');
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS jogo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            descricao TEXT NOT NULL,
            desenvolvedora TEXT NOT NULL,
            genero TEXT NOT NULL,
            data_lancamento TEXT
            );
        `);
        return db;
}