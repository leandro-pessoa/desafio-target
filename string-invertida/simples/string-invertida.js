// palavra a ser invertida
let palavra = 'Pessoa'

// função que inverte a palavra
const inversao = () => {
    let palavraInvertida = ''
    for(let i = palavra.length - 1; i >= 0; i--){
       palavraInvertida += palavra[i]
    }
    console.log(palavraInvertida)
}

// execução da função
inversao()


