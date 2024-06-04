import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';
export function Home() {
  const [participant,setParticipant] = useState<string[]>([])
const [participantName,setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participant.includes(participantName)) {
      return Alert.alert("Participante Existe", "Já existe um participant com esse nome")
    }
    setParticipant(prevState =>[...prevState,participantName])
    setParticipantName('')
  }
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => setParticipant(prevState=> prevState.filter(participant => participant !== name))
      },
      {
        text: "Não",
        style: 'cancel'
      }
    ])
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
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participant}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listaEmptyText}>
            Ninguém adicionado no evendo!
          </Text>
        )}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          participant.map(participant => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove("fernando")} />

          ))
        }
      </ScrollView> */}
    </View>


  );
}