import React, {useState} from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image 
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import AuthContext from '../services/authContext';


export default function Login() {
  const { signIn } = React.useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    api.getToken(
      username,
      password,
      (data) => {
        signIn(data.access_token);
      },
      (err) => alert(err)
    );
  };

  return (
    <View style={[styles.container]}>
      <Text>Login Screen</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Login"
          style={styles.input}
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.containerBotao}
      onPress={handleLogin}>
        <View style={styles.botao}>
          <Text>Entrar</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '85%',
    height: 50,
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 0.75,
    borderColor: '#000',
  },
  containerBotao: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    width: '40%',
    height: 50,
    backgroundColor: '#D3AF37',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
})