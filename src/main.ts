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
