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
