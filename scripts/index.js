const bannerContainer = document.querySelector('.banner-container');

const banner = new Swiper(bannerContainer, {
    loop: true,
    pagination: {
        el: '.banner-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});

const products = document.querySelector('.products');

items.forEach(item => {
    const altImage = item.imgUrl.slice(6).split('.')[0];

    const getAvailability = (availability) => {
        return availability ? 'products__item-stock--check' : 'products__item-stock--close';
    };

    const getStateButton = (availability) => {
        return availability ? '' : 'disabled';
    };

    products.innerHTML += `
        <div class="products__item">
            <div class="products__item-top">
                <img class="products__item-image" src="./images/${item.imgUrl}" alt="${altImage}">
                <div class="products__item-box">
                    <h3 class="products__item-title">${item.name}</h3>
                    <p class="products__item-stock ${getAvailability(item.orderInfo.inStock)}">
                        <span>${item.orderInfo.inStock}&nbsp;</span>
                        left in stock
                    </p>
                    <p class="products__item-price">Price: <span>${item.price}</span> $</p>
                    <button class="products__item-add" ${getStateButton(item.orderInfo.inStock)}>Add to cart</button>
                    <button class="products__item-like"></button>
                </div>
            </div>
            <div class="products__item-bottom">
                <div class="products__item-reviews">
                    <div class="products__item-wrapper">
                        <p class="products__item-text"><span>${item.orderInfo.reviews}%</span> Positive reviews</p>
                        <p class="products__item-text">Above avarage</p>
                    </div>
                </div>
                <div class="products__item-orders">
                    <p class="products__item-text"><span>0</span></p>
                    <p class="products__item-text">orders</p>
                </div>
            </div>
        </div>
    `;
});

const filtersItemTop = document.querySelectorAll('.filters__item-top');

filtersItemTop.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('filters__item-top--active');
    });
});

const productsItemLike = document.querySelectorAll('.products__item-like');

productsItemLike.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('products__item-like--active');
    });
});

const prices = [...items].map(item => item.price)
               .filter((item, index, array) => array.indexOf(item) === index)
               .sort((a, b) => a - b);

const colors = [...items].map(item => item.color)
               .flat()
               .filter((item, index, array) => array.indexOf(item) === index)
               .sort();

const memory = [...items].map(item => item.storage)
               .filter((item, index, array) => typeof(item) === 'number' && array.indexOf(item) === index)
               .sort((a, b) => a - b);

const os = [...items].map(item => item.os)
           .filter((item, index, array) => typeof(item) === 'string' && array.indexOf(item) === index)
           .sort();

const displays = [...items].map(item => item.display)
                 .filter((item, index, array) => typeof(item) === 'number' && array.indexOf(item) === index)
                 .sort((a, b) => a - b);

console.log(prices);
console.log(colors);
console.log(memory);
console.log(os);
console.log(displays);

const filtersItemInputMin = document.querySelector('.filters__item-input.min');
const filtersItemInputMax = document.querySelector('.filters__item-input.max');

filtersItemInputMin.placeholder = prices[0];
filtersItemInputMax.placeholder = prices[prices.length - 1];

const filtersItemBoxColor = document.querySelector('.filters__item-box.color');

colors.forEach(item => {
    filtersItemBoxColor.innerHTML += `
        <label class="filters__item-label">
            <input type="checkbox" value="${item}">
            <span>${item}</span>
        </label>
    `;
});

const filtersItemBoxMemory = document.querySelector('.filters__item-box.memory');

memory.forEach(item => {
    filtersItemBoxMemory.innerHTML += `
        <label class="filters__item-label">
            <input type="checkbox" value="${item}">
            <span>${item} Gb</span>
        </label>
    `;
});

const filtersItemBoxOS = document.querySelector('.filters__item-box.os');

os.forEach(item => {
    filtersItemBoxOS.innerHTML += `
        <label class="filters__item-label">
            <input type="checkbox" value="${item}">
            <span>${item}</span>
        </label>
    `;
});

const filtersItemBoxDisplay = document.querySelector('.filters__item-box.display');

displays.forEach(item => {
    filtersItemBoxDisplay.innerHTML += `
        <label class="filters__item-label">
            <input type="checkbox" value="${item}">
            <span>${item} inch</span>
        </label>
    `;
});

const hidePreloader = () => {
    document.body.classList.remove('lock');
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader--hidden');

    const idTimeout = setTimeout(() => {
        preloader.remove();
    }, 200);

    clearTimeout(idTimeout);
    window.removeEventListener('load', hidePreloader);
};

window.addEventListener('load', hidePreloader);
