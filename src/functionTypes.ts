// Defining Function
// function printName(name: string, name2: string) {
//   console.log(name, name2)
// }
type Person1 = { name: string }

function printPerson(person: { name: string }) {
  console.log(person.name)
}

printPerson({ name: "Kyle"})

// function sum(a: number, b: number) {
//   return a + b
// }

const c1 =sum(1, 2);

// Void Type
function printName(name: string): void {
  console.log(name)
}

// Optional Parameters
// function printNameAndAge(name:string, options?: { debugMode: boolean })  {
//   console.log(name, options)
// }

// printNameAndAge('kai', { debugMode: true })

// Destructured
type Options = {
  debugMode?: boolean
  indentLevel?: number
}

function printNameAndAge(
  name:string,
   { debugMode = false, indentLevel }: Option = {}
  ) {
  console.log(name, debugMode, indentLevel)
}

printNameAndAge('kai')

// Rest Parameters
function sum(...nums: number[]) {
  return // code to add them
}

sum(1, 2, 4)
sum(1, 2)

// Typing Variables As Functions
function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
  cb(a + b)
}

sumWithCallback(1, 2, (sum) => {
  console.log(sum)
})

type PrintNameFunc = (name: string) => number
function f(name: string) {
  return 2
}