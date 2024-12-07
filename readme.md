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

1. **Cierre del carrito:**

   - Actualmente, el carrito solo se puede cerrar usando el ícono de cierre (`X`). No se cierra al hacer clic en cualquier parte de la pantalla.

2. **Límite de ítems:**

   - El carrito no tiene un límite de ítems, lo que podría sobrecargar visualmente la página.
   - Para manejar esto, se implementó un `overflow: auto`, lo que permite mostrar un desplazable cuando el contenido supera el espacio del modal.
   - Los precios de los productos se suman automáticamente para mantener la interacción dinámica.

3. **Página de pago:**

   - Desde la página de pago, el carrito no se puede abrir debido a conflictos con clases iguales en el CSS.

4. **Tarjetas de Productos:**

   - ~~En el index las tarjetas de los productos solo funcionan como enlaces si se le da click al enlace al hacer hover.~~


## Funcionalidades 

1. **Acceso global al carrito:**

   - El carrito podrá ser agregado y visualizado desde cualquier parte de la página donde esté presente el menú.
   - Se puede modificar la cantidad de Items del carrito desde cualquier pagina donde este presente el menú.

2. **Gestión en la página de pago:**

   - Es posible agregar y quitar productos directamente desde la página de pago.

3. **Sumatoria de precios:**

   - Los precios de los productos seguirán sumándose automáticamente para facilitar la interacción.

4. **Modularidad:**

   - El código está modulado para minimizar errores relacionados con clases iguales.
   - Para usar el carrito en cualquier página, solo necesitas copiar la estructura HTML, y enlazar los archivos `carrito.css` y `carrito.js`.


5. **Animaciones:**

   -Se han includio animaciones en la pagina de mision y vision si deseas eliminarlas solo elimina el archivo animaciones.js
---

## Terminado 
-index Terminado
-Guitarras Terminado
-Mision Vision Terminado

## Por Terminar
-Responsive en todas las Paginas 
-Todas las paginas de los productos menos guitarras 
-Contacto
-linkeo del menu y footer 
-pagina de pago //terminado solo hasta el detalle de carrito