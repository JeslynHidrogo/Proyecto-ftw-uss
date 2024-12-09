// Obtener los datos del cliente y del carrito desde localStorage
const clientData = JSON.parse(localStorage.getItem('finalData')) || {};
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Mostrar detalles del cliente
const userDetails = document.getElementById('userDetails');
if (clientData.name && clientData.email && clientData.phone) {
    userDetails.innerHTML = `
        <h2>Detalles del Cliente</h2>
        <p><strong>Nombre:</strong> ${clientData.name}</p>
        <p><strong>Email:</strong> ${clientData.email}</p>
        <p><strong>Teléfono:</strong> ${clientData.phone}</p>
        <p><strong>Método de pago:</strong> ${clientData.paymentMethod || 'No seleccionado'}</p>
        <p><strong>Tipo de entrega:</strong> ${clientData.deliveryType || 'No seleccionado'}</p>
        <button id="generatePDF">Generar PDF</button>
        <button id="regresar">Regresar</button>
    `;
} else {
    userDetails.innerHTML = '<p>No se encontraron detalles del cliente.</p>';
}

document.getElementById('regresar').addEventListener('click', function () {
    window.location.reload();
});




// Mostrar detalles del carrito
const cartDetails = document.getElementById('cartDetails');
if (cart.length > 0) {
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;">
            <div>
                <h3>${item.name}</h3>
                <p><strong>Precio:</strong> S/${item.price.toFixed(2)}</p>
                <p><strong>Cantidad</strong>: ${item.quantity}</p>
                <p><strong>Total</strong> : S/${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        `;
        cartDetails.appendChild(itemDiv);
    });

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalPriceDiv = document.createElement('div');
    totalPriceDiv.innerHTML = `<h4>Total: S/${totalPrice.toFixed(2)}</h4>`;
    cartDetails.appendChild(totalPriceDiv);
} else {
    cartDetails.innerHTML = '<p>No hay artículos en el carrito.</p>';
}

// Generar el PDF
document.getElementById('generatePDF')?.addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF();
    pdf.setFont('helvetica', 'normal');

    try {
        // Agregar logo si existe
        const logoImg = "../img/logo.png"; // Ruta local
        const logo = await loadImage(logoImg);
        pdf.addImage(logo, 'PNG', 10, 10, 50, 20); // x, y, width, height
    } catch (err) {
        console.error('Error al cargar el logo:', err.message);
    }

    // Agregar título
    pdf.setFontSize(16);
    pdf.setTextColor(0, 0, 255); // Azul
    pdf.text('Resumen de Pedido', 10, 40);

    // Agregar datos del cliente
    let yPosition = 50;
    pdf.setTextColor(0, 0, 0); // Negro
    if (clientData.name) {
        pdf.setFontSize(12);
        pdf.text(`Nombre: ${clientData.name}`, 10, yPosition);
        yPosition += 10;
        pdf.text(`Email: ${clientData.email}`, 10, yPosition);
        yPosition += 10;
        pdf.text(`Teléfono: ${clientData.phone}`, 10, yPosition);
        yPosition += 10;
        pdf.text(`Método de pago: ${clientData.paymentMethod || 'No seleccionado'}`, 10, yPosition);
        yPosition += 10;
        pdf.text(`Tipo de entrega: ${clientData.deliveryType || 'No seleccionado'}`, 10, yPosition);
        yPosition += 10;
    } else {
        pdf.setFontSize(12);
        pdf.text('No se encontraron detalles del cliente.', 10, yPosition);
        yPosition += 10;
    }

    // Agregar detalles del carrito
    yPosition += 10;
    if (cart.length > 0) {
        pdf.setFontSize(14);
        pdf.setTextColor(0, 100, 0); // Verde oscuro
        pdf.text('Detalles del Carrito:', 10, yPosition);
        yPosition += 10;

        pdf.setLineWidth(0.5);
        pdf.setDrawColor(0, 0, 0); // Negro
        cart.forEach(item => {
            if (yPosition > 270) {
                pdf.addPage();
                yPosition = 10;
            }
            pdf.setFontSize(12);
            pdf.setTextColor(0, 0, 0);
            pdf.text(`Producto: ${item.name}`, 10, yPosition);
            yPosition += 10;
            pdf.text(`Precio: S/${item.price.toFixed(2)}`, 10, yPosition);
            yPosition += 10;
            pdf.text(`Cantidad: ${item.quantity}`, 10, yPosition);
            yPosition += 10;
            pdf.text(`Total por producto: S/${(item.price * item.quantity).toFixed(2)}`, 10, yPosition);
            yPosition += 20;
        });

        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        pdf.setFontSize(14);
        pdf.setTextColor(255, 0, 0); // Rojo
        pdf.text(`Total del Carrito: S/${totalPrice.toFixed(2)}`, 10, yPosition);
    } else {
        pdf.setFontSize(12);
        pdf.text('No hay artículos en el carrito.', 10, yPosition);
    }

    // Descargar el PDF
    pdf.save('resumen_pedido.pdf');
});

// Cargar imagen desde la ruta
function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('No se pudo cargar la imagen.'));
        img.src = url;
    });
}

