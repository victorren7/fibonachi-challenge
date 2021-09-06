function handleFibonachi(limit) {
  let a = 1;
  let b = 2;

  let nextValue = a + b;
  let fibArray = [];

  while (nextValue < limit) {

    if (nextValue % 2 === 0) {
      fibArray.push(nextValue);
    }

    a = b;
    b = nextValue;
    nextValue = a + b;

  };

  return fibArray;
};

function handleSum(number) {
  let sum = 0;
  const fibonachiArray = handleFibonachi(number);

  for (let i = 0; i < fibonachiArray.length; i++) {
    sum += fibonachiArray[i];

  }

  console.log(sum)
  return sum;
};

handleSum(4000000);