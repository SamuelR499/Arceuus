import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router';

export default function Categorias() {
 return (
   <View style={styles.container}>

    <Pressable style={styles.button} onPress={() => router.navigate('/categorias/create')}>
      <Text style={styles.buttonText}>Cadastrar</Text>
      <Ionicons name="add" size={24} color="#FFF" />
    </Pressable>
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
  input: {
    backgroundColor: "#f1f5f9",
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 8,
    color: "#374151"
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