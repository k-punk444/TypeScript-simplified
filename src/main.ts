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

const person: PersonWithId = { id: "ksjakfl", name: "Kai", age: 30 }