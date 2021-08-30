//Este componente foi criado na pasta 'components' pois será utilizado em mais de uma tela.

import React from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons' //Os ícones podem ser visualizados em https://icons.expo.fyi

const InputArea = styled.View`
width: 100%;
height: 60px;
background-color: #FFD3D3;
flex-direction: row;
align-items: center;
border-radius: 20px;
padding-left: 15px;
margin-bottom: 10px;
`

const Input = styled.TextInput`
font-size: 20px;
color: #A22D2D;
margin-left: 10px;
padding-bottom:3px;
flex: 1;
`
//Guia para o "flex" usado acima: origamid.com/projetos/flexbox-guia-completo

export default ( props ) => { //Este export default recebe propriedade (props)
    return(
    <InputArea>
        <AntDesign name={props.icon} size={30} color="#A22D2D" />
        <Input
            autoCompleteType={props.autoComplete}   //traz os últimos registros do dispositivo (por exemplo e-mail, nome, senha, etc)
            placeholder={props.placeholder}         //texto inicial
            value={props.value}                     //valor que será mostrado
            autoFocus={props.autoFocus || false}    //se terá foco automático em um determinado campo. Apenas funciona no campo onde o autoFocus for true, enquanto nos demais automaticamente receberão o valor "false"
            onChangeText={props.onChangeText}       //o que irá ser feito a cada mudança no texto
            secureTextEntry={props.password}        //exibe os caracteres protegidos para ocultar a senha
        />
    </InputArea>
    )
    
}