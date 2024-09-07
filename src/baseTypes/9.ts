/*
  Create a new data type that is suitable for these two objects.
*/

type LessDetails = {
  title: string,
  likes: number,
  accounts: string[],
  status: string,
}

type AddDetails = {
  details: {
    createAt: Date,
    updateAt: Date
  }
}

type MoreDetails = LessDetails & AddDetails;

const page1: MoreDetails = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: LessDetails = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

export { };

// console.log(page1);
// console.log(page2);