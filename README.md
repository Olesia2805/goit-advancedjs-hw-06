# Basic types

The purpose of this homework assignment is to strengthen your skills with the basic types of TypeScript. You'll work with types such as number, string, boolean, null, undefined, unknown, any, as well as tuples, enums, and unions.

At the end of the homework assignment, you will also practice creating your own type based on existing objects. This will help you to better understand how TypeScript can be used to provide type safety for your data and improve the quality of your code.

### [Task 1](src/baseTypes/1.ts)

You have the following JavaScript code:

```ts
let age = 50;
let name = "Max";
let toggle = true;
let empty = null;
let notInitialize;
let callback = (a) => {
  return 100 + a;
};
```

Convert this code to TypeScript, specifying the appropriate types for all variables.

### [Task 2](src/baseTypes/2.ts)

A JavaScript variable can store a value of any type:

```ts
let anything = -20;
anything = "Text";
anything = {};
```

What type do you assign to the anything variable in TypeScript to keep it flexible?

### [Task 3](src/baseTypes/3.ts)

In TypeScript, the unknown type allows us to store any value, but we can assign an unknown variable directly to another variable if we are sure of its type. You have the following code:

```ts
let some: unknown;
some = "Text";
let str: string;
str = some;
```

What do you need to fix in this code to make it correct and safe?

### [Task 4](src/baseTypes/4.ts)

You have the following JavaScript array:

```ts
let person = ["Max", 21];
```

How can you rewrite it in TypeScript using the concept of tuples to ensure that the first element is always a string and the second is always a number?

### [Task 5](src/baseTypes/5.ts)

How would you define a variable in TypeScript that can take a string or a number (union type)? And also define a variable that can take only one of two string values: 'enable' or 'disable' (literal type)?

### [Task 6](src/baseTypes/6.ts)

You have the following JavaScript functions:

```ts
function showMessage(message) {
  console.log(message);
}

function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error("Error");
}
```

How would you specify the types for the arguments and return values of these functions?

### [Task 7](src/baseTypes/7.ts)

Create a function (isWeekend) that takes a day of the week (from your enum) and returns a boolean value indicating whether it is a weekday or a weekend.

### [Task 8](src/baseTypes/8.ts)

Create a type 'Gender' using a union type that can contain the values 'male', 'female'. Create a myGender variable of this type.

### [Task 9](src/baseTypes/9.ts)

You have two objects:

```ts
const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
```

Create a new data type that is suitable for these two objects.

# Generic

The purpose of this assignment is to help you understand and apply generics in TypeScript. You'll work with functions that return an array, use the built-in Pick type, combine objects using generics, and solve type problems in classes.

### Task 1

There is a getPromise() function that returns a promise that is allowed in an array containing strings and numbers. Complete this function using generics so that it returns the correct type.

```ts
function getPromise() {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});
```

### Task 2

You have a type AllType. There is a compare function that takes two objects. These objects contain fields of AllType. Your task is to use Pick and generics to indicate that the fields of these objects belong to AllType. The compare function must return AllType.

```ts
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
```

### Task 3

You have a merge function that combines two objects. Use generics to specify that these objects can be of any type.

```ts
function merge(objA, objB) {
  return Object.assign(objA, objB);
}
```

### Task 4

Use generics and interfaces to fix the error in the following classes:

```ts
class Component {
  constructor(public props: T) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}
```

### Task 5

You need to implement the KeyValuePair interface that describes a key-value pair. Use generics so that this interface can work with any type of key and value.

```ts
interface KeyValuePair {
  key;
  value;
}
```

### Task 6

You have a user registration form. Sometimes you need to pre-populate the form with user information to update their profile. However, you don't always need to fill in all the fields. For example, a user may only want to update their email and password, leaving their first and last name unchanged.

Correct the type in the function argument so that there are no type errors.

```ts
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: User) {
  // Update the user
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });
```

### Task 7

You have a UserRole list that is used to classify users in your application. You want to create a RoleDescription object that will map each user role to its description.

```ts
export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Replace the following code with the version using Record
const RoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
```

### Task 8

You have a Form type that contains information about a form, including the errors field. You want to create a new Params type that includes all the fields from the Form except for the errors field.

```ts
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Implement Params so that the 'errors' field of the Form type is not available
type Params = Form;
``;
```
