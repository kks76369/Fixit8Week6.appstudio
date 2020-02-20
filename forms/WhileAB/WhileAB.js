let name = prompt(`What is your first and last name?`)
let firstName = name.toUpperCase()

let i = 0
while (i < firstName.length) {
  console.log(`Letter ${i+1} is: ${firstName.charAt(i)}`)
  i++;
}