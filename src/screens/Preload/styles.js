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
transform: scale(0.7);
`

export const LoadingIcon = styled.ActivityIndicator`
margin-top: 10px;
`
 //ActivityIndicator é a "bolinha" que dá o efeito que o programa está carregando