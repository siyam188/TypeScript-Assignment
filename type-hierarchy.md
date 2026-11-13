# Type Hierarchy in TypeScript: any, unknown, and never

## Introduction

TypeScript provides different types to handle values safely. Among them, `any`, `unknown`, and `never` are three important special types.

They have different purposes in TypeScript's type system. Understanding these types helps developers write safer, more reliable, and maintainable code.

In this blog, we will discuss how `any`, `unknown`, and `never` work and why `unknown` is generally preferred over `any`.

## 1. What is any?

The `any` type disables most TypeScript type checking for a particular value. It allows us to assign any type of data without generating type errors.

### Example:

```ts
let value: any = "Hello";

value = 100;
value = true;

console.log(value);
```

### Another Example:

```ts
let data: any = "TypeScript";

console.log(data.toUpperCase());

data = 100;

console.log(data.toUpperCase());
```

Here, TypeScript does not report an error for calling `toUpperCase()` on a number because the variable has the `any` type. However, JavaScript will produce a runtime error.

### Advantages of any:

- Allows flexible data assignment.
- Useful when migrating JavaScript code to TypeScript.
- Can work with unknown data structures quickly.

### Disadvantages of any:

- Removes important type safety.
- Makes it easier to introduce runtime errors.
- Reduces the benefits of TypeScript.

## 2. What is unknown?

The `unknown` type can store any type of value, just like `any`. However, it is safer because TypeScript does not allow us to use the value without checking its type first.

### Example:

```ts
let value: unknown = "Hello";

value = 100;
value = true;

console.log(value);
```

All these assignments are valid because unknown can hold values of any type.

However, accessing properties or calling methods directly is not allowed.

### Type Checking Example:

```ts
let data: unknown = "TypeScript";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}
```

Here, we use `typeof` to check whether the value is a string.

After checking, TypeScript allows us to use the `toUpperCase()` method safely.

### Advantages of unknown:

- Provides better type safety than any.
- Accepts values of any type.
- Requires type checking before using the value.
- Helps prevent unexpected runtime errors.

## 3. What is never?

The `never` type represents values that never occur.

It is commonly used for functions that never return normally or code paths that cannot be reached.

### Example 1: Function that never returns

```ts
function throwError(message: string): never {
    throw new Error(message);
}
```

This function throws an error and never returns a normal value.

### Example 2: Infinite Loop

```ts
function infiniteLoop(): never {
    while (true) {
        console.log("Running...");
    }
}
```

This function runs forever and never finishes normally.

### Example 3: Exhaustive Type Checking

```ts
type Status = "success" | "error";

function handleStatus(status: Status) {
    switch (status) {
        case "success":
            return "Operation successful";

        case "error":
            return "Something went wrong";

        default:
            const exhaustiveCheck: never = status;
            return exhaustiveCheck;
    }
}
```

Here, `never` helps TypeScript ensure that all possible Status values have been handled.

If another status is added to the union without adding a corresponding case, TypeScript can report an error.

## 4. Differences Between any, unknown, and never

| Feature | any | unknown | never |
|---|---|---|---|
| Accepts any value | Yes | Yes | No |
| Allows direct operations | Yes | No | Not applicable |
| Requires type checking | No | Yes | Not applicable |
| Provides type safety | Low | High | Represents impossible values |
| Common use | Dynamic data | Untrusted data | Impossible states |

## 5. Why is unknown Preferred Over any?

The `unknown` type is generally preferred over `any` because it maintains TypeScript's type safety.

When we use `any`, TypeScript allows us to perform operations without checking the actual data type.

However, `unknown` requires us to check the type before performing operations.

### Example Using any:

```ts
let userData: any = "Siyam";

console.log(userData.toUpperCase());

userData = 100;

console.log(userData.toUpperCase());
```

TypeScript allows this code, but the second method call causes a runtime error.

### Example Using unknown:

```ts
let userData: unknown = "Siyam";

if (typeof userData === "string") {
    console.log(userData.toUpperCase());
}
```

Here, TypeScript checks the data type before allowing the operation.

Therefore, `unknown` helps developers avoid unsafe operations and write more reliable code.

## 6. Type Hierarchy in TypeScript

The three types have different positions and behaviors in TypeScript's type system.

- `unknown` is a top type because every value can be assigned to it.
- `never` is a bottom type because it can be assigned to every type.
- `any` is an escape hatch from normal type checking and behaves specially in the type system.

### Example:

```ts
let a: unknown;
let b: any;
let c: never;

let numberValue: number = 10;

a = numberValue;
b = numberValue;

// A never value can be assigned to a number.
// But a normal number cannot be assigned to never.
```

The `never` variable cannot be assigned a normal value.

## Conclusion

The `any`, `unknown`, and `never` types play important roles in TypeScript.

- `any` provides flexibility but removes type safety.
- `unknown` allows different values while requiring type checking before use.
- `never` represents values that never occur or functions that never return normally.

In general, developers should prefer `unknown` over `any` when handling data whose type is not known. Understanding these three types helps developers write safer and more maintainable TypeScript applications.