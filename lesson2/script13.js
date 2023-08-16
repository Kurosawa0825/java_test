const characters = [
  { name: "にんじゃわんこ", age: 14 },
  { name: "ひつじ仙人", age: 100 },
  { name: "ベイビーわんこ", age: 5 },
];

for (let i = 0; i < characters.length; i += 1) {
  console.log("--------------------");

  const character = characters[i];

  console.log(`名前は${character.name}です`);

  console.log(`${character.age}歳です`);
}
