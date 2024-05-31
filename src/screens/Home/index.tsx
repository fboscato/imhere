import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
export function Home() {
  function handleParticipantAdd() {
    console.log("voce clicou no botao de adicionar")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName} >Nome do Evento
      </Text>
      <Text style={styles.eventDate} >Sexta, 31 de Maio de 2024
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do Participante'
          placeholderTextColor='#6b6b6b'
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>


  );
}