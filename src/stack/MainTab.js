//cSpell:Ignore Padroes
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Equipments from '../screens/Equipments'
import Calibrate from '../screens/Calibrate'
import Standards from '../screens/Standards'
import Profile from '../screens/Profile'
import Search from '../screens/Search'
import CustomTabBar from '../components/CustomTabBar'
import calibrations from '../screens/Calibrate/calibrations'

const Tab = createBottomTabNavigator()

export default () => (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
            headerShown: false //não mostrar o cabeçalho
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Equipments" component={Equipments} />
        <Tab.Screen name="calibrations" component={calibrations} />
        <Tab.Screen name="Standards" component={Standards} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
)