
const lista = document.querySelector('#lista')

fetch('/data.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((produto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${produto.nome}</h4>
                <p>${produto.carro}</p>
                <p>Código: ${produto.id}</p>
                <hr/>
            `
   
            lista.append(li)
        })
    })
