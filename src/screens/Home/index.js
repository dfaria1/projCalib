import React, { useState, useEffect } from 'react'
import { RefreshControl } from 'react-native'
import { Container, Scroller, HeaderArea, HeaderTitle, ClientArea, SearchButton } from './styles'
import { AntDesign } from '@expo/vector-icons'
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
    }, [])

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
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <HeaderArea>
                    <HeaderTitle>

                    </HeaderTitle>
                    <SearchButton onPress={() => navigation.navigate('Search')}>
                        <AntDesign name="search1" size={26} color="#FFF" />
                    </SearchButton>
                </HeaderArea>
                <ClientArea>
                    {listClients.map((item, key) => (
                        <ClientItem key={key} data={item} />
                    ))}
                </ClientArea>
            </Scroller>
        </Container>
    )
}