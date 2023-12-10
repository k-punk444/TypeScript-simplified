// Defining Function
// function printName(name: string, name2: string) {
//   console.log(name, name2)
// }
type Person1 = { name: string }

function printPerson(person: { name: string }) {
  console.log(person.name)
}

printPerson({ name: "Kyle"})

function sum(a: number, b: number) {
  return a + b
}

const c1 =sum(1, 2);

// Void Type
function printName(name: string): void {
  console.log(name)
}

// Optional Parameters
function printNameAndAge(name:string, options?: { debugMode: boolean })  {
  console.log(name, options)
}

printNameAndAge('kai', { debugMode: true })