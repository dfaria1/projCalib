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
width: 100%;
`

export const TopBarArea = styled.View`
flex-direction: row;
align-items: center;
width:100%;
height:60px;
background-color: #FF6F6F;
`

export const HeaderArea = styled.View`
flex-direction: row;
align-items: center;
width:100%;
`

export const HeaderTitle = styled.Text`
width: 100%;
font-size: 20px;
color: #FFF;
font-weight: bold;
margin-left: 20%;
`

export const ClientArea = styled.View`
margin-top: 5px;
margin-bottom: 5px;
`

export const SearchButton = styled.TouchableOpacity`
width: 26px;
height: 26px;
margin-bottom:15px;
`

export const AddButton = styled.TouchableOpacity`
position:absolute;
bottom: 1%;
right: 2%;
width: 60px;
height: 60px;
background-color: #FFDFDF;
border-radius:100px;
justify-content: center;
align-items: center;
border-width: 1px;
border-color: #FF6F6F;
padding-left: 4px;
`