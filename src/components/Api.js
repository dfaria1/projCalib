//cSpell:Ignore usuario, usuarios
import AsyncStorage from '@react-native-async-storage/async-storage'
//import AsyncStorage from 'react-native'
//const BASE_API = 'http://localhost:4000'
const BASE_API = 'http://192.168.0.12:4000'
export default {

    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/usuarios/me`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access-token': token
            }
        })
        const json = await req.json()
        return json
    },

    signIn: async (email, senha) => {
        const req = await fetch(`${BASE_API}/usuarios/login`, {     //realizamos uma requisição na BASE_API no endereço /usuario/login
            crossDomain: true,                                      //autorizar que o navegador utilize dois domínios (frontend e backend)
            method: 'POST',                                         //enviar dados via POST
            headers: {                                              //
                Accept: 'application/json',                         //aceitar apenas dados do tipo json
                'Content-Type': 'application/json'                  // conteúdo está no tipo json
            },
            body: JSON.stringify({ email, senha })                  //enviar os dados de e-mail e senha no formato json
        })
        const json = await req.json()                               //aguardar o resultado da requisição, reforçando que é em json
        return json                                                 //retorna o json
    },

    logout: async () => {
        const keys = ['token', 'usuario']
        await AsyncStorage.multiRemove(keys)                        //exclui o token e informações do usuário do AsyncStorage
        return null
    },

    getUser: async () => {
        let access_token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/usuarios/access-token`, {        //realizamos uma requisição na BASE_API no endereço /pessoas/equipamento/novo
            crossDomain: true,                                                //autorizar que o navegador utilize dois domínios (frontend e backend)
            method: 'POST',                                                    //enviar dados via PUT
            headers: {                                                        //
                Accept: 'application/json',                                   //aceitar apenas dados do tipo json
                'Content-Type': 'application/json',                           //conteúdo está no tipo json
                'access-token': access_token
            },
            body: JSON.stringify({ access_token })
        })
        const json = await req.json()                                         //aguardar o resultado da requisição, reforçando que é em json
        return json                                                           //retorna o json
    },

    getClients: async () => {                                       //retorna um array com todos os clientes/fornecedores
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/pessoas`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access-token': token
            }
        })
        const json = await req.json()
        return json
    },

    getClient: async (id) => {                                      //retorna apenas as informações de um cliente/fornecedor específico
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/pessoas/${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access-token': token
            }
        })
        const json = await req.json()
        return json
    },

    getStandards: async () => {                                       //retorna um array com todos os padrões
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/padroes`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access-token': token
            }
        })
        const json = await req.json()
        return json
    },

    getStandard: async (id) => {                                      //retorna apenas as informações de um padrão específico
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/padroes/${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access-token': token
            }
        })
        const json = await req.json()
        return json
    },

    getEquipment: async (_id) => {                                      //retorna apenas as informações de um equipamento específico
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/pessoas/equipamento/${_id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access-token': token
            }
        })
        const json = await req.json()
        return json
    },

    editEquipment: async (_id, nSerie, marca, modelo, tipo, capacidade, divisao, cargaMin, casasDecimais, unidade, tag, local) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/pessoas/equipamento`, {     //realizamos uma requisição na BASE_API no endereço /pessoas/equipamento
            crossDomain: true,                                           //autorizar que o navegador utilize dois domínios (frontend e backend)
            method: 'PUT',                                               //enviar dados via POST
            headers: {                                                   //
                Accept: 'application/json',                              //aceitar apenas dados do tipo json
                'Content-Type': 'application/json',                      // conteúdo está no tipo json
                'access-token': token
            },
            body: JSON.stringify({ _id, nSerie, marca, modelo, tipo, capacidade, divisao, cargaMin, casasDecimais, unidade, tag, local })
        })
        const json = await req.json()                                    //aguardar o resultado da requisição, reforçando que é em json
        return json                                                      //retorna o json
    },

    addEquipment: async (_id, nSerie, marca, modelo, tipo, capacidade, divisao, cargaMin, casasDecimais, unidade, tag, local) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/pessoas/equipamento/novo`, {     //realizamos uma requisição na BASE_API no endereço /pessoas/equipamento/novo
            crossDomain: true,                                                //autorizar que o navegador utilize dois domínios (frontend e backend)
            method: 'PUT',                                                    //enviar dados via PUT
            headers: {                                                        //
                Accept: 'application/json',                                   //aceitar apenas dados do tipo json
                'Content-Type': 'application/json',                           //conteúdo está no tipo json
                'access-token': token
            },
            body: JSON.stringify({ _id, nSerie, marca, modelo, tipo, capacidade, divisao, cargaMin, casasDecimais, unidade, tag, local })
        })
        const json = await req.json()                                         //aguardar o resultado da requisição, reforçando que é em json
        return json                                                           //retorna o json
    },

    addClient: async (razaoSocial, cnpj, logradouro, numeroLogradouro, complemento, bairro, cep, cidade, uf, email, telefone, contato, fornecedor, inativo) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/pessoas`, {            //realizamos uma requisição na BASE_API no endereço /pessoas
            crossDomain: true,                                      //autorizar que o navegador utilize dois domínios (frontend e backend)
            method: 'POST',                                         //enviar dados via POST
            headers: {                                              //
                Accept: 'application/json',                         //aceitar apenas dados do tipo json
                'Content-Type': 'application/json',                 // conteúdo está no tipo json
                'access-token': token
            },
            body: JSON.stringify({ razaoSocial, cnpj, logradouro, numeroLogradouro, complemento, bairro, cep, cidade, uf, email, telefone, contato, fornecedor, inativo })
        })
        const json = await req.json()                               //aguardar o resultado da requisição, reforçando que é em json
        return json                                                 //retorna o json
    },

    editClient: async (_id, razaoSocial, cnpj, logradouro, numeroLogradouro, complemento, bairro, cep, cidade, uf, email, telefone, contato, fornecedor, inativo) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/pessoas`, {            //realizamos uma requisição na BASE_API no endereço /pessoas
            crossDomain: true,                                      //autorizar que o navegador utilize dois domínios (frontend e backend)
            method: 'PUT',                                          //enviar dados via POST
            headers: {                                              //
                Accept: 'application/json',                         //aceitar apenas dados do tipo json
                'Content-Type': 'application/json',                 // conteúdo está no tipo json
                'access-token': token
            },
            body: JSON.stringify({ _id, razaoSocial, cnpj, logradouro, numeroLogradouro, complemento, bairro, cep, cidade, uf, email, telefone, contato, fornecedor, inativo })
        })
        const json = await req.json()                               //aguardar o resultado da requisição, reforçando que é em json
        return json                                                 //retorna o json
    },

    removeClient: async (_id) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/pessoas`, {            //realizamos uma requisição na BASE_API no endereço /pessoas
            crossDomain: true,                                      //autorizar que o navegador utilize dois domínios (frontend e backend)
            method: 'PUT',                                          //enviar dados via POST
            headers: {                                              //
                Accept: 'application/json',                         //aceitar apenas dados do tipo json
                'Content-Type': 'application/json',                 // conteúdo está no tipo json
                'access-token': token
            },
            body: JSON.stringify({ _id, "inativo": true })
        })
        const json = await req.json()                               //aguardar o resultado da requisição, reforçando que é em json
        return json                                                 //retorna o json
    },

    addStandard: async (descricao, statusPadrao, tipo, identificacao, classeExatidao) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/padroes`, {            //realizamos uma requisição na BASE_API no endereço /padroes
            crossDomain: true,                                      //autorizar que o navegador utilize dois domínios (frontend e backend)
            method: 'POST',                                         //enviar dados via POST
            headers: {                                              //
                Accept: 'application/json',                         //aceitar apenas dados do tipo json
                'Content-Type': 'application/json',                 // conteúdo está no tipo json
                'access-token': token
            },
            body: JSON.stringify({ descricao, statusPadrao, tipo, identificacao, classeExatidao })
        })
        const json = await req.json()                               //aguardar o resultado da requisição, reforçando que é em json
        return json                                                 //retorna o json
    },

    editStandard: async (_id, descricao, statusPadrao, tipo, identificacao, classeExatidao) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/padroes`, {            //realizamos uma requisição na BASE_API no endereço /padroes
            crossDomain: true,                                      //autorizar que o navegador utilize dois domínios (frontend e backend)
            method: 'PUT',                                          //enviar dados via PUT
            headers: {                                              //
                Accept: 'application/json',                         //aceitar apenas dados do tipo json
                'Content-Type': 'application/json',                 // conteúdo está no tipo json
                'access-token': token
            },
            body: JSON.stringify({ _id, descricao, statusPadrao, tipo, identificacao, classeExatidao })
        })
        const json = await req.json()                               //aguardar o resultado da requisição, reforçando que é em json
        return json                                                 //retorna o json
    },

    removeStandard: async (_id) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/padroes`, {            //realizamos uma requisição na BASE_API no endereço /padroes
            crossDomain: true,                                      //autorizar que o navegador utilize dois domínios (frontend e backend)
            method: 'PUT',                                          //enviar dados via POST
            headers: {                                              //
                Accept: 'application/json',                         //aceitar apenas dados do tipo json
                'Content-Type': 'application/json',                 // conteúdo está no tipo json
                'access-token': token
            },
            body: JSON.stringify({ _id, "statusPadrao": "inativo" })
        })
        const json = await req.json()                               //aguardar o resultado da requisição, reforçando que é em json
        return json                                                 //retorna o json
    },

    addCalibration: async (idEquipamento, nCertificado, tempInicial, tempFinal, umidInicial, umidFinal, pressInicial, pressFinal, excentricidade, linearidade) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/calibracoes`, {        //realizamos uma requisição na BASE_API no endereço /calibracoes
            crossDomain: true,                                      //autorizar que o navegador utilize dois domínios (frontend e backend)
            method: 'POST',                                         //enviar dados via POST
            headers: {                                              //
                Accept: 'application/json',                         //aceitar apenas dados do tipo json
                'Content-Type': 'application/json',                  // conteúdo está no tipo json
                'access-token': token
            },
            body: JSON.stringify({ idEquipamento, nCertificado, tempInicial, tempFinal, umidInicial, umidFinal, pressInicial, pressFinal, excentricidade, linearidade })
        })
        const json = await req.json()                               //aguardar o resultado da requisição, reforçando que é em json
        return json                                                 //retorna o json
    },

    editCalibration: async (_id, idEquipamento, nCertificado, tempInicial, tempFinal, umidInicial, umidFinal, pressInicial, pressFinal, excentricidade, linearidade) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/calibracoes`, {        //realizamos uma requisição na BASE_API no endereço /calibracoes
            crossDomain: true,                                      //autorizar que o navegador utilize dois domínios (frontend e backend)
            method: 'PUT',                                          //enviar dados via PUT
            headers: {                                              //
                Accept: 'application/json',                         //aceitar apenas dados do tipo json
                'Content-Type': 'application/json',                 // conteúdo está no tipo json
                'access-token': token
            },
            body: JSON.stringify({ _id, idEquipamento, nCertificado, tempInicial, tempFinal, umidInicial, umidFinal, pressInicial, pressFinal, excentricidade, linearidade })
        })
        const json = await req.json()                               //aguardar o resultado da requisição, reforçando que é em json
        return json                                                 //retorna o json
    },

    getCalibrations: async () => {                                       //retorna um array com todas calibrações
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/calibracoes`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access-token': token
            }
        })
        const json = await req.json()
        return json
    },

    getCalibration: async (id) => {                                      //retorna apenas as informações de uma calibração específica
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/calibracoes/${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access-token': token
            }
        })
        const json = await req.json()
        return json
    },

    getCalibration: async (id) => {                                      //retorna apenas as informações de uma calibração específica
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/calibracoes/${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access-token': token
            }
        })
        const json = await req.json()
        return json
    },

}