//cSpell:Ignore razao

import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

export default ({ data }) => {
    const navigation = useNavigation()
    const detailClient = () => {                    //Quando o usuário clicar em um cliente específico, irá para a página com os detalhes deste cliente.
        navigation.navigate('Client', {             //'Client' é a página do cliente e as informações subsequentes são enviadas para esta página para agilizar um "pré-carregamento"
            _id: data._id,
            avatar: data.avatar,
            razaoSocial: data.razaoSocial
        })
    }

    return (!data.inativo &&
        <Area onPress={detailClient}>
        <Avatar source={{uri:data.avatar}} />
            <InfoArea>
                <UserName>
                    {data.razaoSocial}
                </UserName>
                <UserDetails>
                    {`${data.logradouro}, ${data.numeroLogradouro}`}
                </UserDetails>
                <UserDetails>
                    {data.cidade}
                </UserDetails>
                <SeeProfileButton>
                    <SeeProfileButtonText>Detalhes</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>

    )
}

const Area = styled.TouchableOpacity`
background-color: #FFF;
border: 1px solid #FF6F6F;
margin-bottom: 5px;
border-radius: 20px;
padding: 10px;
flex-direction: row;
`

const Avatar = styled.Image`
width: 95px;
height: 95px;
border-radius: 20px;
`

const InfoArea = styled.View`
margin-top: 0px;
margin-left: 10px;
justify-content: space-between;
`

const UserName = styled.Text`
font-size: 17px;
font-weight: bold;
`

const UserDetails = styled.Text`
font-size: 14px;
`

const SeeProfileButton = styled.View`
width: 80px;
height: 30px;
border: 1px solid #FF6F6F;
border-radius: 10px;
justify-content: center;
align-items: center;
`

const SeeProfileButtonText = styled.Text`
font-size: 13px;
color: #FF6F6F;
`