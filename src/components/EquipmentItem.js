//cSpell:Ignore razao,divisao

import React, { useState } from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'


export default ({ data }) => {


    const navigation = useNavigation()
    const editEquipment = () => {                 //Quando o usuário clicar em um equipamento específico, irá para a página de detalhes deste equipamento.
        navigation.navigate('editEquipment', {             //'Client' é a página do cliente e as informações subsequentes são enviadas para esta página para agilizar um "pré-carregamento"
            _id: data._id,
            marca: data.marca,
            modelo: data.modelo,
            nSerie: data.nSerie,
            tipo: data.tipo,
            capacidade: data.capacidade,
            divisao: data.divisao,
            cargaMin: data.cargaMin,
            casasDecimais: data.casasDecimais,
            unidade: data.unidade,
            local: data.local,
            tag: data.tag,
        })
    }

    return (
        <Area onPress={editEquipment}>
            <InfoArea>
                <EquipmentHeader>
                    {`${data.marca ? data.marca : ''} ${data.modelo ? data.modelo : ''} ${data.tag ? ' - ' : ''}${data.tag ? data.tag : ''}
${data.nSerie ? 'Série: ' : ''}${data.nSerie ? data.nSerie : 'S/ Nº'}`}
                </EquipmentHeader>
                <EquipmentDetails>
                    {`${data.capacidade ? 'Capacidade: ' : ''}${data.capacidade ? data.capacidade : ''} ${data.divisao ? 'x  ' : ''}${data.divisao ? data.divisao : ''} ${data.unidade ? data.unidade : ''}
${data.local ? 'Aplicação: ' : ''}${data.local ? data.local : ''}`}
                </EquipmentDetails>
                <EditButton>
                    <EditButtonText>Detalhar</EditButtonText>
                </EditButton>
            </InfoArea>
        </Area>
    )
}

const Container = styled.View`
`

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

const EquipmentHeader = styled.Text`
font-size: 17px;
font-weight: bold;
`

const EquipmentDetails = styled.Text`
font-size: 14px;
`

const EditButton = styled.View`
width: 80px;
height: 30px;
border: 1px solid #FF6F6F;
border-radius: 10px;
justify-content: center;
align-items: center;
`

const EditButtonText = styled.Text`
font-size: 13px;
color: #FF6F6F;
`