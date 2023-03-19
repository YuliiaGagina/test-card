export const createNewNumber = number => {
  if (number.length <= 3) return number;
  let amountOfFollowers = number.split('');
  amountOfFollowers.splice(3, 0, ',');
  const newNumber = amountOfFollowers.join('');
  return newNumber;
};

// export const increaseAmount = previousnumber => {
//   const number = createNewNumber(previousnumber);
//   const increaseNumber =
//     number.slice(0, number.length - 1) + (Number(number.slice(-1)) + 1);
//   return increaseNumber;
// };
