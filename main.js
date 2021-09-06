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
// Task 2
const vegetables = ['Potato', 'Tomato', 'Carrot', 'Cabbage', 'Pepper', 'Hot', 'Eggplant', 'Cauliflower'];

function goToShop(arr) {
  return new Promise((resolve, reject) => resolve(arr.length));
}

function makeDinner() {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve('Bon Appetit');
    }, 3000);
  });
}

goToShop(vegetables)
  .then(length => {
    if (length >= 4) {
      makeDinner()
        .then(response => console.log(response))
    } else {
      return new Promise((resolve, reject) => reject('Too low products'));
    }
  })
  .catch(error => {
    throw new ValidationError(error);
  })

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Product Error';
  }
}
