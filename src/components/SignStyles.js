import React from 'react'
import styled from 'styled-components/native'


//Como este botão não deve seguir os demais componentes da tela, ele deve estar "independente". Por isso, colocamos o z-index:2 (uma camada acima) e a posição absoluta.
export const BackButton = styled.TouchableOpacity`
position: absolute;
left: 15px;
top: 15px;
z-index:2;
`