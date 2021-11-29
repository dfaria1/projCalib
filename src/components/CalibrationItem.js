//cSpell:Ignore razao

import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

export default ({ data }) => {
    const navigation = useNavigation()
    const detailCalibration = () => {                           //Quando o usuário clicar em uma calibração específica, irá para a página com os detalhes desta calibração.
        navigation.navigate('calibrationDetails', {             //'CalibrationDetails' é a página da calibração e as informações subsequentes são enviadas para esta página para agilizar um "pré-carregamento"
            _id: data._id,
        })
    }

    const date = new Date(data.createdAt)

    return (!data.inativo &&
        <Area onPress={detailCalibration}>
            <InfoArea>
                <CertificateNumber>
                    {`Certificado ${data.nCertificado}`}
                </CertificateNumber>
                <CertificateDetails>
                    Data da Calibração: {(date.getDate()+1) < 10 ? `0${(date.getDate()+1)}` : (date.getDate()+1)}/{(date.getMonth()+1) < 10 ? `0${(date.getMonth()+1)}` : (date.getMonth()+1)}/{date.getFullYear()}
                </CertificateDetails>
                <CertificateDetails>
                    {`Pontos Calibrados: ${Object.keys(data.linearidade[0]).length}`}
                </CertificateDetails>
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

const InfoArea = styled.View`
margin-top: 0px;
margin-left: 10px;
justify-content: space-between;
`

const CertificateNumber = styled.Text`
font-size: 17px;
font-weight: bold;
`

const CertificateDetails = styled.Text`
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