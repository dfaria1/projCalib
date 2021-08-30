//cSpell:Ignore Padroes
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Clients from '../screens/Clients'
import Equipments from '../screens/Equipments'
import Calibrate from '../screens/Calibrate'
import Standards from '../screens/Standards'
import Profile from '../screens/Profile'
import CustomTabBar from '../components/CustomTabBar'

const Tab = createBottomTabNavigator()

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Clients" component={Clients} />
        <Tab.Screen name="Equipments" component={Equipments} />
        <Tab.Screen name="Calibrate" component={Calibrate} />
        <Tab.Screen name="Standards" component={Standards} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
)