//cSpell:Ignore usuario, usuarios
import AsyncStorage from '@react-native-community/async-storage'

const BASE_API = 'http://localhost:4000'

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

    editEquipment: async (_id, nSerie, marca, modelo, tipo, capacidade, divisao, cargaMin, casasDecimais, unidade, tag, local) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/pessoas/equipamento`, {     //realizamos uma requisição na BASE_API no endereço /usuario/login
            crossDomain: true,                                      //autorizar que o navegador utilize dois domínios (frontend e backend)
            method: 'PUT',                                         //enviar dados via POST
            headers: {                                              //
                Accept: 'application/json',                         //aceitar apenas dados do tipo json
                'Content-Type': 'application/json',                  // conteúdo está no tipo json
                'access-token': token
            },
            body: JSON.stringify({ _id, nSerie, marca, modelo, tipo, capacidade, divisao, cargaMin, casasDecimais, unidade, tag, local })  
        })
        const json = await req.json()                               //aguardar o resultado da requisição, reforçando que é em json
        return json                                                 //retorna o json
    },

    editClient: async (_id, razaoSocial, cnpj, logradouro, numeroLogradouro, complemento, bairro, cep, cidade, uf, email, telefone, contato, fornecedor, inativo) => {
        let token = await AsyncStorage.getItem('token')
        const req = await fetch(`${BASE_API}/pessoas`, {     //realizamos uma requisição na BASE_API no endereço /usuario/login
            crossDomain: true,                                      //autorizar que o navegador utilize dois domínios (frontend e backend)
            method: 'PUT',                                         //enviar dados via POST
            headers: {                                              //
                Accept: 'application/json',                         //aceitar apenas dados do tipo json
                'Content-Type': 'application/json',                  // conteúdo está no tipo json
                'access-token': token
            },
            body: JSON.stringify({ _id, razaoSocial, cnpj, logradouro, numeroLogradouro, complemento, bairro, cep, cidade, uf, email, telefone, contato, fornecedor, inativo })  
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
    /*
                    "_id": JSON.stringify(_id),
            "nSerie": JSON.stringify(nSerie),
            "marca": JSON.stringify(marca),
            "modelo": JSON.stringify(modelo),
            "tipo": JSON.stringify(tipo),
            "capacidade": JSON.stringify(capacidade),
            "divisao": JSON.stringify(divisao),
            "cargaMin": JSON.stringify(cargaMin),
            "casasDecimais": JSON.stringify(casasDecimais),
            "unidade": JSON.stringify(unidade),
            "tag": JSON.stringify(tag),
            "local": JSON.stringify(local)
            */


    //JSON.stringify({ _id, nSerie, marca, modelo, tipo, capacidade, divisao, cargaMin, casasDecimais, unidade, tag, local })  //enviar os dados de e-mail e senha no formato json

}