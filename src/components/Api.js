//cSpell:Ignore usuario, usuarios
import AsyncStorage from '@react-native-community/async-storage'

const BASE_API = 'http://localhost:4000'

export default {

    checkToken:async(token) => {
        const req = await fetch(`${BASE_API}/usuarios/access-token`,{
            method: 'GET',
            mode: 'cors',
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
        const json = await req.json()
        return json
    },

signIn: async(email, senha) => {
        const req = await fetch(`${BASE_API}/usuarios/login`, {     //realizamos uma requisição na BASE_API no endereço /usuario/login
            crossDomain: true,                                      //autorizar que o navegador utilize dois domínios (frontend e backend)
            method: 'POST',                                         //enviar dados via POST
            headers: {                                              //
                Accept: 'application/json',                         //aceitar apenas dados do tipo json
                'Content-Type': 'application/json'                  // conteúdo está no tipo json
            },
            body: JSON.stringify({email, senha})                    //enviar os dados de e-mail e senha no formato json
        })
        const json = await req.json()                               //aguardar o resultado da requisição, reforçando que é em json
        return json                                                 //retorna o json
    }/*,
    checkToken:async(token) => {
        const req = await fetch(`${BASE_API}/usuario/access-token`,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
    }*/
}