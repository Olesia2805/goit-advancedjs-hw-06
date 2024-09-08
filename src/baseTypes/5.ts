/* 
  How do you define a variable in TypeScript that can take a string or a number (union type)? 
  And also define a variable that can take only one of two string values: ‘enable’ or ‘disable’ (literal type)?
*/

let union: string | number;
let literal: "enable" | "disable";
