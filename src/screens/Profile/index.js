import React, { useState, useEffect } from 'react'
import Api from '../../components/Api'
import { useNavigation } from '@react-navigation/native'
import {
    Container, TopBarArea, HeaderArea, HeaderTitle, UserArea, LabelText, UserInfo,
    ButtonArea, CustomButton, CustomButtonText
} from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default () => {

    const [userInfo, setUserInfo] = useState('')

    const navigation = useNavigation()
    const handleLogout = async () => {
        await Api.logout()
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        })
    }

    useEffect(() => {
        const getUserInfo = async () => {
            let json = await Api.getUser()
            if (json.errors) {
                alert(json.errors)
            } else {
                setUserInfo(json.usuario)
            }
        }
        getUserInfo()
    }, [])

    const date = new Date(userInfo.criado_em)

    return (
        <Container>
            <TopBarArea>
                <HeaderArea>
                    <HeaderTitle>
                        Perfil
                    </HeaderTitle>
                </HeaderArea>
            </TopBarArea>
            <UserArea>
                <LabelText>Usuário atual</LabelText>
                <UserInfo>{userInfo.nome}</UserInfo>
                <LabelText>E-mail</LabelText>
                <UserInfo>{userInfo.email}</UserInfo>
                <LabelText>Tipo</LabelText>
                <UserInfo>{userInfo.tipo}</UserInfo>
                <LabelText>Data de criação</LabelText>
                <UserInfo>{(date.getDate() + 1) < 10 ? `0${(date.getDate() + 1)}` : (date.getDate() + 1)}/{(date.getMonth() + 1) < 10 ? `0${(date.getMonth() + 1)}` : (date.getMonth() + 1)}/{date.getFullYear()}</UserInfo>
            </UserArea>
            <ButtonArea>
                <CustomButton onPress={handleLogout}>
                    <CustomButtonText>
                        <MaterialCommunityIcons name="account-off-outline" size={20} color="white" />
                    </CustomButtonText>
                    <CustomButtonText>
                        Sair
                    </CustomButtonText>
                </CustomButton>
            </ButtonArea>
        </Container>
    )
}