// let arr = [];
// let arr2 = [];
// arr.push("James");
// arr.push("Daniel");
// arr.unshift("Green and Blue");
// arr2.push(7);
// arr2.push("examination");

// console.log(arr, arr2);

// console.log(arr2.indexOf(42));

// let combineArr = arr.concat(arr2);

// console.log(combineArr);

// // PART 2

// let part2 = ["Javscript", "Python", "Ruby", "Java"];

// console.log(part2.splice(1, 2, "c-sharp", "C", part2));
// console.log(part2.splice(0, 0, "PHP", "Cobol", part2));

// for (i = 0; i <= part2.length; i++) {
//   console.log(part2[i]);
// }

const store = {
  fruit: "apple",
  picture: 3,
  books: [
    {
      title: "True Joy",
      author: "Michael John",
      year: 2022,
      pages: 100,
      publisher: "Universal",
    },
    {
      title: "The Journey",
      author: "Sam Ike",
      year: 2020,
      pages: 150,
      publisher: "Mcmilan",
    },
  ],
};

const newStore = Object.entries(store);
console.log(newStore);

// OR
// let newStore = [];
// for (let i in store) {
//   let entry = [];
//   entry.push(i);
//   entry.push(store[i]);
//   newStore.push(entry);
// }
// console.log(newStore);

// let people = ["Greg", "Mary", "Devon", "James"];

// people.shift();
// people.pop();
// people.unshift("Math");
// console.log(people);
// people.push("Nelson");
// console.log(people);

// for (let i of people) {
//   console.log(i);
// }

// for (let i of people) {
//   if (i == "Mary") break;
// }
// console.log(i);

// // people.slice(0);
// // console.log(people);

// let newPeople = people.concat("Bob");

// console.log(newPeople);

const animals = {
  bird: "Eagles",
  insect: "butterfly",
  seafood: {
    crawling: "Periwinkle",
    dry: "crayfish",
  },
};

for (animal in animals) {
  console.log(`${animal}: ${animals[animal]}`);
}

const withdrawal = (withdrawalAmount, oldBalance) => {
  let balance = oldBalance - withdrawalAmount;
  return balance;
};

console.log(withdrawal(2000, 5000));

const salaries = [200, 3000, 4000, 7000];

function sum(array) {
  summation = 0;
  for (let i = 0; i < array.length; i++) {
    summation += array[i];
  }
  return summation;
}
console.log(sum(salaries));

//ODD NUMBERS
function oddNumbers(lengthOfNumbers) {
  for (let i = 1; i < lengthOfNumbers; i += 2) {
    console.log(i);
  }
}
oddNumbers(25);
