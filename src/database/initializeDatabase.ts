import { type SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database: SQLiteDatabase) {
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS categorias (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      categoria TEXT,
      tipo TEXT
    );
  `);

  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS transacoes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      data DATE,
      descricao TEXT,
      id_categoria INTEGER,
      tipo TEXT,
      valor REAL,
      feito BOOLEAN
    );
  `);
}