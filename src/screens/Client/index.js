//cSpell:Ignore razao

import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import Swiper from 'react-native-swiper'
import Api from '../../components/Api'
import {
    Container, Scroller, PageBody, UserInfoArea,
    UserAvatar, UserInfo, UserInfoName, LoadingIcon
} from './styles'
import EquipmentItem from '../../components/EquipmentItem'
import { EquipmentArea } from '../Equipments/styles'

//Se der problema no react-native-swiper: ir em node-modules > react-native-swiper > index
//comentar as duas linhas de module.exports e inserir:
//export default Swiper

export default () => {
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
    }, [])

    return (
        <Container>
            <Scroller>
                <PageBody>
                    {loading && <LoadingIcon size="large" color="000" />}
                    <UserInfoArea>
                        <UserAvatar source={{ uri: clientInfo.avatar }}></UserAvatar>
                        <UserInfo>
                            <UserInfoName>{clientInfo.razaoSocial}</UserInfoName>
                            {clientInfo.cnpj}
                        </UserInfo>
                    </UserInfoArea>
                    <EquipmentArea>
                        {clientInfo.equipamentos && clientInfo.equipamentos.length > 0
                            ? clientInfo.equipamentos.map(item => {
                                return <EquipmentItem key={item._id} data={item}></EquipmentItem>;
                            })
                            : "Não há equipamentos cadastrados para mostrar."}
                    </EquipmentArea>
                </PageBody>
            </Scroller>
        </Container>
    )
}