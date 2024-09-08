/*
  You have a merge function that combines two objects. 
  Use generics to specify that these objects can be of any type.
*/

function merge <T extends object, U extends object> (objA: T, objB: U) {
  return Object.assign(objA, objB);
}

export {}