import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import Api from '../../components/Api'
import { useNavigation } from '@react-navigation/native'

export default () => {

    const navigation = useNavigation()
    const handleLogout = async() => {
        await Api.logout()
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
    }
    return(
    <SafeAreaView>
        <Text>Tela de perfil</Text>
        <Button title="Sair" onPress={handleLogout}/>
    </SafeAreaView>
    )
}