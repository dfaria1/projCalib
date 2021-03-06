//cSpell:Ignore Ionicons
import React, { useState, useEffect } from 'react'
import { RefreshControl } from 'react-native'
import { Container, Scroller, HeaderArea, HeaderTitle, ClientArea, SearchButton, AddButton, TopBarArea } from './styles'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Api from '../../components/Api'
import ClientItem from '../../components/ClientItem'

export default () => {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const [listClients, setListClients] = useState([])

    useEffect(() => {                       //carregando os dados dos clients quando o app é aberto
        getClients()
        const willFocusSubscription = navigation.addListener('focus', () => {
            getClients()
        })
        return willFocusSubscription

    }, [])

    useEffect(() => {
        getClients()
    }, [navigation.addListener])

    const getClients = async () => {
        setLoading(true)
        setListClients([])
        let res = await Api.getClients()
        setListClients(res)
        setLoading(false)
    }

    const onRefresh = () => {
        getClients()
        setRefreshing(false)

    }

    return (
        <Container>
            <TopBarArea>
                <HeaderArea>
                    <HeaderTitle>
                        Lista de Clientes
                    </HeaderTitle>
                </HeaderArea>
            </TopBarArea>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <ClientArea>
                    {listClients.map((item, key) => (
                        <ClientItem key={key} data={item} />
                    ))}
                </ClientArea>
            </Scroller>
            <AddButton>
                <Ionicons name="add-sharp" size={40} color="#FF6F6F" onPress={() => navigation.navigate('addClient')} />
            </AddButton>
        </Container>
    )
}