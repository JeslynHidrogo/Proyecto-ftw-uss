## Login Y registro
Las páginas de **Login** y **Register** comparten la misma estructura base en HTML y CSS. Ambas están diseñadas con `flexbox` para alinear y centrar los elementos de manera responsiva. La principal diferencia entre ambas radica en la posición de los elementos, que se controla mediante las propiedades `flex-direction` y `justify-content`.

---

## Login

### Estructura
La página de **Login** está compuesta por dos secciones principales dentro de un contenedor flexible:
1. **Div izquierdo:**
   - Contiene el logo, un mensaje de bienvenida y un enlace que redirige a la página de registro.
2. **Div derecho:**
   - Incluye el formulario de inicio de sesión, con campos para el correo electrónico, la contraseña y un botón de envío.

### Estilos
- Se utiliza `flexbox` para dividir la pantalla en dos columnas:
  - **Columna izquierda:** Contiene información visual y textual.
  - **Columna derecha:** Contiene el formulario.
- El contenedor principal está configurado con:
  - `display: flex;`
  - `flex-direction: row;` (por defecto).
  - `justify-content: space-between;` para distribuir los elementos.
  - `align-items: center;` para centrar verticalmente.

### Responsividad
- En pantallas pequeñas, las dos secciones se apilan una debajo de la otra.
- Para lograr esto, se utiliza:
  - `flex-direction: column;` para que el enlace de registro quede debajo añadimos 'reverse' 
  `flex-direction: column-reverse;` 
  - Los elementos mantienen su alineación centrada.

---

## Register

### Estructura
La página de **Register** tiene la misma estructura que la de **Login**, pero con los elementos principales en posiciones inversas:
1. **Div izquierdo:** Contiene el formulario de registro, con campos para nombre completo, correo electrónico, contraseña y un botón para registrarse.
2. **Div derecho:** Contiene el logo, un mensaje de bienvenida y un enlace para redirigir a la página de inicio de sesión.

### Estilos
- La disposición de las columnas se invierte utilizando:
  - `flex-direction: row-reverse;` en el contenedor principal.
- Los elementos se mantienen alineados y distribuidos como en la página de Login.

### Responsividad
- Al igual que en el **Login**, en pantallas pequeñas los elementos se apilan verticalmente.
- Para lograr esto, se utiliza:
  - `flex-direction: column-reverse;` para mantener el formulario debajo del contenido informativo.

---

## Estilos compartidos
Ambas páginas comparten una hoja de estilos base para mantener la consistencia:
- El contenedor principal utiliza `flexbox` para el diseño y la alineación.
- Las propiedades como colores, tipografía y espaciados están centralizadas en esta hoja de estilos 

<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->

## Index

## Menú

### Estructura
El menú está dividido en dos secciones principales:
1. **Menú superior:**
   - Contiene los íconos de redes sociales.
   - Este menú es opcional y se oculta en dispositivos móviles para evitar distracciones.
2. **Menú principal:**
   - Contiene:
     - logos y enlaces

### Estilos
- El menú utiliza `flexbox` para alinear y distribuir los elementos horizontalmente.
- **Menú superior:** Configurado con `display: none;` en pantallas pequeñas para ocultarlo.
- **Menú principal:**
  - El logo permanece centrado.
  - Los enlaces de navegación se transforman en un menú hamburguesa, posicionado con `position: absolute`, `top` y `right`.
  - El carrito y el login están posicionados en línea, entre el logo y el menú hamburguesa.

### Responsividad
- **Menú superior:** Se oculta con media queries.
- **Menú principal:** En pantallas pequeñas:
  - El logo permanece fijo en el centro.
  - Los enlaces de navegación se colapsan en un menú hamburguesa (`display: none;` -> `display: block;` al activar).
  - El carrito y el ícono de login se posicionan con `absolute` para mantenerse alineados.

---

## Slider

### Estructura
- Implementado con la librería **Swiper**, lo que facilita la creación de un carrusel de imágenes o contenido.
- El slider ocupa el ancho completo de la página y es completamente responsivo. en slider.js puedes configurar sus funcionalidades, las cuales son proporcionadas por la libreria

## Sección de Productos

### Estructura
La página incluye dos grupos de cartas de productos:
1. **Grupo superior:** 4 cartas.
2. **Grupo inferior:** 6 cartas.

### Estilos
- Cada grupo utiliza `flexbox` para:
  - Alinear las cartas en filas.
  - Configurar `flex: 1` para que las cartas ocupen el espacio proporcionalmente.
  - Habilitar `flex-wrap` para que las cartas se acomoden automáticamente en nuevas filas si no caben en una sola.

### Responsividad
- En pantallas pequeñas, las cartas se organizan automáticamente en una sola columna o en filas reducidas gracias a las propiedades `flex-wrap` y `flex-basis`.

---

## Footer

### Estructura
El footer está diseñado en una sola fila que contiene varias secciones, como enlaces y datos de contacto.

### Estilos
- Utiliza `flexbox` para alinear los elementos en fila.
- En dispositivos móviles, se cambia a disposición en columna con `flex-direction: column;`.

---

<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->

## Misión y Visión

## Estructura

- La página está dividida en secciones cada seccion dentro de un contenedor flex, primero se alinean en fila y para responsive en columna usando flex-wrap para que sea automatico

### Estilos
- Se utiliza `flexbox` para distribuir las secciones de manera horizontal en pantallas grandes.
- Cada sección está contenida en un `div` que puede incluir un título, párrafo y lista de puntos (en el caso de la sección de valores).
  
### Responsividad
- En pantallas pequeñas, el `flexbox` se adapta automáticamente para organizar las secciones en una columna vertical mediante `flex-direction: column;`.
- Las propiedades `flex` y `flex-wrap` garantizan que los elementos dentro de cada sección se ajusten bien y mantengan una disposición clara.

---

## Estilos

Cada sección es un `flex container` y utiliza las siguientes propiedades:
- `display: flex;` para aplicar el modelo de flexbox.
- `flex-direction: row;` en pantallas grandes para alinear los elementos en una fila.
- `flex-direction: column;` en pantallas pequeñas para que los elementos se apilen verticalmente.
- `justify-content: space-between;` para distribuir el contenido de manera equitativa.

<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->

## Productos
Cada página de producto contiene los siguientes elementos:
1. **Contenedor principal** que organiza las cards de los productos usando `flexbox`.
2. **Cards de productos:**
   - los contenedores, osea las tarjetas de los productos
3. **Modal del carrito:**
   - Muestra los productos que el usuario ha agregado al carrito.
   - Los productos se almacenan y recuperan desde el **localStorage**.

### Estilos
- Flex para todo, flex para alinear, gap: para margenes, flex:1 para que ocupen el mismo espacio, flex-wrap: wrap para responsive automatico

### Responsividad
- Las **cards de productos** se adaptan automáticamente a pantallas más pequeñas utilizando `flexbox`:
  - En pantallas grandes, las cards se distribuyen en varias columnas.
  - En pantallas pequeñas, las cards se apilan una debajo de la otra.
- En pantallas móviles:
  - Se utiliza `flex-direction: column;` en el contenedor principal de las cards para que se muestren en una sola columna.

<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->

## Pantalla de Pago
La pantalla de pago está dividida en dos secciones principales:
1. **Resumen del carrito**: En la parte izquierda, donde se muestra un resumen de los productos seleccionados, con sus nombres, cantidades y precios. 

IMPORTANTE los productos del carrito se recuperan desde el localStorage

2. **Formulario de pago**: En la parte derecha, donde el usuario puede ingresar los detalles de pago, como la información de la tarjeta y la dirección de facturación.

Ambas secciones están organizadas utilizando **flexbox** para garantizar una disposición clara y responsiva.

---

### Estilos
- Se usa `display: flex;` en el contenedor principal para colocar las dos secciones lado a lado.
- Cada sección (resumen y formulario) tiene un `flex: 1` para ocupar el mismo espacio disponible.
- Los elementos dentro de cada sección se alinean usando `flexbox`:
  - En la sección de resumen, los productos se enumeran de manera vertical.
  - En la sección de formulario, los campos se organizan en filas.

### Responsividad
- En pantallas pequeñas, se cambia la disposición para que las dos secciones se apilen una encima de la otra usando `flex-direction: column;`.
- Los campos del formulario se ajustan automáticamente a pantallas más pequeñas, y los elementos del resumen también se reordenan y redimensionan adecuadamente.

<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->

## Resumen de Pago
La pantalla de resumen de pago consta de dos contenedores, cada uno con una altura del **100vh** para cubrir toda la pantalla. La primera pantalla muestra un mensaje de agradecimiento por la compra, con un botón para ver los detalles de la compra. Al hacer clic en el botón de "Detalles", el usuario es desplazado a la segunda pantalla, donde se muestran los detalles de la compra, los datos del usuario y el carrito. También incluye un botón para regresar a la primera pantalla y un botón para descargar el resumen de la compra en formato PDF.

La estructura se organiza utilizando **flexbox** para asegurar que todos los elementos se ajusten correctamente en pantallas pequeñas y grandes.

### Estilos
- Se utilizan dos contenedores con `height: 100vh;` para asegurar que cada pantalla ocupe toda la altura de la ventana.
- Los contenedores usan `overflow: hidden;` para evitar el desbordamiento de contenido.
- **Flexbox** se emplea para alinear y centrar los elementos en ambas pantallas de manera flexible.
- El contenido en la pantalla 1 se mantiene centrado, mientras que en la pantalla 2 los detalles se organizan en filas y columnas.

### Responsividad
- **Pantalla 1**: El mensaje y el botón se alinean en el centro de la pantalla utilizando `flexbox`.
- **Pantalla 2**: Se usa `flexbox` para distribuir los detalles en columnas en pantallas grandes, y en filas en pantallas pequeñas.
- El botón de "Ver Detalles" y el botón de "Regresar" se colocan en posiciones fijas, mientras que el contenido se adapta a la pantalla.
