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
// Task 3
const id = [3, 5, 7, 12, 32, 56, 76, 81, 90, 103];
const container = document.querySelector('.container');
const inputs = document.querySelectorAll('.checkbox-container input');

inputs.forEach(item => {
  item.addEventListener('click', (e) => {
    const currentInput = e.target;

    inputs.forEach(item => {
      item.checked = false;
    })

    currentInput.checked = true;

    if (currentInput.checked) {
      filterСharacters(currentInput.id);
    }
  });
});

function addCards(characters) {
  container.innerHTML = '';

  const getStatus = (condition) => condition === 'Dead' ? 'live-status dead' : 'live-status';

  characters.forEach(character => {
    container.innerHTML += `
        <div class="card">
            <div class="card-info">
                <div class="title">
                    <h1>${character.name}</h1>
                    <div class="status">
                        <div class="${getStatus(character.status)}"></div>
                        <p>${character.species} -- ${character.status}</p>
                    </div>
                </div>
                <div class="content">
                    <p>${character.location.name}</p>
                </div>
            </div>
            <div class="card-image">
                <img src="${character.image}" alt="Image">
            </div>
        </div>
    `;
  });
};

async function filterСharacters(type) {
  let url = 'https://rickandmortyapi.com/api/character/';

  switch(type) {
    case 'male':
      url += '?gender=male'
      break;
    case 'female':
      url += '?gender=female'
      break;
    case 'alive':
      url += '?status=alive'
      break;
    case 'dead':
      url += '?status=dead'
      break;
  }

  const response = await fetch(url);
  const data = await response.json();

  addCards(data.results);
}

async function getСharactersById(...id) {
  const url = 'https://rickandmortyapi.com/api/character/';
  const response = await fetch(`${url}${id}`);
  const data = await response.json();

  if (!arguments.length) {
    addCards(data.results);
  } else {
    addCards([data].flat());
  }
}

getСharactersById(id);
