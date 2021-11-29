import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
background-color: #FFDFDF;
flex: 1;
`

export const Scroller = styled.ScrollView`
flex: 1%;
padding: 5px;
width: 95%;
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

export const UserArea = styled.View`
margin-top:30px;
margin-bottom: 30px;
`

export const LoadingIcon = styled.ActivityIndicator`
margin-top: 50px;
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

export const LabelText = styled.Text`
font-size: 20px;
font-weight:bold;
color: #000;
margin-bottom: 5px;
margin-left: 5%;
`

export const UserInfo = styled.Text`
font-size: 16px;
color: #000;
margin-bottom: 5px;
font-weight: normal;
margin-left: 5%;
margin-bottom: 5%;
`

export const SearchButton = styled.TouchableOpacity`
width: 26px;
height: 26px;
`

export const ButtonArea = styled.View`
flex-direction: row;
width: 100%;
align-items: center;
justify-content: center;
margin-bottom: 30px;
`

export const CustomButton = styled.TouchableOpacity`
height: 50px;
width: 45%;
background-color: #A22D2D;
border-radius: 20px;
align-items: center;
justify-content: center;
margin-left: 2.5%;
margin-right: 2.5%;
margin-top: 10px;
flex-direction: row;
`

export const CustomButtonText = styled.Text`
font-size: 18px;
color: #FFF;
margin-left: 5px;
margin-right: 5px;
`

export const CustomButtonRemove = styled.TouchableOpacity`
height: 50px;
width: 16%;
background-color: #A22D2D;
border-radius: 20px;
align-items: center;
justify-content: center;
margin-left: 2.5%;
margin-right: 2.5%;
margin-top: 10px;
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