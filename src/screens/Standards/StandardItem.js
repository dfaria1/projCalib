//cSpell:Ignore razao

import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

export default ({ data }) => {
    const navigation = useNavigation()
    const editStandard = () => {                  //Quando o usuário clicar em um padrão específico, irá para a página com os detalhes deste padrão.
        navigation.navigate('editStandard', {             //'Client' é a página do cliente e as informações subsequentes são enviadas para esta página para agilizar um "pré-carregamento"
            _id: data._id,
            descricao: data.descricao,
            statusPadrao: data.statusPadrao,
            tipo: data.tipo,
            identificacao: data.identificacao,
            classeExatidao: data.classeExatidao,
            calibracoes: data.calibracoes
        })
    }

    return (
        <Area onPress={editStandard}>
            <InfoArea>
                <StandardName>
                {`${data.tipo} - ${data.identificacao}`}
                </StandardName>
                <StandardName>
                    {`${data.classeExatidao ? [`Classe: ${data.classeExatidao}`] : ""} - ${data.descricao}`}
                </StandardName>
                <StandardName>
                    {data.status}
                </StandardName>
                <EditStandardButton>
                    <SeeProfileButtonText>Alterar</SeeProfileButtonText>
                </EditStandardButton>
            </InfoArea>
        </Area>

    )
}

const Area = styled.TouchableOpacity`
background-color: #FFF;
border: 1px solid #FF6F6F;
margin-bottom: 20px;
border-radius: 20px;
padding: 10px;
flex-direction: row;
`

const InfoArea = styled.View`
margin-top: 0px;
margin-left: 10px;
justify-content: space-space-between;
`

const StandardName = styled.Text`
font-size: 17px;
font-weight: bold;
`

const EditStandardButton = styled.View`
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