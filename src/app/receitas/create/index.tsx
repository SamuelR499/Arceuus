import React, { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { router } from 'expo-router';

export default function Create() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<'date' | 'time' | undefined>('date');
  const [descricao, setDescricao] = useState('');
  const [idCategoria, setIdCategoria] = useState('');
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState('');
  const [feito, setFeito] = useState(false);
  const [dateInput, setDateInput] = useState('')


  const onDatePickerChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) =>{
    if (selectedDate) {
      setDate(selectedDate);
      setShowDatePicker(false);
      setDateInput(selectedDate.toLocaleDateString())
    }
  }

  const showMode = (modeToShow: 'date' | 'time') => {
    setShowDatePicker(true);
    setMode(modeToShow);
  }

  const handleCreateRecipe = async () => {
    if (!date || !descricao || !idCategoria || !valor) {
      alert("Preencha todos os campos");
      return; // Impede a continuação caso haja campos vazios
    }
    setTipo('Receita')
    console.log('Recipe data:', { date, descricao, idCategoria, tipo, valor, typeof: valor, feito });
    setDate(new Date());
    setDescricao('');
    setIdCategoria('');
    setValor('');
    setFeito(false);
    router.navigate("/receitas")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Crie uma receita</Text>
      <View style={styles.containerOption}>
        <TouchableOpacity onPress={()=> showMode("date")}>
          <TextInput
            placeholder='📅 Data da transação'
            placeholderTextColor="#9ca3af"
            style={styles.input}
            editable={false}
            value={dateInput}
          />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker 
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onDatePickerChange}
          />
        )}
          <TextInput
            placeholder='Descrição'
            placeholderTextColor="#9ca3af"
            style={styles.input}
            value={descricao}
            onChangeText={(text)=> setDescricao(text)}
          />
        <TextInput
          placeholder="categoria (Teste, Esse campo deve ser um select)"
          placeholderTextColor="#9ca3af"
          style={styles.input}
          value={idCategoria}
          onChangeText={(text)=> setIdCategoria(text)}
        />
        <TextInput
          placeholder="Valor"
          placeholderTextColor="#9ca3af"
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
    marginBottom: 8,
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
});
