
//array Filter
const numeros = [5,50,80,1,3,4,5,6,7,8,9,11,25,37,22,36,55]

//sempre retorna um array
const numerosFiltrados = numeros.filter(value => value > 50)
console.log(numerosFiltrados)

const pessoas = [
  {nome: 'Ronaldo', idade: 23},
  {nome: 'jose', idade: 25},
  {nome: 'grace', idade: 30},
  {nome: 'gleison', idade: 27},
  {nome: 'val', idade: 46},
  {nome: 'gabi', idade: 18}
]
const pessoa = pessoas.filter(obj => obj.idade > 20 )  
console.log(pessoa)