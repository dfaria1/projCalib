import React, { useState, useEffect } from 'react'
import { RefreshControl } from 'react-native'
import { Container, Scroller, HeaderArea, HeaderTitle, ClientArea, SearchButton } from './styles'
import { AntDesign } from '@expo/vector-icons'
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
                    {listStandards.map((item, key) => (
                        <StandardItem key={key} data={item} />
                    ))}
                </ClientArea>
            </Scroller>
        </Container>
    )
}