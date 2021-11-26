// [0,4,7,12] -> [{nbr: 0}, {nbr: 4}, {nbr: 7}, {nbr: 12}]

function transform(table: number[]) {
  let result = [];
  for (const value of table) {
    const object = {
      nbr: value,
    };
    result.push(object);
  }
  return result;
}

const transform2 = (table: number[]) =>
  table.map((value) => ({
    nbr: value,
  }));

const array = [0, 4, 7, 12];
const outputArray = transform2(array);
console.log("outputArray: ", outputArray);

// [0,4,7,12] => 23

const sum = (table: number[]) => table.reduce((acc, elt) => acc + elt, 0);
const produit = (table: number[]) => table.reduce((acc, elt) => acc * elt, 1);

const mySum = sum([0, 4, 7, 12]);
console.log("mySum: ", mySum);

const myProduit = produit([4, 5, 2]);
console.log("myProduit: ", myProduit);

// filtrer les elements > 5
// [4,7,12,2] => [7,12]
const filterAbove5 = (array: number[]) => {
  const result = [];
  for (const item of array) {
    if (item > 5) {
      result.push(item);
    }
  }
  return result;
};

const newFilterAbove5 = (array: number[]) => array.filter((item) => item > 5);

const filteredArray = newFilterAbove5([4, 7, 12, 2]);
console.log("filteredArray: ", filteredArray);
