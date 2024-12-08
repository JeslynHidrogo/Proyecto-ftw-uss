let cart = JSON.parse(localStorage.getItem('cart')) || [];

function toggleModal() {
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    displayCart();
}

function addToCart(card) {
    const productId = card.getAttribute('data-id');
    const productName = card.querySelector('h2').textContent;
    const productPrice = parseFloat(card.querySelector('p').textContent.replace('S/', '').trim());
    const productImage = card.querySelector('img').src;

    const product = {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };

    const existingProductIndex = cart.findIndex(item => item.id === productId);
    if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity++;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    toggleModal(); // Muestra el modal al agregar un producto
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('gtr-card');
        itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="details">
                    <h3>${item.name}</h3>
                    <p>Precio: S/${item.price.toFixed(2)}</p>
                    <div class="quantity-selector">
                        <button onclick="changeQuantity('${item.id}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity('${item.id}', 1)">+</button>
                    </div>
                </div>
            `;
        cartItems.appendChild(itemDiv);
    });

    totalPriceElement.textContent = `Total: S/${totalPrice.toFixed(2)}`;
}

function changeQuantity(productId, change) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex >= 0) {
        cart[productIndex].quantity += change;
        if (cart[productIndex].quantity <= 0) {
            cart.splice(productIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}

function checkout() {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = '../html/pago.html';

}



function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
}

