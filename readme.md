# Carrito de Compras

En todas las páginas del proyecto se ha implementado un carrito de compras, ubicado justo después del encabezado (`header`). A continuación, se describen los detalles de su estructura, errores conocidos y funcionalidades.

---

## Estructura

- **HTML**: Después del `header`, encontrarás la estructura del modal del carrito.
- **CSS**: Los estilos se encuentran en el archivo `carrito.css`.
- **JavaScript**: La funcionalidad está implementada en el archivo `carrito.js`.

**Nota importante:** No modifiques el código del carrito a menos que sea estrictamente necesario.

---

## Errores Conocidos

1. **Cierre del carrito**:
   - Actualmente, el carrito solo se puede cerrar usando el ícono de cierre (`X`). No se cierra al hacer clic en cualquier parte de la pantalla.

2. **Límite de ítems**:
   - El carrito no tiene un límite de ítems, lo que podría sobrecargar visualmente la página.
   - Para manejar esto, se implementó un `overflow: auto`, lo que permite mostrar un desplazable cuando el contenido supera el espacio del modal.
   - Los precios de los productos se suman automáticamente para mantener la interacción dinámica.

3. **Página de pago**:
   - Desde la página de pago, el carrito no se puede abrir debido a conflictos con clases iguales en el CSS.

4. **Tarjetas de Productos**:
   - ~~En el índice, las tarjetas de los productos solo funcionan como enlaces si se hace clic en el enlace al hacer hover.~~

5. **Estética inconsistente**:
   - Algunos elementos mantienen una estética no acorde con el resto del proyecto debido a conflictos con las propiedades de CSS. Si funciona correctamente, se recomienda dejarlo como está.

---

## Funcionalidades

1. **Acceso global al carrito**:
   - El carrito puede ser agregado y visualizado desde cualquier parte de la página donde esté presente el menú.
   - Se puede modificar la cantidad de ítems del carrito desde cualquier página donde esté presente el menú.

2. **Gestión en la página de pago**:
   - Es posible agregar y quitar productos directamente desde la página de pago.

3. **Sumatoria de precios**:
   - Los precios de los productos se suman automáticamente para facilitar la interacción.

4. **Modularidad**:
   - El código está modulado para minimizar errores relacionados con clases iguales.
   - Para usar el carrito en cualquier página, solo necesitas copiar la estructura HTML y enlazar los archivos `carrito.css` y `carrito.js`.

5. **Animaciones**:
   - Se han incluido animaciones en la página de misión y visión. Si deseas eliminarlas, solo elimina el archivo `animaciones.js`.

6. **Compra**:
   - Se ha incluido tres formularios, uno debajo del otro, con validaciones. Todos los datos se almacenan y se muestran en la página de resumen.
     
7. **Enlaces**:
   - Ahora las cartas del Index ya funcionan como enlaces.
---

## Terminados

- **Index**: Terminado.
- **Guitarras**: Terminado.
- **Prouctos en general**: terminado.
- **Misión y Visión**: Terminado.

---

## Por Terminar

- **Responsive en todas las páginas**.
- ~~**Todas las páginas de productos, excepto Guitarras**.~~
- ~~**Página de Contacto**.~~
- ~~**Linkeo del menú y footer**.~~
- ~~**Página de pago**: Terminado solo hasta el detalle del carrito.~~
- **Página de resumen de compra**.

---

## Advertencias

- **Propiedad `display: flex`**: Por favor, no modifiques nada que tenga la propiedad `display: flex`, ya que es fundamental para la estructura y diseño de muchas partes de la página. Cualquier cambio podría causar problemas de visualización o funcionalidad.
- **Estética inconsistente**: Algunos elementos pueden no tener la misma estética que otros debido a conflictos con las propiedades de CSS. Si algo está funcionando correctamente, es mejor dejarlo como está para evitar romper el diseño.
