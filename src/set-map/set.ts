const a1 = [1, 1, 2, 2, 3, 6];
console.log("a1: ", a1);
const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(1);
console.log("mySet: ", mySet);

console.log("mySet.has(3): ", mySet.has(3));
console.log("mySet.has(5): ", mySet.has(5));

const s = new Set<{ nbr: number }>();
s.add({ nbr: 12 });
s.add({ nbr: 12 });
console.log("s.size: ", s.size);
// ok mais potentiellement couteux
a1.includes(5);

const o = {
  titi: 23,
  toto: 22,
};
console.log("o.titi: ", o.titi);

const map = new Map<{ toto: string }, number>();
const ref = { toto: "tutu" };
map.set(ref, 12);
map.set({ toto: "truc" }, 13);
console.log("map: ", map);

console.log("map.get(ref): ", map.get(ref));

const stringMap = new Map<string, { tutu: string }>();

stringMap.set("qwerqwer", { tutu: "eeee" });
// stringMap.get("qwerqwer");
console.log('stringMap.get("qwerqwer"): ', stringMap.get("qwerqwer"));

// number
// string
// boolean
// undefined
// object
// function
