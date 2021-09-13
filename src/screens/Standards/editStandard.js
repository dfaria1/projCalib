//cSpell:Ignore usuario,divisao
import React, { useState } from 'react'
import {
    Container,
    InputArea,
    ButtonArea,
    CustomButton,
    CustomButtonText,
    LoadingIcon,
    LabelText,
    HeaderArea,
    HeaderTitle
} from './../Equipments/styles' //Alterar futuramente para um styles do Cliente?
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Alert, SafeAreaView, Text, TextInput } from 'react-native'

import SignInput from '../../components/SignInput'
import Api from '../../components/Api'

export default () => {

    const [carregando, setCarregando] = useState(false) //inicializa o ícone "carregando" com status falso e será ativado quando o usuário clicar no botão
    const navigation = useNavigation() //Para navegar entre as diferentes telas
    const route = useRoute()
    
    const navigateTo = (screenName) => {
        navigation.navigate(screenName)
    }

    const detailStandard = () => {    //Voltar para a lista de padrões
        navigateTo('Standards')
    }

    const [standardInfo, setStandardInfo] = useState({
        _id: route.params._id,
        descricao: route.params.descricao,
        statusPadrao: route.params.statusPadrao,
        tipo: route.params.tipo,
        identificacao: route.params.identificacao,
        classeExatidao: route.params.classeExatidao,
        calibracoes: route.params.calibracoes
    })

    const [campoID, setCampoID] = useState(standardInfo._id)                                     //inicializando a variável campoID com o id do padrão trazido pela rota
    const [campoDescricao, setCampoDescricao] = useState(standardInfo.descricao)                 //inicializando a variável campoDescricao com a descrição do padrão trazido pela rota
    const [campoStatusPadrao, setCampoStatusPadrao] = useState(standardInfo.statusPadrao)        //inicializando a variável campoStatusPadrao com o status (ativo/inativo) do padrão trazido pela rota
    const [campoTipo, setCampoTipo] = useState(standardInfo.tipo)                                //inicializando a variável campoTipo com o tipo do padrão trazido pela rota
    const [campoIdentificacao, setCampoIdentificacao] = useState(standardInfo.identificacao)     //inicializando a variável campoIdentificacao com a identificação (TAG) do padrão trazido pela rota
    const [campoClasseExatidao, setCampoClasseExatidao] = useState(standardInfo.classeExatidao)  //inicializando a variável campoClasseExatidao com a classe de exatidão do padrão trazido pela rota
    const [campoCalibracoes, setCampoCalibracoes] = useState(standardInfo.calibracoes)           //inicializando a variável campoCalibracoes com o ARRAY de calibrações do padrão trazido pela rota


    const checkStandard = async() => {
        setCarregando(true)
        setCampoID(standardInfo._id)
        if(campoID && campoTipo) {                                      //verifica se existe o campoID e o campoTipo
            let json = await Api.editStandard(standardInfo._id, campoDescricao, campoStatusPadrao, campoTipo, campoIdentificacao, campoClasseExatidao)
            if (json.message){
                setCarregando(false)                                    //remove o ícone de "carregando"
                detailStandard()                                        //volta para a lista de padrões
                alert("Padrão alterado com sucesso!")
            } else {
                let erro = json.errors ? json.errors[0].msg: ''         //caso aconteça um ou mais erros, traga apenas o primeiro erro
                alert(`Não foi possível realizar a alteração: ${erro}`)
            }
        } else {
            alert(`Campos necessários: campoID ${campoID}, campoTipo ${campoTipo}, standardInfo._id ${standardInfo._id}`)
        }

    }

    return (
        <Container>
            <HeaderArea>
                <HeaderTitle>
                    Alterar dados do padrão
                </HeaderTitle>
            </HeaderArea>
            <LabelText>Tipo</LabelText>
            <InputArea>
                <SignInput
                    placeholder={standardInfo.tipo}
                    value={campoTipo}
                    onChangeText={text => setCampoTipo(text)}
                    autoFocus={true}
                />
            </InputArea>
            <LabelText>Descrição</LabelText>
            <InputArea>
                <SignInput
                    placeholder={standardInfo.descricao}
                    value={campoDescricao}
                    onChangeText={text => setCampoDescricao(text)}
                />
            </InputArea>
            <LabelText>Identificação</LabelText>
            <InputArea>
            <SignInput
                placeholder={standardInfo.identificacao}
                value={campoIdentificacao}
                onChangeText={text => setCampoIdentificacao(text)}
            />
            </InputArea>
            <LabelText>Classe de Exatidão</LabelText>
            <InputArea>
            <SignInput
                placeholder={standardInfo.classeExatidao}
                value={campoClasseExatidao}
                onChangeText={text => setCampoClasseExatidao(text)}
            />
            </InputArea>
            <LabelText>Status (Ativo/Inativo)</LabelText>
            <InputArea>
            <SignInput
                placeholder={standardInfo.statusPadrao}
                value={campoStatusPadrao}
                onChangeText={text => setCampoStatusPadrao(text)}
            />
            </InputArea>
            <ButtonArea>
                <CustomButton onPress={checkStandard}>
                    <CustomButtonText>Alterar</CustomButtonText>
                    {carregando && <LoadingIcon size="small" color="#FFF" />}
                </CustomButton>
                <CustomButton onPress={detailStandard}>
                    <CustomButtonText>Cancelar</CustomButtonText>
                </CustomButton>
            </ButtonArea>
        </Container>
    )
}