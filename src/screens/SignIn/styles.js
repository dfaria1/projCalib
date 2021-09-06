import React from 'react'
import styled from 'styled-components/native'

// background-color: cor do plano de fundo
// flex: um elemento por vez na interface
// justify-content: posição para justificar o conteúdo
// align-items: se tiver itens, posição que irá alinhar

export const Container = styled.SafeAreaView`
    background-color: #FF6F6F;
    flex: 1;
    justify-content: center;
    align-items: center;
`
// background-color: cor do plano de fundo
// flex: um elemento por vez na interface
// justify-content: posição para justificar o conteúdo
// align-items: se tiver itens, posição que irá alinhar

export const Title = styled.Text`
font-size: 18px;
color: #FFF;
`
//fonte-size: tamanho da fonte
//color: cor da fonte

export const Logo = styled.View`
transform: scale(0.3);
`
//transform: scale; reduz a escala do logo, para não ficar muito grande na tela de login
export const InputArea = styled.View`
padding: 15px;
width: 100%;
align-items:center;
`
 //padding afasta um pouco o objeto das bordas

 export const CustomButton = styled.TouchableOpacity`
 height: 60px;
 width: 70%;
 background-color: #A22D2D;
 border-radius: 20px;
 justify-content: center;
 align-items: center;
 `

 export const CustomButtonText = styled.Text`
 font-size: 18px;
 color: #FFF;
 `

 export const LoadingIcon = styled.ActivityIndicator`
 margin-top: 5px;
 `