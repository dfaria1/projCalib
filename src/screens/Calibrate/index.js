//cSpell:ignore Umid, studentt, monocaudal, jstat

import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import ClientItem from '../../components/ClientItem'
import { Picker, LabelText, InputArea } from './styles'
import Api from './../../components/Api'
import { useNavigation, useRoute } from '@react-navigation/native'
import SignInput from '../../components/SignInput'
//import { Picker } from '@react-native-picker/picker'


export default () => {

    // const [selectedClient, setSelectedClient] = useState();
    var { jStat } = require('jstat')
    //jStat.studentt.pdf - probabilidade monocaudal da T de Student
    //jStat.studentt.cdf - probabilidade acumulada monocaudal da T de Student
    //jStat.studentt.inv - inverso monocaudal da T de Student
    //Como precisamos do inverso bicaudal da T de Student com probabilidade 0.0455, o equivalente da monocaudal é 0.97725

    //alert(jStat.studentt.inv(0.97725, 100))

    const [listClients, setListClients] = useState([])

    const route = useRoute()

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

    const [campoIDEquipamento, setCampoIDEquipamento] = useState(equipmentInfo._id)
    const [campoNCertificado, setCampoNCertificado] = useState('')
    const [campoTempInicial, setCampoTempInicial] = useState('')
    const [campoTempFinal, setCampoTempFinal] = useState('')
    const [campoUmidInicial, setCampoUmidInicial] = useState('')
    const [campoUmidFinal, setCampoUmidFinal] = useState('')
    const [campoPressInicial, setCampoPressInicial] = useState('')
    const [campoPressFinal, setCampoPressFinal] = useState('')
    const [campoExcentricidade1, setCampoExcentricidade1] = useState('')
    const [campoExcentricidade2, setCampoExcentricidade2] = useState('')
    const [campoExcentricidade3, setCampoExcentricidade3] = useState('')
    const [campoExcentricidade4, setCampoExcentricidade4] = useState('')
    const [campoExcentricidade5, setCampoExcentricidade5] = useState('')
    const [campoExcentricidade6, setCampoExcentricidade6] = useState('')
    const [campoLinearidade1, setCampoLinearidade1] = useState({
        idPadrao: "",
        valorPadrao: "",
        leitura: "",
        incertezaPadrao: "",
        derivaPadrao: "",
        erroIndicacao: "",
        fatorK: "",
        incertezaExpandida: ""

    })
    const [campoLinearidade2, setCampoLinearidade2] = useState('')
    const [standard1Info, setStandard1Info] = useState('')
    const [standard2Info, setStandard2Info] = useState('')


    //Campos dentro dos arrays "Linearidade": idPadrao, valorPadrao, leitura, incertezaPadrao, derivaPadrao, erroIndicacao, fatorK, incertezaExpandida

    useEffect(() => {
        if (campoLinearidade1.idPadrao) {
            const getStandard = async () => {
                //setLoading(true)
                let json = await Api.getStandard(campoLinearidade1.idPadrao)
                if (json.errors) {
                    alert(json.errors)
                } else {
                    setStandard1Info(json)
                }
                //setLoading(false)
            }
            getStandard()
        }
    }, [campoLinearidade1.idPadrao])

    useEffect(() => {
        if (campoTempFinal) {
            if (campoLinearidade1.leitura) {
                let desvPad1 = 0
                let uRepet1 = (desvPad1 / 1)
                let imPadrao1 = standard1Info.calibracoes[0].incertezaPadrao
                let uIMPadrao1 = (imPadrao1 / 2)
                let resolucao1 = (equipmentInfo.divisao / 2)
                let uResolucao1 = (resolucao1 / (Math.sqrt(3)))
                let empuxo1 = (standard1Info.calibracoes[0].valorConvencional / 1000000)
                let uEmpuxo1 = (empuxo1 / Math.sqrt(3))
                let deriva1 = standard1Info.calibracoes[0].derivaPadrao
                let uDeriva1 = (deriva1 / Math.sqrt(3))
                let excentricidade1 = Math.max(campoExcentricidade1, campoExcentricidade2, campoExcentricidade3, campoExcentricidade4, campoExcentricidade5, campoExcentricidade6) - Math.min(campoExcentricidade1, campoExcentricidade2, campoExcentricidade3, campoExcentricidade4, campoExcentricidade5, campoExcentricidade6)
                let uExcentricidade1 = (excentricidade1 / Math.sqrt(3))
                let uCombinada1 = Math.sqrt(Math.pow(uRepet1, 2)+Math.pow(uIMPadrao1, 2)+Math.pow(uResolucao1, 2)+Math.pow(uEmpuxo1, 2)+Math.pow(uDeriva1, 2)+Math.pow(uExcentricidade1, 2))
                let veff = ((Math.pow(uCombinada1, 4))/(((Math.pow(uRepet1, 4))/2)+((Math.pow(uIMPadrao1, 4))/1000000000)))
                campoLinearidade1.fatorK = (veff > 100000 ? 2 : jStat.studentt.inv(0.97725, veff))
                campoLinearidade1.incertezaExpandida = (uCombinada1 * campoLinearidade1.fatorK)
                //campoLinearidade1.erroIndicacao = (campoLinearidade1.leitura - standard1Info.calibracoes[0].valorConvencional)
                campoLinearidade1.erroIndicacao = (campoLinearidade1.leitura - standard1Info.calibracoes[0].valorConvencional)
                
                /*alert(
                    `desvPad1: ${desvPad1} / uRepet1: ${uRepet1} / imPadrao1: ${imPadrao1} / uIMPadrao1: ${uIMPadrao1} / resolucao1: ${resolucao1} / uResolucao1: ${uResolucao1} 
                    / empuxo1: ${empuxo1} / uEmpuxo1: ${uEmpuxo1} / deriva1: ${deriva1} / uDeriva1: ${uDeriva1} / excentricidade1: ${excentricidade1} / uExcentricidade1: ${uExcentricidade1} / 
                    uCombinada1: ${uCombinada1} / veff: ${veff} / fatorK: ${campoLinearidade1.fatorK} / incertezaExpandida: ${campoLinearidade1.incertezaExpandida} / erroIndicacao: ${campoLinearidade1.erroIndicacao}`
                )*/
            }
        }
    }, [campoTempFinal])

    return (
        <SafeAreaView>
            <Text>{`${equipmentInfo.marca ? equipmentInfo.marca : ''} ${equipmentInfo.modelo ? equipmentInfo.modelo : ''} ${equipmentInfo.tag ? ' - ' : ''}${equipmentInfo.tag ? equipmentInfo.tag : ''} ${equipmentInfo.nSerie ? ' - Série ' : ''}${equipmentInfo.nSerie ? equipmentInfo.nSerie : 'S/ Nº'}`}</Text>

            <LabelText>Número do Certificado</LabelText>
            <InputArea>
                <SignInput
                    placeholder={campoNCertificado}
                    value={campoNCertificado}
                    onChangeText={text => setCampoNCertificado(text)}
                    autoFocus={true}
                />
            </InputArea>

            <LabelText>Temperatura Inicial</LabelText>
            <InputArea>
                <SignInput
                    placeholder={campoTempInicial}
                    value={campoTempInicial}
                    onChangeText={text => setCampoTempInicial(text)}
                />
            </InputArea>

            <LabelText>Umidade Inicial</LabelText>
            <InputArea>
                <SignInput
                    placeholder={campoUmidInicial}
                    value={campoUmidInicial}
                    onChangeText={text => setCampoUmidInicial(text)}
                />
            </InputArea>

            <LabelText>Pressão Inicial</LabelText>
            <InputArea>
                <SignInput
                    placeholder={campoPressInicial}
                    value={campoPressInicial}
                    onChangeText={text => setCampoPressInicial(text)}
                />
            </InputArea>

            <LabelText>Excentricidade 1</LabelText>
            <InputArea>
                <SignInput
                    placeholder={campoExcentricidade1}
                    value={campoExcentricidade1}
                    onChangeText={text => setCampoExcentricidade1(text)}
                />
            </InputArea>

            <LabelText>Excentricidade 2</LabelText>
            <InputArea>
                <SignInput
                    placeholder={campoExcentricidade2}
                    value={campoExcentricidade2}
                    onChangeText={text => setCampoExcentricidade2(text)}
                />
            </InputArea>

            <LabelText>Excentricidade 3</LabelText>
            <InputArea>
                <SignInput
                    placeholder={campoExcentricidade3}
                    value={campoExcentricidade3}
                    onChangeText={text => setCampoExcentricidade3(text)}
                />
            </InputArea>

            <LabelText>Excentricidade 4</LabelText>
            <InputArea>
                <SignInput
                    placeholder={campoExcentricidade4}
                    value={campoExcentricidade4}
                    onChangeText={text => setCampoExcentricidade4(text)}
                />
            </InputArea>

            <LabelText>Excentricidade 5</LabelText>
            <InputArea>
                <SignInput
                    placeholder={campoExcentricidade5}
                    value={campoExcentricidade5}
                    onChangeText={text => setCampoExcentricidade5(text)}
                />
            </InputArea>

            <LabelText>Excentricidade 6</LabelText>
            <InputArea>
                <SignInput
                    placeholder={campoExcentricidade6}
                    value={campoExcentricidade6}
                    onChangeText={text => setCampoExcentricidade6(text)}
                />
            </InputArea>

            <LabelText>Linearidade Ponto 1</LabelText>
            <LabelText>ID do Padrão</LabelText>
            <InputArea>
                <SignInput
                    placeholder={campoLinearidade1.idPadrao}
                    value={campoLinearidade1.idPadrao}
                    onChangeText={text => setCampoLinearidade1({ idPadrao: text })}
                />
            </InputArea>
            <LabelText>{campoLinearidade1.idPadrao ? `Padrão: ${standard1Info.identificacao} - ${standard1Info.descricao}. Classe: ${standard1Info.classeExatidao}` : ``}</LabelText>
            <LabelText>Leitura </LabelText>
            <InputArea>
                <SignInput
                    placeholder={campoLinearidade1.leitura}
                    value={campoLinearidade1.leitura}
                    onChangeText={text => setCampoLinearidade1({ leitura: text })}
                />
            </InputArea>

            <LabelText>Erro de Indicação: {(Math.round(campoLinearidade1.erroIndicacao/equipmentInfo.divisao)*equipmentInfo.divisao)}</LabelText>
            <LabelText>Fator K: {campoLinearidade1.fatorK}</LabelText>
            <LabelText>Incerteza Expandida: {campoLinearidade1.incertezaExpandida < equipmentInfo.divisao ? equipmentInfo.divisao : (Math.round(campoLinearidade1.incertezaExpandida/equipmentInfo.divisao)*equipmentInfo.divisao)}</LabelText>

            <LabelText>Temperatura Final</LabelText>
            <InputArea>
                <SignInput
                    placeholder={campoTempFinal}
                    value={campoTempFinal}
                    onChangeText={text => setCampoTempFinal(text)}
                />
            </InputArea>

            <LabelText>Umidade Final</LabelText>
            <InputArea>
                <SignInput
                    placeholder={campoUmidFinal}
                    value={campoUmidFinal}
                    onChangeText={text => setCampoUmidFinal(text)}
                />
            </InputArea>

            <LabelText>Pressão Final</LabelText>
            <InputArea>
                <SignInput
                    placeholder={campoPressFinal}
                    value={campoPressFinal}
                    onChangeText={text => setCampoPressFinal(text)}
                />
            </InputArea>

        </SafeAreaView>
    )
}