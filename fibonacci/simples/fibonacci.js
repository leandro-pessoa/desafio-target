// número a selecionar
let numero = 34

// declarações das variáveis utilizadas na sequência
let limite = 10000
let anterior1 = 0
let anterior2 = 1
let ultimo = 0
let count = 0

// realização da sequência em si
for(let i = 0; i < limite; i++){
    ultimo = anterior1 + anterior2
    anterior1 = anterior2
    anterior2 = ultimo
    if(numero == anterior1){
        count++
    }
}

// mostragem dos resultados
console.log('Número selecionado: ' + numero)
if(count > 0){
    console.log('Existente na sequência: Sim')
}
else{
    console.log('Existente na sequência: Não')
}