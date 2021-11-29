//cSpell:ignore Ionicons,

import React, { useState, useEffect } from 'react'
import { RefreshControl } from 'react-native'
import { Container, Scroller, HeaderArea, HeaderTitle, ClientArea, AddButton, TopBarArea } from './styles'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Api from '../../components/Api'
import StandardItem from './StandardItem'

export default () => {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const [listStandards, setListStandards] = useState([])

    useEffect(() => {                       //carregando os dados dos clients quando o app é aberto
        getStandards()

        const willFocusSubscription = navigation.addListener('focus', () => {
            getStandards()
        })
        return willFocusSubscription

    }, [])

    const getStandards = async () => {
        setLoading(true)
        setListStandards([])
        let res = await Api.getStandards()
        setListStandards(res)
        setLoading(false)
    }

    const onRefresh = () => {
        setListStandards()
        setRefreshing(false)

    }

    const addStandard = () => {
        navigation.navigate('addStandard', {
        })
    }


    return (
        <Container>
            <TopBarArea>
                <HeaderArea>
                    <HeaderTitle>
                        Lista de Padrões
                    </HeaderTitle>
                </HeaderArea>
            </TopBarArea>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <ClientArea>
                    {listStandards.map((item, key) => (
                        <StandardItem key={key} data={item} />
                    ))}
                </ClientArea>
            </Scroller>
            <AddButton>
                <Ionicons name="add-sharp" size={40} color="#FF6F6F" onPress={() => navigation.navigate('addStandard')} />
            </AddButton>
        </Container>
    )
}