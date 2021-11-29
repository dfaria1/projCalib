//A ideia das stacks é poder manter um "histórico de navegação" para que o usuário possa ir e voltar entre as páginas

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn'
import MainTab from '../stack/MainTab'
import Client from '../screens/Client'
import Equipments from '../screens/Equipments'
import editEquipment from '../screens/Equipments/editEquipment'
import addEquipment from '../screens/Equipments/addEquipment'
import editClient from '../screens/Client/editClient'
import addClient from '../screens/Client/addClient'
import editStandard from '../screens/Standards/editStandard'
import addStandard from '../screens/Standards/addStandard'
import Calibrate from '../screens/Calibrate'
import calibrations from '../screens/Calibrate/calibrations'
import calibrationDetails from '../screens/Calibrate/calibrationDetails'

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
            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen name="Client" component={Client} />
            <Stack.Screen name="Equipamentos" component={Equipments} />
            <Stack.Screen name="editEquipment" component={editEquipment} />
            <Stack.Screen name="addEquipment" component={addEquipment} />
            <Stack.Screen name="editClient" component={editClient} />
            <Stack.Screen name="addClient" component={addClient} />
            <Stack.Screen name="editStandard" component={editStandard} />
            <Stack.Screen name="addStandard" component={addStandard} />
            <Stack.Screen name="Calibrate" component={Calibrate} />
            <Stack.Screen name="Calibrations" component={calibrations} />
            <Stack.Screen name="calibrationDetails" component={calibrationDetails} />
        </Stack.Navigator>
    )
}

//Preload: tela inicial - usada enquanto o servidor valida o token do usuário
//SignIn: tela de login - usada para validar o usuário