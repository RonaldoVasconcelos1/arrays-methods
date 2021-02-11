const numeros = [5,50,80,1,3,4,5,6,7,8,9,11,25,37,22,36,55]
const dobroNumeros = numeros.map(valor => valor * 2)

console.log(dobroNumeros)

const pessoas = [
  {nome: 'Ronaldo', idade: 23},
  {nome: 'jose', idade: 25},
  {nome: 'grace', idade: 30},
  {nome: 'gleison', idade: 27},
  {nome: 'val', idade: 46},
  {nome: 'gabi', idade: 18}
]
//  retornando apenas uma string com nome
 const pessoaMapeada = pessoas.map(nome => nome.nome)

// retornando apenas a propiedade idade
 const pessoaMapeada = pessoas.map(obj => {
   return {idade: obj.idade}
 })

const pessoaMapeada = pessoas.map((obj ,index)=> {
  obj.id = index + 1
  return obj
})
 console.log(pessoaMapeada)