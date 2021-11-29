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
width: 100%;
margin-top:0px;
`
export const PageBody = styled.View`
background-color: #FFDFDF;
padding: 5px;
border-radius: 30px;
margin-bottom: 20px;
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

export const EquipmentArea = styled.View`
margin-top:20px;
margin-bottom: 10px;
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
width: 45%;
background-color: #A22D2D;
border-radius: 20px;
align-items: center;
justify-content: center;
margin: 2.5%;
margin-top: 10px;
`

export const CustomButtonAdd = styled.TouchableOpacity`
height: 60px;
width: 45%;
background-color: #A22D2D;
border-radius: 20px;
align-items: center;
justify-content: center;
margin: 2.5%;
margin-top: 10px;
`

export const CustomButtonText = styled.Text`
font-size: 18px;
color: #FFF;
`

export const BackButton = styled.TouchableOpacity`
position:absolute;
top: 1%;
left: 1%;
width: 60px;
height: 60px;
border-radius:100px;
justify-content: center;
align-items: center;
z-index: 1;
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
`

export const LoadingIcon = styled.ActivityIndicator`
margin-top: 5px;
`