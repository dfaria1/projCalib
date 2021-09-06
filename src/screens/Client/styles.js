
import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
background-color: #FFF;
flex: 1;
`

export const Scroller = styled.ScrollView`
flex: 1;
`

export const PageBody = styled.View`
background-color: #FFF;
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