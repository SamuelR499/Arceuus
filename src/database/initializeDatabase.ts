import { type SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database: SQLiteDatabase) {
  // Habilitar suporte a chaves estrangeiras
  await database.execAsync(`PRAGMA foreign_keys = ON;`);

  // Excluir as tabelas se elas existirem
  // await database.execAsync(`DROP TABLE IF EXISTS transacoes;`);
  // await database.execAsync(`DROP TABLE IF EXISTS categorias;`);

  // Criar a tabela categorias
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS categorias (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      categoria TEXT,
      tipo TEXT
    );
  `);

  // Criar a tabela transacoes com a chave estrangeira
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS transacoes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      data DATE,
      descricao TEXT,
      id_categoria INTEGER,
      tipo TEXT CHECK (tipo IN ('R', 'D')),
      valor REAL,
      feito BOOLEAN,
      FOREIGN KEY (id_categoria) REFERENCES categorias (id)
    );
  `);
}
