# Type Aliases vs Interfaces in TypeScript

## Introduction

TypeScript is a strongly typed programming language built on top of JavaScript. It provides features to define and manage data types.

Two important features of TypeScript are Type Aliases and Interfaces. Both help developers define the structure of data and make code reusable.

## 1. What is a Type Alias?

A Type Alias allows us to create a custom name for a type using the `type` keyword.

### Example:

```ts
type User = {
    name: string;
    age: number;
    email: string;
};

const user: User = {
    name: "Siyam",
    age: 22,
    email: "siyam@gmail.com"
};

console.log(user);
```

Here, `User` is a custom type that defines the structure of a user object.

## 2. What is an Interface?

An Interface defines the structure of an object. It describes which properties an object should have and their data types.

We use the `interface` keyword.

### Example:

```ts
interface Student {
    name: string;
    age: number;
    department: string;
}

const student: Student = {
    name: "Siyam",
    age: 22,
    department: "CSE"
};

console.log(student);
```

Here, the `Student` interface defines the structure of a student object.

## 3. Key Differences Between Type Alias and Interface

| Type Alias | Interface |
|---|---|
| Uses the `type` keyword | Uses the `interface` keyword |
| Supports primitive types | Mainly defines object structures |
| Supports Union Types | Does not directly support Union Types |
| Supports Intersection Types | Supports extending other interfaces |
| Cannot use declaration merging | Supports declaration merging |

## 4. Union Types with Type Alias

One important advantage of Type Alias is that it supports Union Types.

```ts
type Status = "active" | "inactive" | "pending";

let userStatus: Status = "active";

console.log(userStatus);
```

Here, the variable can only contain one of the three specified values.

## 5. Extending Interfaces

Interfaces can extend other interfaces using the `extends` keyword.

```ts
interface Person {
    name: string;
}

interface Employee extends Person {
    salary: number;
}

const employee: Employee = {
    name: "Siyam",
    salary: 30000
};

console.log(employee);
```

Here, Employee inherits the name property from Person and adds a salary property.

## 6. When Should You Choose Type Alias or Interface?

### Choose Type Alias When:

- You need Union Types.
- You need Intersection Types.
- You want to define primitive or tuple types.
- You need complex type combinations.

### Choose Interface When:

- You mainly define object structures.
- You need declaration merging.
- You want to extend object structures.
- You are designing reusable object contracts.

## Conclusion

Type Aliases and Interfaces are both important features of TypeScript. They have similar purposes but different capabilities.

In general, Interfaces are useful for defining object structures, while Type Aliases are useful for unions, intersections, and other complex types.

Choosing the right one helps make code more readable, reusable, and maintainable.