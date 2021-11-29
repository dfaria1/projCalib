//cSpell:Ignore usuario,divisao,Ionicons
import React, { useState } from 'react'
import {
    Container, InputArea, ButtonArea, CustomButton, CustomButtonAdd, CustomButtonText, LoadingIcon,
    LabelText, HeaderArea, HeaderTitle, Scroller, PageBody, BackButton
} from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import SignInput from '../../components/SignInput'
import Api from '../../components/Api'
import { TopBarArea } from '../Client/styles'

export default () => {

    const [carregando, setCarregando] = useState(false) //inicializa o ícone "carregando" com status falso e será ativado quando o usuário clicar no botão
    const navigation = useNavigation() //Para navegar entre as diferentes telas
    const route = useRoute()

    /*
    const [equipmentInfo, setEquipmentInfo] = useState({
        _id: route.params._id,
        marca: route.params.marca,
        modelo: route.params.modelo,
        nSerie: route.params.nSerie,
        tipo: route.params.tipo,
        capacidade: route.params.capacidade,
        divisao: route.params.divisao,
        cargaMin: route.params.cargaMin,
        casasDecimais: route.params.casasDecimais,
        unidade: route.params.unidade,
        local: route.params.local,
        tag: route.params.tag
    })
*/

    const [equipmentInfo, setEquipmentInfo] = useState({})

    const detailClient = () => {                    //Quando o usuário clicar em um cliente específico, irá para a página com os detalhes deste cliente.
        navigation.navigate('Client', {             //'Client' é a página do cliente e as informações subsequentes são enviadas para esta página para agilizar um "pré-carregamento"
            _id: campoIDCliente._id,
        })
    }

    const [campoIDCliente, setCampoIDCliente] = useState({ _id: route.params._id })                      //inicializando a variável campoID com o id do cliente trazido pela rota

    const [campoNSerie, setCampoNSerie] = useState(equipmentInfo.nSerie)                        //inicializando a variável campoNSerie com o número de série do equipamento trazido pela rota
    const [campoMarca, setCampoMarca] = useState(equipmentInfo.marca)                           //inicializando a variável campoMarca com a marca do equipamento trazido pela rota
    const [campoModelo, setCampoModelo] = useState(equipmentInfo.modelo)                        //inicializando a variável campoModelo com o modelo do equipamento trazido pela rota
    const [campoTipo, setCampoTipo] = useState(equipmentInfo.tipo)                              //inicializando a variável campoTipo com o tipo do equipamento trazido pela rota
    const [campoCapacidade, setCampoCapacidade] = useState(equipmentInfo.capacidade)            //inicializando a variável campoCapacidade com a capacidade do equipamento trazido pela rota
    const [campoDivisao, setCampoDivisao] = useState(equipmentInfo.divisao)                     //inicializando a variável campoDivisao com a divisão do equipamento trazido pela rota
    const [campoCargaMin, setCampoCargaMin] = useState(equipmentInfo.cargaMin)                  //inicializando a variável campoCargaMin com a carga mínima do equipamento trazido pela rota
    const [campoCasasDecimais, setCampoCasasDecimais] = useState(equipmentInfo.casasDecimais)   //inicializando a variável campoCasasDecimais com o número de casas decimais do equipamento trazido pela rota
    const [campoUnidade, setCampoUnidade] = useState(equipmentInfo.unidade)                     //inicializando a variável campoUnidade com a unidade de medida do equipamento trazido pela rota
    const [campoTag, setCampoTag] = useState(equipmentInfo.tag)                                 //inicializando a variável campoTag com o tag/patrimônio do equipamento trazido pela rota
    const [campoLocal, setCampoLocal] = useState(equipmentInfo.local)                           //inicializando a variável campoLocal com local/aplicação do equipamento trazido pela rota

    const validaEquipamento = async () => {
        setCarregando(true)
        if (campoCapacidade) {                                //verifica se existe o campoID e o campoCapacidade
            let json = await Api.addEquipment(campoIDCliente._id, campoNSerie, campoMarca, campoModelo, campoTipo, campoCapacidade, campoDivisao, campoCargaMin, campoCasasDecimais, campoUnidade, campoTag, campoLocal)
            if (!json.erros) {
                setCarregando(false)                                    //remove o ícone de "carregando"
                detailClient()                                          //volta para a página daquele cliente
                alert("Equipamento cadastrado com sucesso!")
            } else {
                let erro = json.errors ? json.errors[0].msg : ''         //caso aconteça um ou mais erros, traga apenas o primeiro erro
                alert(`Não foi possível realizar o cadastro: ${erro}`)
            }
        } else {
            //alert ('Preencha pelo menos a capacidade máxima!')
            alert(`Campos necessários: Capacidade`)
        }

    }

    return (
        <Container>
            <TopBarArea>
                <HeaderArea>
                    <HeaderTitle>
                        Cadastrar Equipamento
                    </HeaderTitle>
                </HeaderArea>
                <BackButton onPress={detailClient}>
                    <Ionicons name="chevron-back-sharp" size={40} color="#A22D2D" />
                </BackButton>
            </TopBarArea>
            <Scroller>
                <PageBody>
                    <LabelText>Marca</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={equipmentInfo.marca}
                            value={campoMarca}
                            onChangeText={text => setCampoMarca(text)}
                            autoFocus={true}
                        />
                    </InputArea>
                    <LabelText>Modelo</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={equipmentInfo.modelo}
                            value={campoModelo}
                            onChangeText={text => setCampoModelo(text)}
                        />
                    </InputArea>
                    <LabelText>Série</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={equipmentInfo.nSerie}
                            value={campoNSerie}
                            onChangeText={text => setCampoNSerie(text)}
                        />
                    </InputArea>
                    <LabelText>Tipo</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={equipmentInfo.tipo}
                            value={campoTipo}
                            onChangeText={text => setCampoTipo(text)}
                        />
                    </InputArea>
                    <LabelText>Capacidade</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={equipmentInfo.capacidade}
                            value={campoCapacidade}
                            onChangeText={text => setCampoCapacidade(text)}
                        />
                    </InputArea>
                    <LabelText>Divisão</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={equipmentInfo.divisao}
                            value={campoDivisao}
                            onChangeText={text => setCampoDivisao(text)}
                        />
                    </InputArea>
                    <LabelText>Carga Mínima</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={equipmentInfo.cargaMin}
                            value={campoCargaMin}
                            onChangeText={text => setCampoCargaMin(text)}
                        />
                    </InputArea>
                    <LabelText>Casas Decimais</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={equipmentInfo.casasDecimais}
                            value={campoCasasDecimais}
                            onChangeText={text => setCampoCasasDecimais(text)}
                        />
                    </InputArea>
                    <LabelText>Unidade</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={equipmentInfo.unidade}
                            value={campoUnidade}
                            onChangeText={text => setCampoUnidade(text)}
                        />
                    </InputArea>
                    <LabelText>Identificação / Patrimônio</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={equipmentInfo.tag}
                            value={campoTag}
                            onChangeText={text => setCampoTag(text)}
                        />
                    </InputArea>
                    <LabelText>Local / Aplicação</LabelText>
                    <InputArea>
                        <SignInput
                            placeholder={equipmentInfo.local}
                            value={campoLocal}
                            onChangeText={text => setCampoLocal(text)}
                        />
                    </InputArea>
                    <ButtonArea>
                        <CustomButtonAdd onPress={validaEquipamento}>
                            <CustomButtonText>Cadastrar</CustomButtonText>
                            {carregando && <LoadingIcon size="small" color="#FFF" />}
                        </CustomButtonAdd>
                        <CustomButtonAdd onPress={detailClient}>
                            <CustomButtonText>Cancelar</CustomButtonText>
                        </CustomButtonAdd>
                    </ButtonArea>
                </PageBody>
            </Scroller>
        </Container>
    )
}