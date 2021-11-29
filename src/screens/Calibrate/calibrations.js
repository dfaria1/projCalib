//cSpell:Ignore Ionicons
import React, { useState, useEffect } from 'react'
import { RefreshControl } from 'react-native'
import { Container, Scroller, HeaderArea, HeaderTitle, CalibrationArea, TopBarArea } from './styles'
import { useNavigation } from '@react-navigation/native'
import Api from '../../components/Api'
import CalibrationItem from '../../components/CalibrationItem'

export default () => {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const [listCalibrations, setListCalibrations] = useState([])

    useEffect(() => {                       //carregando os dados das calibrações quando a tela é aberta
        getCalibrations()

        const willFocusSubscription = navigation.addListener('focus', () => {
            getCalibrations()
        })
        return willFocusSubscription

    }, [])

    const getCalibrations = async () => {
        setLoading(true)
        setListCalibrations([])
        let res = await Api.getCalibrations()
        setListCalibrations(res)
        setLoading(false)
    }

    const onRefresh = () => {
        getCalibrations()
        setRefreshing(false)

    }

    return (
        <Container>
            <TopBarArea>
                <HeaderArea>
                    <HeaderTitle>
                        Lista de Calibrações
                    </HeaderTitle>
                </HeaderArea>
            </TopBarArea>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <CalibrationArea>
                    {listCalibrations.map((item, key) => (
                        <CalibrationItem key={key} data={item} />
                    ))}
                </CalibrationArea>
            </Scroller>
        </Container>
    )
}