### Types in TypeScript

- Read This: [Type Compatibility in TypeScript](https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability)
- String - “Hello World”
- Number - 42, 42.5
- Boolean - true/false
- Array - `string[]`, `number[]`, or `Array<number>`, `Array<string>`
- Any
- Function with Types in Parameters:

```typescript
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
// Would be a runtime error if executed!
greet(42); // Error: 'number' is not assignable to parameter of type 'string'.
```

### Function with Types in Parameters and Return Type:

```typescript
function getFavoriteNumber(): number {
  return 26;
}
```

### Function returning Promise:

```typescript
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```
