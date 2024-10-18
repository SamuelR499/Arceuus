import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router';

export default function Receitas() {
 return (
   <View style={styles.container}>
    <TextInput
      placeholder="Procurar..."
      style={styles.input}
    />

    <Pressable style={styles.button} onPress={() => router.navigate('/receitas/create')}>
      <Text style={styles.buttonText}>Cadastrar</Text>
      <Ionicons name="add" size={24} color="#FFF" />
    </Pressable>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 8,
    marginBottom: 8,
  },
  input:{
    backgroundColor: "#f1f5f9",
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 8,
  },
  button:{
    backgroundColor: "#22c55e",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 8,
    gap: 8,
  },
  buttonText:{
    fontSize: 16,
    color: "#FFF",
    fontWeight: "500"
  }
})