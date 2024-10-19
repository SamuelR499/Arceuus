import { useSQLiteContext } from "expo-sqlite";

export type Category = {
  id: number;
  categoria: string;
  tipo: string; // Pode ser opcional, dependendo das suas necessidades
};

// Interface for Categorias table (optional)

export function useCategoriesDatabase() {
  const database = useSQLiteContext();

  // Função para criar categoria
  async function createCategory(data: Omit<Category, "id">) {
    const statement = await database.prepareAsync(
      "INSERT INTO categorias (categoria, tipo) VALUES ($categoria, $tipo)"
    );
    try {
      const result = await statement.executeAsync({
        $categoria: data.categoria,
        $tipo: data.tipo,
      });

      const insertedRowId = result.lastInsertRowId;
      console.log("Categoria inserida:", { 
        id: insertedRowId, 
        categoria: data.categoria, 
        tipo: data.tipo 
      });
      return { insertedRowId };
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  return {
    createCategory,
  };
}
