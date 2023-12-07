// Assigning TYpes and Type Inference
let a: undefined = undefined;
a = undefined;

// Array Type
const b: number[] = [1, 2, 3];
b.push(4);

// Any Type(never use this)
let c:any = 'whatever';
c = 3;
c = 'string';
const d = fetch('anything').then(res => res.json()).then(data => {
  data // data: any
})

//Object Basics
const person: { name: string; age: number; isProgrammer?: boolean; } = {
  name: "Kai",
  age: 30,
};

// Interfaces VS Types

// type Person = {
//   name: string;
//   age: number;
//   isProgrammer?: boolean;
//   friends: string[]
//   address: {
//     street: string;
//   }
// };

 interface Person  {
  name: string;
  age: number;
  isProgrammer?: boolean;
  friends: string[]
  address: {
    street: string;
  }
};

const person2: Person = {
  name: "Sally",
  age: 23,
  friends: [],
  address: {
    street: "Main Street",
  }
}