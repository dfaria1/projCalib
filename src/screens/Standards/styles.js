import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
background-color: #FFDFDF;
flex: 1;
justify-content: center;
align-items: center;
`

export const Scroller = styled.ScrollView`
flex: 1%;
padding: 5px;
width: 95%;
`

export const HeaderArea = styled.View`
flex-direction: row;
align-items: center;
`

export const HeaderTitle = styled.Text`
width: 85%;
font-size: 20px;
color: #FFF;
font-weight: bold;
margin-top: 20px;
`

export const ClientArea = styled.View`
margin-top:30px;
margin-bottom: 30px;
`

export const SearchButton = styled.TouchableOpacity`
width: 26px;
height: 26px;
`