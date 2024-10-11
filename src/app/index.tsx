import { View, StyleSheet, Button, Alert, FlatList, } from "react-native";
import { useState, useEffect } from "react";

import { Ipunt } from "@/components/Ipunt";
import { Product } from "@/components/Product";

import { useProductDatabase, ProductDatabase } from "@/database/useProductDatabase";


export default function index() {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [search, setSearch] = useState("")
  const [quantity, setQuantity] = useState("")
  const [products, setProducts] = useState<ProductDatabase[]>([])

  const productDatabase = useProductDatabase()
  
  async function create() {
    try {
      if (isNaN(Number(quantity))) {
        return Alert.alert("Quantidade", "A quantidade precisa ser um número!");
      }
  
      const response = await productDatabase.create({ name, quantity: Number(quantity) });

      list()

      Alert.alert("Produto cadastrado com o ID" + response.insertedRowId);
    } catch (error) {
      console.log(error);
    }
  }

  async function list() {
    try {
      const response = await productDatabase.searchByName(search)
      setProducts(response)
    } catch (error) {
      console.log(error);
      
    }
  }

useEffect(() => {
  list()
},[search])

    return (
    <View style={styles.container}>
        <Ipunt
          placeholder="Nome do produto"
          onChangeText={setName}
          value={name}
        />
        <Ipunt
          placeholder="Quantidade"
          onChangeText={setQuantity}
          value={quantity}
        />
        <Button title="Salvar" onPress={()=> create()}/>

        <Ipunt
          placeholder="Pesquisar"
          onChangeText={setSearch}
        />
        <FlatList
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item})=> (
            <Product data={item} />
          )}
          contentContainerStyle={{gap: 16}}
        />
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 32,
      gap: 16,
    },
  });