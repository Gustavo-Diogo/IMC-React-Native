import React, { useState } from "react"
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Wrapper, WrapperInput, WrapperText } from './styles'
import { Userlist } from "../Register";

const UserList = Userlist;
export const actualUser = [];

export default function Login({ navigation }) {
    
    
    
    function autenticarUser() {
        let verify = false;
        
        if (username != null && password != null) {
            for (let index = 0; index < UserList.length; index++) {
                const element = UserList[index];
                if (element.username === username && element.password === password) {
                    actualUser.pop(0);
                    actualUser.push(element);
                    
                    verify = true;
                    navigation.navigate("Home");
                    setPassword(null);
                    setUsername(null);
                    break;
                }
            }  

            if (verify == false) {
                setMessage("Conta não encontrada no sgpt");
            }
        } 
        
        else {           
            setPassword(null);
            setUsername(null);
            setMessage("Por favor preencha o campos.");
        }
    }

    const [message, setMessage] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    return (

        <Wrapper>
            <View>
                <WrapperText>Login</WrapperText>

                <View>

                    <WrapperInput
                        placeholder="username"
                        onChangeText={setUsername}
                        value={username}

                    />

                    <WrapperInput
                        placeholder="password"
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        value={password}
                    />


                    <Button title="Entrar" onPress={() => autenticarUser(navigation, username, password)} />
                </View>

                <WrapperText onPress={() => navigation.navigate("Register")} >Clique aqui para se cadastrar</WrapperText>
                <WrapperText >{message}</WrapperText>
            </View>
        </Wrapper>
    );
}