# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

## 06-alternative-to-enum.ts
It shows the literal types can be used instead of enums to define the fixed values.

## 07-custom-type-role.ts
Shows how different types of aliases create a reusable custome types and apply later to objects.

## 08-functions.ts
This file explains hos function typing, return types, void and never types, callbackl functions can be used.

## 09-special-types.ts
How null and undefined types work, how they can be used as combined or not with other types.

## 10-form.html and 10-type-narrowing.ts
Shows how type narrowing and hpw to safely access DOM elements using checks or casting.

## 11-optional.ts
Shows optional parameters, optional object properties, and null coalescing oprator.