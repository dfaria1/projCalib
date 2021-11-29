//cSpell:Ignore usuario
import React, { useState } from 'react'
import { Container,
         Logo,
         InputArea,
         CustomButton,
         CustomButtonText,
         LoadingIcon
         } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
//import AsyncStorage from 'react-native'
import { useNavigation } from '@react-navigation/native'

import SignInput from '../../components/SignInput' 
import Weight from '../../components/icons/Weight'
import Api from '../../components/Api'

export default () =>{
    const [campoEmail, setCampoEmail] = useState('') //inicializando a variável campoEmail vazia
    const [campoSenha, setCampoSenha] = useState('') //inicializando a variável campoSenha vazia
    const [carregando, setCarregando] = useState(false) //inicializa o ícone "carregando" com status falso e será ativado quando o usuário clicar no botão de login
    const navigation = useNavigation() //Para navegar entre as diferentes telas

    const validaLogin = async() => {
        setCarregando(true)
        if(campoEmail && campoSenha) {//verifica se existe o campoEmail e o campoSenha
            let json = await Api.signIn(campoEmail, campoSenha)
            if (json.access_token){
                await AsyncStorage.setItem('token', json.access_token) //salva o token do usuário
                let usuario = await Api.checkToken(json.access_token)
                await AsyncStorage.setItem('usuario', JSON.stringify(usuario)) //armazena no dispositivo as informações do usuário que fez o login
                navigation.reset({
                    routes: [{name: 'MainTab'}]
                })
            } else {
                let erro = json.errors ? json.errors[0].msg: '' //caso aconteça um ou mais erros, traga apenas o primeiro erro
                alert(`Não foi possível efetuar o login: ${erro}`)
            }
        } else {
            alert ('Preencha todos os campos!')
        }

    }

    return(
    <Container>
        <Logo>
            <Weight />
        </Logo>
        <InputArea>
            <SignInput
                icon="mail"
                placeholder="Digite o seu e-mail"
                value={campoEmail}
                onChangeText={text => setCampoEmail(text)}
                autoFocus={true}
                autoComplete="email"
            />
            <SignInput
                icon="lock"
                placeholder="Digite a sua senha"
                value={campoSenha}
                onChangeText={text => setCampoSenha(text)}
                password={true}
                autoComplete="password"
            />
            <CustomButton onPress={validaLogin}>
                <CustomButtonText>Login</CustomButtonText>
                {carregando && <LoadingIcon size="small" color="#FFF" /> }
            </CustomButton>
        </InputArea>
    </Container>
    )
}