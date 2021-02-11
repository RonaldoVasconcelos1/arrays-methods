const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const upperCaseTo = () => String.fromCharCode(rand(65, 91))
const lowerCaseTo = () => String.fromCharCode(rand(97, 123))
const numberTo = () => String.fromCharCode(rand(48, 58))
const symbols = '!@'
const symbolTo = () => symbols[rand(0, symbols.length)]

export default function generatePassword(amount, lowerCase, upperCase, number, symbol) {
  const password = []
  amount = Number(amount)
  for(let i = 0; i < amount; i++) {
    upperCase && password.push(upperCaseTo())
    lowerCase && password.push(lowerCaseTo())
    number && password.push(numberTo())
    symbols && password.push(symbolTo())
  }
  console.log(password.join('').slice(0, amount))
}
generatePassword(35, true, true, true, true)