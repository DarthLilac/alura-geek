document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');

    const products = [
        { name: 'Stormtrooper', price: 60.00, image: 'stormtrooper.jpg' },
        { name: 'Game Boy Classic', price: 60.00, image: 'gameboy.jpg' },
        // Adicione mais produtos se necessário
    ];

    function displayProducts() {
        productList.innerHTML = '';
        products.forEach((product, index) => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$ ${product.price.toFixed(2)}</p>
            `;
            productList.appendChild(productElement);
        });
    }

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('product-name').value;
        const price = parseFloat(document.getElementById('product-price').value);
        const image = document.getElementById('product-image').value;
        const newProduct = { name, price, image };
        products.push(newProduct);
        displayProducts();
        productForm.reset();
    });

    displayProducts();
});