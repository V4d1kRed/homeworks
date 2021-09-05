// Task 1
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const number = Math.floor(Math.random() * 6) + 1;

    if (number === 6) {
      reject(`Exit`);
    } else {
      console.log(`Start the game...`);
      resolve(number);
    }
  }, 2000);
});

promise
  .then(response => {
    if (response != 1) {
      console.log(`Go ${response} steps`);
    } else {
      console.log(`Stay here`);
    }
  })
  .catch(error => console.log(error));
