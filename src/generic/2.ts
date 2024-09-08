/*
  You have an AllType type. There is a compare function that takes two objects. These objects contain fields of AllType. 
  Your task is to use Pick and generics to indicate that the fields of these objects belong to AllType.
  The compare function must return AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare (top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

export {};