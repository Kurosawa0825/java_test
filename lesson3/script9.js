const toMinutes = (hour, minute) => {
  return hour * 60 + minute;
};

const result = toMinutes(3, 20);

console.log(`${result}分`);
