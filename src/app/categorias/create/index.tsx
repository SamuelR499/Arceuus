import React, { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Create() {
  const [tipo, setTipo] = useState<'R' | 'D'>('R');
  const [descricao, setDescricao] = useState('');


  const handleCreateRecipe = async () => {
    if (!tipo || !descricao) {
      alert("Preencha todos os campos");
      return; // Impede a continuação caso haja campos vazios
    }
    setDescricao('');
    setTipo('R')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Crie uma categoria</Text>
      <View style={styles.containerOption}>
      <View style={styles.optionContainer}>
          <Pressable style={[styles.optionButton, tipo === 'R' ? styles.selectederevenueOption : styles.notselectedOption]} onPress={() => {
            setTipo('R')
            console.log('R');
            
            }}>
            <Text style={styles.optionButtonText}>Receita</Text>
          </Pressable>
          <Pressable style={[styles.optionButton, tipo === 'D' ? styles.selectedexpenseOption : styles.notselectedOption]} onPress={() => setTipo('D')}>
            <Text style={styles.optionButtonText}>Despesa</Text>
          </Pressable>
        </View>
          <TextInput
            placeholder='Descrição'
            placeholderTextColor="#9ca3af"
            style={styles.input}
            value={descricao}
            onChangeText={(text)=> setDescricao(text)}
          />
        <Pressable style={styles.button} onPress={handleCreateRecipe}>
          <Text style={styles.buttonText}>Salvar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 14,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: 'bold'
  },
  text: {
    color: "#d4d4d8"
  },
  containerOption: {
    marginTop: 8,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f1f5f9",
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 30,
    color: "#374151"
  },
  button: {
    backgroundColor: "#22c55e",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 8,
    gap: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "500"
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  optionButton: {
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
    width:130,
    marginVertical: 30,
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedexpenseOption: {
    backgroundColor: '#ff5f56',
  },

  selectederevenueOption: {
    backgroundColor: "#22c55e",
  },
  optionButtonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "500"
  },

  notselectedOption: {
    backgroundColor: '#1b294b',
  },
});
