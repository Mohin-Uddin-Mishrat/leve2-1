# What are some differences between interfaces and types in TypeScript?

Interface: 
1.allow declaration margin 
2.inherit others interface property using extend keyword
3.Generally used for defining objects type


Type : 
1.Does’nt allow declaration Margin 
2.Can’t extended but combine two different types into one using Intersection
3. Can define any types valu





# What is the use of the keyof keyword in TypeScript? Provide an example.
Keyof used for get key of types as union of string literal 
interface Person {
  name: string;
  age: number;
}


type PersonKeys = keyof Person;  // "name" | "age"


