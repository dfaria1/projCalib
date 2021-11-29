//cSpell:Ignore razao, Ionicons

import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Alert, Platform } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import Api from '../../components/Api'
import {
    Container, Scroller, PageBody, UserInfoArea,
    UserAvatar, UserInfo, UserInfoName, LoadingIcon,
    ButtonArea, CustomButton, CustomButtonText, CustomButtonRemove,
    BackButton, TopBarArea, HeaderArea, HeaderTitle,
    BottomBarArea
} from './styles'
import EquipmentItem from '../../components/EquipmentItem'
import { EquipmentArea } from '../Equipments/styles'
import { AddButton } from '../Home/styles'

//Se der problema no react-native-swiper: ir em node-modules > react-native-swiper > index
//comentar as duas linhas de module.exports e inserir:
//export default Swiper

export default () => {
    const [carregando, setCarregando] = useState(false) //inicializa o ícone "carregando" com status falso e será ativado quando o usuário clicar no botão
    const navigation = useNavigation()
    const route = useRoute()
    const [loading, setLoading] = useState(false)
    const [clientInfo, setClientInfo] = useState({
        _id: route.params._id,
        avatar: route.params.avatar,
        razaoSocial: route.params.razaoSocial
    })

    useEffect(() => {
        const getClientInfo = async () => {
            setLoading(true)
            let json = await Api.getClient(clientInfo._id)
            if (json.errors) {
                alert(json.errors)
            } else {
                setClientInfo(json)
            }
            setLoading(false)
        }
        getClientInfo()

        const willFocusSubscription = navigation.addListener('focus', () => {
            getClientInfo()
        })
        return willFocusSubscription

    }, [])

    const backHome = () => {                    //Voltar para a tela inicial
        navigation.navigate('Home')
    }

    const addEquipment = () => {
        navigation.navigate('addEquipment', {
            _id: clientInfo._id
        })
    }

    const removeClient = async () => {
        setCarregando(true)
        let json = await Api.removeClient(clientInfo._id)
        if (!json.errors) {
            setCarregando(false)                                    //remove o ícone de "carregando"
            backHome()                                              //volta para a página inicial
            alert("Pessoa removida com sucesso!")
        } else {
            let erro = json.errors ? json.errors[0].msg : ''        //caso aconteça um ou mais erros, traga apenas o primeiro erro
            alert(`Não foi possível remover o cadastro: ${erro}`)
        }
    }


    const editClient = () => {                 //Quando o usuário clicar em um equipamento específico, irá para a página de detalhes deste equipamento.
        navigation.navigate('editClient', {             //'Client' é a página do cliente e as informações subsequentes são enviadas para esta página para agilizar um "pré-carregamento"
            _id: clientInfo._id,
            razaoSocial: clientInfo.razaoSocial,
            cnpj: clientInfo.cnpj,
            logradouro: clientInfo.logradouro,
            numeroLogradouro: clientInfo.numeroLogradouro,
            complemento: clientInfo.complemento,
            bairro: clientInfo.bairro,
            cep: clientInfo.cep,
            cidade: clientInfo.cidade,
            uf: clientInfo.uf,
            email: clientInfo.email,
            telefone: clientInfo.telefone,
            contato: clientInfo.contato,
            fornecedor: clientInfo.fornecedor,
            inativo: clientInfo.inativo,
            avatar: clientInfo.avatar
        })
    }

    const showConfirmDialog = () => {

        if (Platform.OS === 'web') {
            removeClient()
        } else {
            Alert.alert(
                "Confirmar exclusão?",
                "Você tem certeza que deseja excluir este cliente?",
                [
                    // Opção SIM
                    {
                        text: "Sim",
                        onPress: () => {
                            removeClient()
                        },
                    },
                    // Opção NÃO
                    // Não faz nada, apenas fecha a janela de diálogo
                    {
                        text: "Não",
                    }
                ]
            )
        }
    }

    return (
        <Container>
            <TopBarArea>
                <HeaderArea>
                    <HeaderTitle>Detalhes do Cliente</HeaderTitle>
                </HeaderArea>
                <BackButton onPress={backHome}>
                    <Ionicons name="chevron-back-sharp" size={40} color="#A22D2D" />
                </BackButton>
            </TopBarArea>
            <Scroller>
                <PageBody>
                    {loading && <LoadingIcon size="large" color="000" />}
                    <UserInfoArea>
                        <UserAvatar source={{ uri: clientInfo.avatar }}></UserAvatar>
                        <UserInfo>
                            <UserInfoName>{clientInfo.razaoSocial}</UserInfoName>
                            <UserInfoName>{clientInfo.cnpj}</UserInfoName>
                        </UserInfo>
                    </UserInfoArea>
                    <ButtonArea>
                        <CustomButton onPress={editClient}>
                            <CustomButtonText>Alterar Cadastro</CustomButtonText>
                            {carregando && <LoadingIcon size="small" color="#FFF" />}
                        </CustomButton>
                        <CustomButton onPress={showConfirmDialog}>
                            <CustomButtonText>Excluir Cadastro</CustomButtonText>
                        </CustomButton>
                    </ButtonArea>
                    <EquipmentArea>
                        {clientInfo.equipamentos && clientInfo.equipamentos.length > 0
                            ? clientInfo.equipamentos.map(item => {
                                return <EquipmentItem key={item._id} data={item}></EquipmentItem>;
                            })
                            : <UserInfoName>Não há equipamentos cadastrados para mostrar.</UserInfoName>}
                    </EquipmentArea>
                </PageBody>
            </Scroller>
            <BottomBarArea />
            <AddButton>
                <Ionicons name="add-sharp" size={40} color="#FF6F6F" onPress={addEquipment} />
            </AddButton>
        </Container>
    )
}