import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import ListaContatosScreen from './screens/ListaContatosScreen';
import CadastroUsuarioScreen from './screens/CadastroUsuarioScreen';
import CadastroContatoScreen from './screens/CadastroContatoScreen';
import EditarContatoScreen from './screens/EditarContatoScreen';
import EsqueceuSenhaScreen from './screens/EsqueceuSenhaScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [usuarios, setUsuarios] = useState([]);
  const [contatos, setContatos] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        {/* LOGIN */}
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {props => (
            <LoginScreen 
              {...props} 
              usuarios={usuarios} 
            />
          )}
        </Stack.Screen>

        {/* CADASTRO USUÁRIO */}
        <Stack.Screen name="CadastroUsuario">
          {props => (
            <CadastroUsuarioScreen 
              {...props} 
              usuarios={usuarios} 
              setUsuarios={setUsuarios} 
            />
          )}
        </Stack.Screen>

        {/* LISTA CONTATOS */}
        <Stack.Screen name="ListaContatos">
          {props => (
            <ListaContatosScreen 
              {...props} 
              contatos={contatos} 
              setContatos={setContatos} 
            />
          )}
        </Stack.Screen>

        {/* CADASTRO CONTATO */}
        <Stack.Screen name="CadastroContato">
          {props => (
            <CadastroContatoScreen 
              {...props} 
              contatos={contatos} 
              setContatos={setContatos} 
            />
          )}
        </Stack.Screen>

        {/* EDITAR CONTATO */}
        <Stack.Screen name="EditarContato">
          {props => (
            <EditarContatoScreen 
              {...props} 
              contatos={contatos} 
              setContatos={setContatos} 
            />
          )}
        </Stack.Screen>

        {/* ESQUECEU SENHA */}
        <Stack.Screen name="EsqueceuSenha">
          {props => (
            <EsqueceuSenhaScreen 
              {...props} 
              usuarios={usuarios} 
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}