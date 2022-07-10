let target = Math.floor(Math.random() * 100) + 1;
let num;
let tries = 0

function isCloseToTarget(num) {
return num === target;
}

do {
 num =  guessNumber();
} while (!isCloseToTarget(num));


function guessNumber() {
  num = Math.floor(Math.random() * 100) + 1;
  if (isCloseToTarget(num)) {
    console.log(`You got it! in  ${tries} tries the target was ${target} `);
  } else {
    console.log(`You're  number ${num} not close enough`);
  }
  tries++;
  return (num)
} 

/* we will now build many function to sort an array of numbers, add comments to each step and log the test results to the console */
let testArray = [4,8, 42, 1, 23, 566,72, 22, 554, 6,232,0] // this is a test array of numbers

function selectionSort (sampleArray) {
  for (let i = 0; i < sampleArray.length; i++) {
    let min = i;
    for (let j = i + 1; j < sampleArray.length; j++) {
      if (sampleArray[j] < sampleArray[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = sampleArray[i];
      sampleArray[i] = sampleArray[min];
      sampleArray[min] = temp;
    }
  }
  return sampleArray;

}