// Unions
let id: string | number | boolean = 7;
id = "7";
id = true;

type Person2 = {
  id: number | string
  isProgrammer?: boolean | undefined
}

type Todo = {
  name: string
  status: "Complete" | "Incomplete" | "Draft"
}

const todo: Todo = { name: "Laundry", status: "Complete" };

// Intersections
interface Person3 {
  name: string
  age: number
}

interface Todo2 {
  complete: boolean
}

interface PersonWithId extends Person, Todo {
  id: string
}

const person4: PersonWithId = { id: "ksjakfl", name: "Kai", age: 30 }


// readonly
type NumberArray = readonly number[];
const nums: NumberArray = [1, 2, 3];
nums[4] = 3;

//keyof

type Person4 = {
  name: string
  age: number
  isProgrammer?: boolean
}

function groupBy()

const age = getValue("age", { name: "Kai", age: 30 })

function groupBy(key: keyof Person4, people: Person4[]) {
  return person[key]
}

// typeof
const person5 = { name:"Kai", age:30, isProgrammer: true }
const people: (typeof person)[] = []

people.push(person)
people.push({ name: "Yan", age: 30})
people.push(2)

function sayHi(name: string) {
  console.log(name)
}

type FuncType = typeof sayHi

// Index Types
type Person5 = {
  name: string
  skillLevel: "Beginner" | "Intermediate" | "Expert" | "Master"
}

type PeopleGroupedBySkillLevel = {
  [index: string]: Person[]
}

const k: PeopleGroupedBySkillLevel = {
  naming: [{ name: "Kai", skillLevel: "Beginner }],
}

{
  "Beginner": [person1, person2],
  "Intermediate": ;
}
