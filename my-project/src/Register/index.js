import React, { useState } from "react"
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Wrapper, WrapperInput, WrapperText } from "./styles";

export const Userlist = [];

export default function Home({ navigation }) {
       const [username, setUsername] = useState(null);
       const [password, setPassword] = useState(null);
       const [email, setEmail] = useState(null);const [nome, setNome] = useState(null);
       const [endereco, setEndereco] = useState(null);
       const [message, setMessage] = useState("Preencha os campos");
       

       function Usuario(nome,username, password,email,endereco) {
              this.nome = nome;
              this.username = username;
              this.password = password;
              this.email = email;
              this.endereco = endereco;
       
       }

       function verifyRegister(nome,username, password,email,endereco, navigation) {
              if (nome != null && username != null && password != null && email != null && endereco != null) {
                     let user = new Usuario(nome,username,password,email,endereco);
                     Userlist.push(user);
                     console.log(user);
                     navigation.navigate("Login");
              }
              else {
                     setMessage("Há campos vazios!!")
                     }
       }

       return (

              <Wrapper>
                     <View>
                            <WrapperText>Preencha o Cadastro</WrapperText>
                            <View><WrapperInput
                                   placeholder="nome"
                                   onChangeText={setNome}
                                   value={nome}
                            />
                                   <WrapperInput
                                          placeholder="username"
                                          onChangeText={setUsername}
                                          value={username}
                                   />
                                   <WrapperInput
                                          placeholder="email"
                                          onChangeText={setEmail}
                                          value={email}
                                          
                                   />
                                   <WrapperInput
                                          placeholder="Endereco"
                                          onChangeText={setEndereco}
                                          value={endereco}

                                   />
                                   <WrapperInput
                                          placeholder="password"
                                          onChangeText={setPassword}
                                          value={password}
                                          secureTextEntry={true}
                                   />

                                   <Button title="Entrar" onPress={() => verifyRegister(nome,username, password,email,endereco, navigation)} />
                            </View>
                            <WrapperText>{message}</WrapperText>
                     </View>
              </Wrapper>


       )
}