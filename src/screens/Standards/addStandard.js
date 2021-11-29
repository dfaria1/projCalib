//cSpell:Ignore usuario,divisao,Ionicons
import React, { useState } from 'react'
import {
    Container, InputArea, ButtonArea, CustomButton, CustomButtonText,
    LoadingIcon, LabelText, HeaderArea, HeaderTitle, BackButton, TopBarArea,
    BottomBarArea, Scroller, PageBody
} from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

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

    })

    const [campoID, setCampoID] = useState('')                                                   //inicializando a variável campoID com o id do padrão trazido pela rota
    const [campoDescricao, setCampoDescricao] = useState(standardInfo.descricao)                 //inicializando a variável campoDescricao com a descrição do padrão trazido pela rota
    const [campoStatusPadrao, setCampoStatusPadrao] = useState(standardInfo.statusPadrao)        //inicializando a variável campoStatusPadrao com o status (ativo/inativo) do padrão trazido pela rota
    const [campoTipo, setCampoTipo] = useState(standardInfo.tipo)                                //inicializando a variável campoTipo com o tipo do padrão trazido pela rota
    const [campoIdentificacao, setCampoIdentificacao] = useState(standardInfo.identificacao)     //inicializando a variável campoIdentificacao com a identificação (TAG) do padrão trazido pela rota
    const [campoClasseExatidao, setCampoClasseExatidao] = useState(standardInfo.classeExatidao)  //inicializando a variável campoClasseExatidao com a classe de exatidão do padrão trazido pela rota
    const [campoCalibracoes, setCampoCalibracoes] = useState(standardInfo.calibracoes)           //inicializando a variável campoCalibracoes com o ARRAY de calibrações do padrão trazido pela rota


    const checkStandard = async () => {
        setCarregando(true)
        if (campoDescricao) {                                           //verifica se existe o campoDescricao
            let json = await Api.addStandard(campoDescricao, campoStatusPadrao, campoTipo, campoIdentificacao, campoClasseExatidao)
            if (!json.errors) {
                setCarregando(false)                                    //remove o ícone de "carregando"
                detailStandard()                                        //volta para a lista de padrões
                alert("Padrão alterado com sucesso!")
            } else {
                let erro = json.errors ? json.errors[0].msg : ''         //caso aconteça um ou mais erros, traga apenas o primeiro erro
                alert(`Não foi possível realizar a alteração: ${erro}`)
            }
        } else {
            alert(`Campos necessários: descrição do padrão ${campoDescricao}`)
        }

    }

    return (
        <Container>
            <TopBarArea>
                <HeaderArea>
                    <HeaderTitle>
                        Adicionar novo padrão
                    </HeaderTitle>
                </HeaderArea>
                <BackButton onPress={detailStandard}>
                    <Ionicons name="chevron-back-sharp" size={40} color="#A22D2D" />
                </BackButton>
            </TopBarArea>
            <Scroller>
                <PageBody>
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
                            <CustomButtonText>Adicionar</CustomButtonText>
                            {carregando && <LoadingIcon size="small" color="#FFF" />}
                        </CustomButton>
                        <CustomButton onPress={detailStandard}>
                            <CustomButtonText>Cancelar</CustomButtonText>
                        </CustomButton>
                    </ButtonArea>
                </PageBody>
            </Scroller>
            <BottomBarArea />
        </Container>
    )
}