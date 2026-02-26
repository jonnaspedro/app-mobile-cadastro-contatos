import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function EditarContatoScreen({ route, navigation, contatos, setContatos }) {

  const { contato } = route.params;

  const [nome, setNome] = useState(contato.nome);
  const [email, setEmail] = useState(contato.email);
  const [telefone, setTelefone] = useState(contato.telefone);

  function atualizarContato() {

    if (!nome || !email || !telefone) {
      alert("Preencha todos os campos");
      return;
    }

    const novaLista = contatos.map(c =>
      c.id === contato.id
        ? { ...c, nome: nome, email: email, telefone: telefone }
        : c
    );

    setContatos(novaLista);

    alert("Contato atualizado!");

    navigation.navigate('ListaContatos');
  }

  function excluirContato() {
    const novaLista = contatos.filter(c => c.id !== contato.id);

    setContatos(novaLista);

    alert("Contato excluído!");

    navigation.navigate('ListaContatos');
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <Text style={styles.title}>Editar Contato</Text>

        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Telefone"
          style={styles.input}
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={setTelefone}
        />

        <TouchableOpacity style={styles.button} onPress={atualizarContato}>
          <Text style={styles.buttonText}>Salvar Alterações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.delete]} onPress={excluirContato}>
          <Text style={styles.buttonText}>Excluir Contato</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ListaContatos')}>
          <Text style={styles.link}>Voltar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#4CAF50',
    fontSize: 26,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#e0e0e0',
    width: '80%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    width: '80%',
    borderRadius: 5,
    marginTop: 10,
  },
  delete: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  link: {
    color: '#4CAF50',
    marginTop: 10,
  },
});