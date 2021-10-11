import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
background-color: #FFDFDF;
flex: 1;
justify-content: center;
`

export const Scroller = styled.ScrollView`
flex: 1;
padding: 5px;
width: 95%;
`

export const HeaderArea = styled.View`
align-items: center;
`

export const HeaderTitle = styled.Text`
width: 100%;
font-size: 20px;
color: #A22D2D;
font-weight: bold;
margin-top: 20px;
margin-left:5%;
`

export const EquipmentArea = styled.View`
margin-top:30px;
margin-bottom: 30px;
flex:0;
`

export const SearchButton = styled.TouchableOpacity`
width: 26px;
height: 26px;
`

export const InputArea = styled.View`
width: 90%;
height: 30px;
background-color: #FFDFDF;
flex-direction: column;
border-radius: 20px;
margin-left:5%;
margin-bottom: 10px;
`
export const Input = styled.TextInput`
font-size: 20px;
color: #A22D2D;
margin-left: 10px;
padding-bottom:3px;
flex: 1;
`

export const CustomButton = styled.TouchableOpacity`
height: 60px;
width: 20%;
background-color: #A22D2D;
border-radius: 20px;
align-items: center;
justify-content: center;
margin: 7.5%;
margin-top: 10px;
`

export const CustomButtonText = styled.Text`
font-size: 18px;
color: #FFF;
`

export const LabelText = styled.Text`
font-size: 18px;
font-weight:bold;
color: #000;
margin-bottom: 5px;
margin-left: 5%;
`

export const ButtonArea = styled.View`
flex-direction: row;
margin-bottom: -150px;
`

export const LoadingIcon = styled.ActivityIndicator`
margin-top: 5px;
`