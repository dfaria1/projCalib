//A ideia das stacks é poder manter um "histórico de navegação" para que o usuário possa ir e voltar entre as páginas

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn'

const Stack = createStackNavigator()

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="Preload"  //Tela inicial - usada enquanto o servidor valida o token do usuário
            screenOptions={{
                headerShown: false //não mostrar o cabeçalho
            }}
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    )
}

//Preload: tela inicial - usada enquanto o servidor valida o token do usuário
//SignIn: tela de login - usada para validar o usuário