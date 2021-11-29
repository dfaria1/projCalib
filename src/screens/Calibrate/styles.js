
import React from 'react'
import styled from 'styled-components/native'

export const Picker = styled.Picker`
width: 80%;
align-self:center;
`
export const Container = styled.SafeAreaView`
background-color: #FFDFDF;
flex: 1;
justify-content: center;
`

export const Scroller = styled.ScrollView`
flex: 1;
padding: 5px;
width: 100%;
margin-bottom:0px;
`

export const TopBarArea = styled.View`
flex-direction: row;
align-items: center;
width:100%;
height:60px;
background-color: #FF6F6F;
`

export const BottomBarArea = styled.View`
flex-direction: row;
align-items: center;
width:100%;
height:30px;
background-color: #FF6F6F;
margin-top: 10px;
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

export const EquipmentHeader = styled.View`
flex-direction: row;
align-items: center;
width:100%;
margin-top:5px;
`

export const EquipmentDetail = styled.Text`
width: 100%;
font-size: 16px;
color: #000;
font-weight: bold;
margin-left: 5%;
`

export const PageBody = styled.View`
background-color: #FFDFDF;
padding: 5px;
border-radius: 30px;
margin-bottom: 20px;
`

export const BoxArea = styled.View`
border-color: #A22D2D;
border-width: 2px;
border-radius: 30px;
margin-bottom: 5px;
`

export const UserInfoArea = styled.View`
flex-direction: row;
margin-top: 10px;
`

export const UserAvatar = styled.Image`
width:130px;
height: 130px;
border-radius: 20px;
margin-left: 30px;
margin-right: 20px;
border-color: #FFF;
border-width: 4px;
`

export const UserInfo = styled.View`
flex: 1;
`

export const UserInfoName = styled.Text`
color: #000;
font-size: 18px;
font-weight: bold;
margin-bottom: 10px;
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

export const CustomButtonText = styled.Text`
font-size: 18px;
color: #FFF;
`

export const CalibrationArea = styled.View`
margin-top: 5px;
margin-bottom: 5px;
`