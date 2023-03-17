function createNewNumber(number) {
  let amountOfFollowers = number.split('');
  amountOfFollowers.splice(3, 0, ',');
  const newNumber = amountOfFollowers.join('');
  return newNumber;
}

export default createNewNumber;
