//cSpell:Ignore usuario
const BASE_API = 'http://localhost:4000'

export default {
    signIn: async(email, senha) => {
        const req = await fetch(`${BASE_API}/usuario/login`, {      //realizamos uma requisição na BASE_API no endereço /usuario/login
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
    },
    checkToken:async(token) => {
        const req = await fetch(`${BASE_API}/usuario/eu`,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
    }
}