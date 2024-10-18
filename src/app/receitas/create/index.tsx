import React, { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Create() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'time' | undefined>('date');

  const [descricao, setDescricao] = useState('');
  const [id_categoria, setIdCategoria] = useState('');
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState('');
  const [feito, setFeito] = useState(false);


  const onChange = (e: any, selectedDate: Date) =>{
    setDate(selectedDate);
    setShowDatePicker(false);
  }

  const showMode = (modeToShow: 'date' | 'time') => {
    setShowDatePicker(true);
    setMode(modeToShow);

  }

  const handleCreateRecipe = async () => {
    console.log('Recipe data:', { descricao, date, id_categoria, tipo, valor, feito });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Crie uma receita</Text>
      <View style={styles.containerOption}>
        <TouchableOpacity onPress={()=> showMode("date")}>
          <TextInput
            placeholder='📅 Data da transação'
            style={styles.input}
            editable={false}
            value={date.toLocaleDateString()}
          />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker 
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
        <TextInput
          placeholder="ID da categoria"
          style={styles.input}
          value={id_categoria}
          onChangeText={setIdCategoria}
        />
        <TextInput
          placeholder="Tipo"
          style={styles.input}
          value={tipo}
          onChangeText={setTipo}
        />
        <TextInput
          placeholder="Valor"
          style={styles.input}
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />
        <Switch
          value={feito}
          onValueChange={setFeito}
          trackColor={{ false: "#767577", true: "#22c55e" }}
          thumbColor={feito ? "#f5f6f7" : "#f4f3f4"}
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
    color: "#e4e4e7"
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
    marginBottom: 8,
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
});
