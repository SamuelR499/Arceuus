import { useSQLiteContext } from "expo-sqlite";

// Interface for Transacoes table
export type Transacao = {
  id: number;
  data: string; // Assuming date is stored as a string
  descricao: string;
  id_categoria: number;
  tipo: string;
  valor: number;
  feito: boolean;
};

// Interface for Categorias table (optional)
export type Categoria = {
  id: number;
  categoria: string;
  tipo: string; // Optional, depending on your needs
};

export function useTransacoesDatabase() {
  const database = useSQLiteContext();

  // Create function (adjusted for Transacoes table)
  async function createTransacao(data: Omit<Transacao, "id">) {
    const statement = await database.prepareAsync(
      "INSERT INTO transacoes (data, descricao, id_categoria, tipo, valor, feito) VALUES ($data, $descricao, $id_categoria, $tipo, $valor, $feito)"
    );
    try {
      const result = await statement.executeAsync({
        $data: data.data,
        $descricao: data.descricao,
        $id_categoria: data.id_categoria,
        $tipo: data.tipo,
        $valor: data.valor,
        $feito: data.feito,
      });

      const insertedRowId = result.lastInsertRowId.toLocaleString();
      return { insertedRowId };
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  // Search function (adjusted for Transacoes table)
  async function searchTransacoes(filter?: Partial<Transacao>) {
    let query = "SELECT * FROM transacoes";
    let params: any = [];

    if (filter) {
      const conditions: any = [];
      Object.entries(filter).forEach(([key, value]) => {
        conditions.push(`${key} = ?`);
        params.push(value);
      });
      query += ` WHERE ${conditions.join(" AND ")}`;
    }

    try {
      const response = await database.getAllAsync<Transacao>(query, params);
      return response;
    } catch (error) {
      throw error;
    }
  }

  // Update function (adjusted for Transacoes table)
  async function updateTransacao(data: Transacao) {
    const statement = await database.prepareAsync(
      "UPDATE transacoes SET data = $data, descricao = $descricao, id_categoria = $id_categoria, tipo = $tipo, valor = $valor, feito = $feito WHERE id = $id"
    );

    try {
      await statement.executeAsync({
        $id: data.id,
        $data: data.data,
        $descricao: data.descricao,
        $id_categoria: data.id_categoria,
        $tipo: data.tipo,
        $valor: data.valor,
        $feito: data.feito,
      });
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  // Remove function (adjusted for Transacoes table)
  async function removeTransacao(id: number) {
    try {
      await database.execAsync("DELETE FROM transacoes WHERE id = " + id);
    } catch (error) {
      throw error;
    }
  }

  // Show function (adjusted for Transacoes table)
  async function showTransacao(id: number) {
    try {
      const query = "SELECT * FROM transacoes WHERE id = ?";

      const response = await database.getFirstAsync<Transacao>(query, [id]);

      return response;
    } catch (error) {
      throw error;
    }
  }

  // Optional functions for Categorias table (implement similarly)
  // ...

  return {
    createTransacao,
    searchTransacoes,
    updateTransacao,
    removeTransacao,
    showTransacao,
    // ... other functions for Categorias table (optional)
  };
}