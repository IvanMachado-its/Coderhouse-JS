// Lista de productos (simulación de datos)
const products = [
    { id: 1, name: 'Promesa Potente', description: 'Descripción del producto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20.00 },
    { id: 2, name: 'Función Flexible', description: 'Descripción del producto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 15.00 },
    { id: 3, name: 'Variable Veloz', description: 'Descripción del producto 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 25.00 },
    // Agrega más productos según sea necesario
];

// Carrito de compras (simulación de datos)
let cart = [];

// Función para renderizar la lista de productos
function renderProductList() {
    const productListElement = document.getElementById('product-list');
    productListElement.innerHTML = '';

    products.forEach(product => {
        const productCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-img"><div class="img"></div></div>
                    <div class="card-title">${product.name}</div>
                    <div class="card-subtitle">${product.description}</div>
                    <hr class="card-divider">
                    <div class="card-footer">
                        <div class="card-price"><span>$</span> ${product.price.toFixed(2)}</div>
                        <button class="card-btn" onclick="addToCart(${product.id})">
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                                <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        productListElement.innerHTML += productCard;
    });
}

// Función para agregar un producto al carrito desde la lista de productos
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Función para quitar un producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Función para actualizar el contenido del carrito
function updateCart() {
    const cartElement = document.getElementById('cart');
    const totalElement = document.getElementById('total');
    let cartHtml = '';
    let total = 0;

    cart.forEach((product, index) => {
        cartHtml += `
            <li class="list-group-item">
                <span>${product.name} - $${product.price.toFixed(2)}</span>
                <button class="btn btn-danger btn-sm float-right" onclick="removeFromCart(${index})">Quitar</button>
            </li>`;
        total += product.price;
    });

    cartElement.innerHTML = cartHtml;
    totalElement.innerText = total.toFixed(2);
}

// Función para simular el proceso de pago
function checkout() {
    alert('¡Gracias por tu compra!');
    cart = [];
    updateCart();
}

// Inicializar la lista de productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderProductList();
});
