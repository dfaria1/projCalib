//cSpell:Ignore usuario

import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'

const TabArea = styled.View`
height: 60px;
background-color:#FF6F6F;
flex-direction: row;
`

const TabItem = styled.TouchableOpacity`
flex: 1;
align-items: center;        //centraliza itens
padding-top:18px;
justify-content: center;    //centraliza textos
`
const TabItemCenter = styled.TouchableOpacity`
width: 70px;
height: 70px;
justify-content: center;
align-items: center;
margin-top: -25px;
background-color: #FFF;
border-radius:35px;
border: 3px solid #FF6F6F;
`

export default ({state, navigation}) => {
    const [usuario, setUsuario] = useState([])

    const verificaUsuario = async() => {        //Como faz a verificação externa, usamos função assíncrona
        let dados = await AsyncStorage.getItem('usuario')
        setUsuario(JSON.parse(dados))
    }

    useEffect(() => {                           //Verifica na primeira vez os dados do usuário
        verificaUsuario()
    },[])

    const navigateTo = (screenName) => {
        navigation.navigate(screenName)
    }


    return (
        <TabArea>
            <TabItem onPress={() => navigateTo('Home') }>
                <FontAwesome5 style={{opacity: state.index === 0 ? 1 : 0.5}} name="building" size={24} color="#FFF"/>
            </TabItem>
            <TabItem onPress={() => navigateTo('Equipments') }>
                <FontAwesome style={{opacity: state.index === 1 ? 1 : 0.5}} name="balance-scale" size={24} color="#FFF"/>
            </TabItem>
            <TabItemCenter onPress={() => navigateTo('Calibrate') }>
                <FontAwesome5 style={{opacity: state.index === 2 ? 1 : 0.5}} name="clipboard" size={24} color="#FF6F6F"/>
            </TabItemCenter>
            <TabItem onPress={() => navigateTo('Standards') }>
                <MaterialCommunityIcons style={{opacity: state.index === 3 ? 1 : 0.5}} name="weight-kilogram" size={32} color="#FFF"/>
            </TabItem>
            <TabItem onPress={() => navigateTo('Profile') }>
                <AntDesign style={{opacity: state.index === 4 ? 1 : 0.5}} name="user" size={24} color="#FFF"/>
            </TabItem>
        </TabArea>
    )
}