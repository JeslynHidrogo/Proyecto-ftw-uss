/*///////////////////////////////////////////////////////////////////////*/
/*///////////////Evitar seleccion Multiple de metodos de pago////////////*/
/*///////////////////////////////////////////////////////////////////////*/
function togglePaymentMethod(checkbox, method) {
    const methods = ['yape', 'plin', 'card'];
    methods.forEach(m => {
        if (m !== method) {
            document.getElementById(m).checked = false;
            document.getElementById(m + 'QRCode').style.display = 'none';
            document.getElementById(m + 'Form').style.display = 'none';
        }
    });

    if (checkbox.checked) {
        if (method === 'yape') {
            document.getElementById('yapeQRCode').style.display = 'block';
        } else if (method === 'plin') {
            document.getElementById('plinQRCode').style.display = 'block';
        } else if (method === 'card') {
            document.getElementById('cardForm').style.display = 'block';
        }
    }
}

/*///////////////////////////////////////////////////////////////////////*/
/*///////////////Mostrar Carrito al cargar la página/////////////////////*/
/*///////////////////////////////////////////////////////////////////////*/

// Recupera los datos del carrito desde el almacenamiento local o inicializa un carrito vacío
const cart = JSON.parse(localStorage.getItem('cart')) || [];
// Referencia al contenedor donde se mostrarán los elementos del carrito
const cartDetails = document.getElementById('cartDetails');
// Referencia al elemento donde se mostrará el precio total
const totalPriceElement = document.getElementById('totalPrice');
let totalPrice = 0; // Variable para almacenar el precio total del carrito

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
    // Limpia el contenido del contenedor de detalles del carrito
    cartDetails.innerHTML = '';
    totalPrice = 0; // Reinicia el total del precio

    // Itera sobre cada ítem en el carrito y lo agrega a la vista
    cart.forEach((item, index) => {
        // Calcula el total acumulado sumando el precio de cada ítem multiplicado por su cantidad
        totalPrice += item.price * item.quantity;

        // Crea un div para mostrar cada ítem del carrito
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>
                    <span class="label">Precio:</span> 
                    <span class="value">S/${item.price.toFixed(2)}</span>
                </p>
            </div>

            <div class="cart-item-controls">
                <div class="quantity-label">
                    <span class="label">Cantidad</span>
                </div>
                <div class="quantity-controls">
                    <!-- Botón para disminuir la cantidad de un ítem -->
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <!-- Muestra la cantidad actual del ítem -->
                    <span class="value">${item.quantity}</span>
                    <!-- Botón para aumentar la cantidad de un ítem -->
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>
                <!-- Botón para eliminar el ítem del carrito -->
                <button onclick="removeItem(${index})">Eliminar</button>
            </div>
        `;

        // Agrega el ítem creado al contenedor de detalles del carrito
        cartDetails.appendChild(itemDiv);
    });

    // Actualiza el elemento que muestra el total a pagar
    totalPriceElement.innerHTML = `<span class="total-label">Total a pagar:</span> <span class="total-value">S/${totalPrice.toFixed(2)}</span>`;

    // Guarda el carrito actualizado en el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para disminuir la cantidad de un ítem en el carrito
function decreaseQuantity(index) {
    // Verifica si la cantidad es mayor a 1 para disminuirla o elimina el ítem si es 1
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        removeItem(index);
    }
    // Actualiza la visualización después de cambiar la cantidad
    updateCartDisplay();
}

// Función para aumentar la cantidad de un ítem en el carrito
function increaseQuantity(index) {
    cart[index].quantity++;
    // Actualiza la visualización después de cambiar la cantidad
    updateCartDisplay();
}

// Función para eliminar un ítem del carrito
function removeItem(index) {
    // Elimina el ítem del carrito por su índice
    cart.splice(index, 1);
    // Actualiza la visualización después de eliminar el ítem
    updateCartDisplay();
}

updateCartDisplay();



/*///////////////////////////////////////////////////////////////////////////////////////////*/
/*//////////////////////////////Formularios/////////////////////////////////////////////////*/
/*/////////////////////////////////////////////////////////////////////////////////////////*/

// Variables de pasos osea para pasar de un div a otro,
//hay 3 divs uno debajo de otro en los formularios pero solo se
//muestra 1 en 100% de alto y los demas los escondemos con esto nos movemos de 1 form a otro
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

// Botones de navegación
document.addEventListener('DOMContentLoaded', () => {
    // Cargar los datos del almacenamiento local al cargar la página, los datos del formulario de cliente
    //esto se hace con LOCALSTORAGE
    const savedData = JSON.parse(localStorage.getItem('clientData'));
    if (savedData) {
        document.getElementById('name').value = savedData.name;
        document.getElementById('email').value = savedData.email;
        document.getElementById('phone').value = savedData.phone;
    }
});

document.getElementById('next1').onclick = () => {
    const form = document.getElementById('clientForm');
    if (form.checkValidity()) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        localStorage.setItem('clientData', JSON.stringify({ name, email, phone }));
        step1.style.display = 'none';
        step2.style.display = 'block';
    } else {
        form.reportValidity();
    }
};


document.getElementById('prev2').onclick = () => {
    step2.style.display = 'none';
    step1.style.display = 'block';
};

document.getElementById('next2').onclick = () => {
    step2.style.display = 'none';
    step3.style.display = 'block';
};

document.getElementById('prev3').onclick = () => {
    step3.style.display = 'none';
    step2.style.display = 'block';
};




/*////////////////////////////////////////////////////////////////////////////////////////*/
/*//////////////////////////pPARA SELECIONAR LOS METODOS DE PAGO//////////////////////////*/
/*////////////////////////////////////////////////////////////////////////////////////////*/
const methods = document.querySelectorAll('.method');
methods.forEach(method => {
    method.onclick = () => {
        // Quitamos la clase 'active' de todos los métodos
        methods.forEach(m => m.classList.remove('active'));
        // Agregamos la clase 'active' al método seleccionado
        method.classList.add('active');

        // Mostramos los detalles de pago correspondientes
        const paymentDetails = document.getElementById('paymentDetails');
        if (method.id === 'yape') {
            paymentDetails.innerHTML = '<p>Escanea el siguiente QR para pagar con Yape:</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png" />';
        } else if (method.id === 'plin') {
            paymentDetails.innerHTML = '<p>Escanea el siguiente QR para pagar con Plin:</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" />';
        } else {
            paymentDetails.innerHTML = `
                <p>Introduce los datos de tu tarjeta:</p>
                <div class="card-info">
                    <input type="text" class="card-number" placeholder="Número de tarjeta" 
                           pattern="\\d{4} \\d{4} \\d{4} \\d{4}" maxlength="19" 
                           title="Introduce un número de tarjeta válido (ej. 1234 5678 9101 1121)" required />
                </div>
                <div class="card-details">
                    <input type="date" class="expiry-date" placeholder="Fecha de vencimiento" required />
                    <input type="text" class="cvv" placeholder="CVV" 
                           pattern="\\d{3}" maxlength="3" 
                           title="Introduce un CVV de 3 dígitos" required />
                </div>
            `;
        }
    };
});

// Establecemos que Yape sea la opción activa por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const defaultMethod = document.getElementById('yape');
    defaultMethod.classList.add('active');

    const paymentDetails = document.getElementById('paymentDetails');
    paymentDetails.innerHTML = '<p>Escanea el siguiente QR para pagar con Yape:</p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png" />';
});




/*////////////////////////////////////////////////////////////////////////////////////////*/
/*//////////////////////////PARA SELECIONAR TIPO DE ENTREGA///////////////////////////////*/
/*////////////////////////////////////////////////////////////////////////////////////////*/

// Seleccionamos las opciones de tipo de entrega
const options = document.querySelectorAll('.option');
options.forEach(option => {
    option.onclick = () => {
        // Quitamos la clase 'active' de todas las opciones
        options.forEach(o => o.classList.remove('active'));
        // Agregamos la clase 'active' a la opción seleccionada
        option.classList.add('active');

        // Mostramos los detalles de entrega correspondientes
        const deliveryDetails = document.getElementById('deliveryDetails');
        if (option.id === 'delivery') {
            deliveryDetails.innerHTML = '<p>Introduce tu dirección:</p><input type="text" placeholder="Dirección completa" />';
        } else {
            deliveryDetails.innerHTML = '<p>La dirección de la tienda es: Calle Ejemplo 123.</p>';
        }
    };
});

// Establecemos que la opción de 'delivery' sea la activa por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const defaultOption = document.getElementById('delivery');
    defaultOption.classList.add('active');

    const deliveryDetails = document.getElementById('deliveryDetails');
    deliveryDetails.innerHTML = '<p>Introduce tu dirección:</p><input type="text" placeholder="Dirección completa" />';
});


/*////////////////////////////////////////////////////////////////////////////////////////*/
/*/PARA ENVIAR LOS DATOS DEL CARRITO Y DATOS DE USUARIO A LA SIGUIENTE PAGINA DE RESUMEN//*/
/*////////////////////////////////////////////////////////////////////////////////////////*/

document.getElementById('submit').onclick = () => {
    const clientData = JSON.parse(localStorage.getItem('clientData'));
    const paymentMethod = document.querySelector('.method.active')?.id || '';
    const deliveryType = document.querySelector('.option.active')?.id || '';

    if (paymentMethod && deliveryType) {
        localStorage.setItem('finalData', JSON.stringify({ ...clientData, paymentMethod, deliveryType }));
        window.location.href = '../html/resumen.html';
    } else {
        alert('Por favor, selecciona un método de pago y tipo de entrega.');
    }
};
