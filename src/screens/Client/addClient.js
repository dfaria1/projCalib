//cSpell:Ignore usuario,divisao,Ionicons
import React, { useState } from 'react'
import {
    Container, InputArea, ButtonArea, CustomButton, CustomButtonText, LoadingIcon,
    LabelText, HeaderArea, HeaderTitle, Scroller, PageBody, TopBarArea, BackButton, BottomBarArea
} from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import SignInput from '../../components/SignInput'
import Api from '../../components/Api'
import { Ionicons } from '@expo/vector-icons'

export default () => {

    const [carregando, setCarregando] = useState(false) //inicializa o ícone "carregando" com status falso e será ativado quando o usuário clicar no botão
    const navigation = useNavigation() //Para navegar entre as diferentes telas
    const route = useRoute()
    const [clientInfo, setClientInfo] = useState({})

    const backHome = () => {
        navigation.navigate('Home', {
        })
    }

    const detailClient = (id) => {                    //Quando o usuário clicar em um cliente específico, irá para a página com os detalhes deste cliente.
        navigation.navigate('Client', {             //'Client' é a página do cliente e as informações subsequentes são enviadas para esta página para agilizar um "pré-carregamento"
            _id: id,
        })
    }

    const [campoID, setCampoID] = useState('')                                                         //inicializando a variável campoID com o id do equipamento trazido pela rota
    const [campoRazaoSocial, setCampoRazaoSocial] = useState(clientInfo.razaoSocial)                   //inicializando a variável campoRazaoSocial com a razão social trazida pela rota
    const [campoCnpj, setCampoCnpj] = useState(clientInfo.cnpj)                                        //inicializando a variável campoCnpj com o CNPJ trazido pela rota
    const [campoLogradouro, setCampoLogradouro] = useState(clientInfo.logradouro)                      //inicializando a variável campoLogradouro com o logradouro trazido pela rota
    const [campoNumeroLogradouro, setCampoNumeroLogradouro] = useState(clientInfo.numeroLogradouro)    //inicializando a variável campoNumeroLogradouro com o número do logradouro trazido pela rota
    const [campoComplemento, setCampoComplemento] = useState(clientInfo.complemento)                   //inicializando a variável campoComplemento com o complemento trazido pela rota
    const [campoBairro, setCampoBairro] = useState(clientInfo.bairro)                                  //inicializando a variável campoBairro com o bairro trazido pela rota
    const [campoCep, setCampoCep] = useState(clientInfo.cep)                                           //inicializando a variável campoCep com o CEP trazido pela rota
    const [campoCidade, setCampoCidade] = useState(clientInfo.cidade)                                  //inicializando a variável campoCidade com a cidade trazida pela rota
    const [campoUf, setCampoUf] = useState(clientInfo.uf)                                              //inicializando a variável campoUf com a UF trazida pela rota
    const [campoEmail, setCampoEmail] = useState(clientInfo.email)                                     //inicializando a variável campoEmail com o email trazido pela rota
    const [campoTelefone, setCampoTelefone] = useState(clientInfo.telefone)                            //inicializando a variável campoTelefone com o telefone trazido pela rota
    const [campoContato, setCampoContato] = useState(clientInfo.contato)                               //inicializando a variável campoContato com o contato trazido pela rota
    const [campoFornecedor, setCampoFornecedor] = useState(clientInfo.fornecedor)                      //inicializando a variável campoFornecedor com o Fornecedor? trazido pela rota
    const [campoInativo, setCampoInativo] = useState(clientInfo.inativo)                               //inicializando a variável campoInativo com o Inativo? trazido pela rota
    const [campoAvatar, setCampoAvatar] = useState(clientInfo.avatar)                                  //inicializando a variável campoAvatar com o avatar trazido pela rota

    const validaCliente = async () => {
        setCarregando(true)
        if (campoRazaoSocial && campoCnpj) {                                //verifica se existe o campoRazaoSocial e campoCnpj
            let json = await Api.addClient(campoRazaoSocial, campoCnpj, campoLogradouro, campoNumeroLogradouro, campoComplemento, campoBairro, campoCep, campoCidade, campoUf, campoEmail, campoTelefone, campoContato, campoFornecedor, campoInativo)
            if (!json.errors) {
                setCarregando(false)                                        //remove o ícone de "carregando"
                alert("Cliente cadastrado com sucesso!")
                detailClient(json._id)
            } else {
                let erro = json.errors ? json.errors[0].msg : ''            //caso aconteça um ou mais erros, traga apenas o primeiro erro
                alert(`Não foi possível realizar o cadastro: ${erro}`)
            }
        } else {
            alert(`Campos necessários: Razão Social e CNPJ`)
        }
    }

    return (
        <Container>
            <TopBarArea>
                <HeaderArea>
                    <HeaderTitle>
                        Novo Cliente
                    </HeaderTitle>
                </HeaderArea>
                <BackButton onPress={backHome}>
                    <Ionicons name="chevron-back-sharp" size={40} color="#A22D2D" />
                </BackButton>
            </TopBarArea>
            <Scroller>
                <PageBody>
                    <LabelText>Razão Social</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={clientInfo.razaoSocial}
                            value={campoRazaoSocial}
                            onChangeText={text => setCampoRazaoSocial(text)}
                            autoFocus={true}
                        />
                    </InputArea>
                    <LabelText>CNPJ</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={clientInfo.cnpj}
                            value={campoCnpj}
                            onChangeText={text => setCampoCnpj(text)}
                        />
                    </InputArea>
                    <LabelText>Logradouro</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={clientInfo.logradouro}
                            value={campoLogradouro}
                            onChangeText={text => setCampoLogradouro(text)}
                        />
                    </InputArea>
                    <LabelText>Número</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={clientInfo.numeroLogradouro}
                            value={campoNumeroLogradouro}
                            onChangeText={text => setCampoNumeroLogradouro(text)}
                        />
                    </InputArea>
                    <LabelText>Complemento</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={clientInfo.complemento}
                            value={campoComplemento}
                            onChangeText={text => setCampoComplemento(text)}
                        />
                    </InputArea>
                    <LabelText>Bairro</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={clientInfo.bairro}
                            value={campoBairro}
                            onChangeText={text => setCampoBairro(text)}
                        />
                    </InputArea>
                    <LabelText>CEP</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={clientInfo.cep}
                            value={campoCep}
                            onChangeText={text => setCampoCep(text)}
                        />
                    </InputArea>
                    <LabelText>Cidade</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={clientInfo.cidade}
                            value={campoCidade}
                            onChangeText={text => setCampoCidade(text)}
                        />
                    </InputArea>
                    <LabelText>UF</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={clientInfo.uf}
                            value={campoUf}
                            onChangeText={text => setCampoUf(text)}
                        />
                    </InputArea>
                    <LabelText>Email</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={clientInfo.email}
                            value={campoEmail}
                            onChangeText={text => setCampoEmail(text)}
                        />
                    </InputArea>
                    <LabelText>Telefone</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={clientInfo.telefone}
                            value={campoTelefone}
                            onChangeText={text => setCampoTelefone(text)}
                        />
                    </InputArea>
                    <LabelText>Contato</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={clientInfo.contato}
                            value={campoContato}
                            onChangeText={text => setCampoContato(text)}
                        />
                    </InputArea>
                    <LabelText>Fornecedor</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={clientInfo.fornecedor}
                            value={campoFornecedor}
                            onChangeText={text => setCampoFornecedor(text)}
                        />
                    </InputArea>
                    <LabelText>Avatar</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={clientInfo.avatar}
                            value={campoAvatar}
                            onChangeText={text => setCampoAvatar(text)}
                        />
                    </InputArea>
                    <ButtonArea>
                        <CustomButton onPress={validaCliente}>
                            <CustomButtonText>Inserir</CustomButtonText>
                            {carregando && <LoadingIcon size="small" color="#FFF" />}
                        </CustomButton>
                        <CustomButton onPress={backHome}>
                            <CustomButtonText>Cancelar</CustomButtonText>
                        </CustomButton>
                    </ButtonArea>
                </PageBody>
            </Scroller>
            <BottomBarArea />
        </Container>
    )
}