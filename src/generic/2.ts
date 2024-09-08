/*
  You have an AllType type. There is a compare function that takes two objects. These objects contain fields of AllType. 
  Your task is to use Pick and generics to indicate that the fields of these objects belong to AllType.
  The compare function must return AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TypesType = Pick<AllType, "name" | "position" | "color" | "weight">;

function compare(top: TypesType, bottom: TypesType): TypesType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export {};

// const top: TypesType = {
//   name: 'Top Item',
//   position: 1,
//   color: 'Red',
//   weight: 10
// };

// const bottom: TypesType = {
//   name: 'Bottom Item',
//   position: 2,
//   color: 'Blue',
//   weight: 20
// };

// const result = compare(top, bottom);
// console.log(result);
