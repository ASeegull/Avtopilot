const storage = {
oil: {
    category: "Мастила",
    description: "Це текст про мастила adipisicing elit. Possimus beatae, modi a quis, dignissimos sequi nobis qui dolorum optio, error ducimus iste eaque amet saepe hic suscipit officia quisquam molestias?"
},
battery: {
    category: "Акумулятори",
    description: "Це текст про акумулятори adipisicing elit. Possimus beatae, modi a quis, dignissimos sequi nobis qui dolorum optio, error ducimus iste eaque amet saepe hic suscipit officia quisquam molestias?"
},
chemie: {
    category: "Автохімія",
    description: "Це текст про автохімію adipisicing elit. Possimus beatae, modi a quis, dignissimos sequi nobis qui dolorum optio, error ducimus iste eaque amet saepe hic suscipit officia quisquam molestias?" 
},
color: {
    category: "Фарби",
    description: "Це текст про фарби adipisicing elit. Possimus beatae, modi a quis, dignissimos sequi nobis qui dolorum optio, error ducimus iste eaque amet saepe hic suscipit officia quisquam molestias?"  
}
};


const cache = {
    categoryList: document.querySelectorAll('[data-category]'),
    category: document.getElementById('category'),
    description: document.getElementById('description'),
    brands: document.querySelectorAll('.brands img'),
    categoryItem: document.getElementById('categoryItem')
}

cache.categoryList.forEach(item => item.addEventListener('click', selectCategory, false));


function selectCategory(e) {
    e.preventDefault();
    let selectedCategory = e.target.getAttribute('data-category');
    let data = storage[selectedCategory];
    changeText(data);
    changePics(selectedCategory);
}

function changeText(data) {
    cache.category.innerText = data.category;
    cache.description.innerText = data.description;    
}

function changePics(selectedCategory) {
    cache.brands.forEach((brand, i) => brand.setAttribute('src', `./assets/images/${selectedCategory}/logo_${i}.jpg`));
    cache.categoryItem.setAttribute('src', `./assets/images/${selectedCategory}/item.jpg`);
}
