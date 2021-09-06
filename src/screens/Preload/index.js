//cSpell:Ignore usuario
import React, { useEffect } from 'react'
import { Container, Title, LoadingIcon, Logo } from './styles'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'


// Utilizar o link para converter o SVG em um componente React Native
// https://react-svgr.com/playground/?expandProps=none&native=true
import Weight from '../../components/icons/Weight'
import Api from '../../components/Api'

export default() => {
    const navigation = useNavigation() //Para navegar entre as diferentes telas

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token') //Buscamos o token no dispositivo aguardamos de forma assíncrona.
        if (token) { //Verifica se o token existe
            let res = await Api.checkToken(token)
            if(res.nome){ //Caso na resposta exista um .nome, significa que o usuário conseguiu fazer o login, então pode prosseguir para a tela de Menu
                const dadosToken = ['token', token]                     //Salvar os dados do token
                const dadosUsuario = ['usuario', JSON.stringify(res)]   //Salvar os dados do usuário
                await AsyncStorage.multiSet([dadosToken, dadosUsuario]) //Armazena no dispositivo do usuário as informações do token e do usuário
                navigation.reset({
                    routes: [{name: 'MainTab'}]
                })
            } else {
                //Caso o token exista, mas seja inválido
                navigation.navigate('SignIn')

            }
        } else {
            //Caso o token não exista, o usuário deve ser encaminhado para a tela de Login
            navigation.navigate('SignIn')
        }
    }

    useEffect(() => {
        checkToken()
    }, []) //A função useEffect é executada automaticamente sempre que a tela é carregada.
    //O último parâmetro, entre colchetes [], indica qual será a variável a ser verificada se foi alterado.
    //Em caso de alteração desta variável, o useEffect entra em ação.
    //Caso o parâmetro entre colchetes esteja vazio, ele executa o useEffect uma única vez, quando a tela em questão é carregada.

    const handleLogin = async () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
    }

    return (
    <Container>
        <Logo>
        <Weight />
        </Logo>
        <Title>App Calibração</Title>
        <LoadingIcon size="large" color="#FFF" />
    </Container>
    )
}

