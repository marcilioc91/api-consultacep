const cep = document.querySelector("#cep")

const showData = (result)=> {
    for(const campo in result){
        if(document.querySelector("#"+campo)) // PARA REMOVER OS DADOS QUE NÃO NOS INTERESSAM
        {
            document.querySelector("#"+campo).value = result[campo] // PARA AUTO PREENCHER OS CAMPOS COM OS IDS "#"
        }
    }
}

cep.addEventListener("blur",(e) => {
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors', // PARA SERVIDORES DIFERENTES
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {response.json()
        .then(data => showData(data)) // SE TUDO DER CERTO
    })
    .catch(e => console.log('Deu erro! '+e,message)) // CASO DÊ ALGUM ERRO
    console.log(cep.value)
})