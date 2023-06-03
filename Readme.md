![alt Logo](https://i.ibb.co/4ZZJy81/Logo-Color.png)

<br />

# Nombre del Grupo
Mi Tech Store

<br />

# Descripción de productos
Tienda de productos de tecnología exclusiva para productos y accesorios marca Xiaomi (smartphones, smart tv, smarwatchs, scooters, accesorios, periféricos, entre otros).

<br />

# Links del Trello
Sprint 1: https://trello.com/b/bxqi7wBT/proyecto-integrador<br />
Sprint 2: https://trello.com/b/cIFR3m3x/sprint-2<br />
Sprint 3: https://trello.com/b/69R4k4XY/sprint-3<br />
Sprint 4: https://trello.com/b/6AXsEJKn/sprint-4<br />
Sprint 5: https://trello.com/b/hvnlqLUM/sprint-5<br />
Sprint 6: https://trello.com/b/A0jJRhHb/sprint-6<br />
Sprint 7: https://trello.com/b/rvriOVKf/sprint-7<br />
Sprint 8: https://trello.com/b/RtjVUNsm/sprint-8<br />

<br />

# Público Objetivo

- **Género:** Ambos 
- **Edad:** +18
- **Estrato - Clase:** Medio
- **Ubicación:** Principales ciudades de Latinoamérica

<br />

Ajustamos nuestra oferta a ese púlico ofreciendo una amplia gama de productos consumidos por la población urbana en general, desde scooters para el desplazamiento en la ciudad, hasta celulares, computadoras y periféricos para uso personal o laboral, incluyendo productos aptos para el hogar como aspiradoras smart y de ciudado personal como afeitadoras.

<br />

# Integrantes del Equipo
## - Carlos Crisón
Soy Desarrollador Web, vivo en Valledupar, Colombia y me encanta diseñar y programar.

## - Andres Jose De la Cruz
Soy Tecnico de soporte en sistemas, vivo en Medellín, Colombia, con muchas ganas de trabajar y aprender.

## - Jaider Andres Mena
Vivo en Chocó - Colombia, me apasiona la programación y me gustaría vivir de ello

## - Franco Rotchen
Comerciante y estudiante en Digital House. Vivo en Santa Fe, Argentina

## - Martín Bertinotti
Nunca se contactó con el equipo.

## - Miguel Herrera
Soy Tecnico en Mercadeo y Ventas, tengo 21 años y vivo en Medellín - Colombia. Me apasiona aprender y estoy estudiando programacion en Digital House.

## - Lorenzo Sanchez
Tengo veinticinco años, vivo en General Fernández Oro, Argentina, y soy estudiante universitario y de desarrollo web fullstack. Me gusta programar.

## - Yesica Pérez
Soy Técnica en Prácticas Cardiológicas, vivo en Buenos Aires - Argentina. No tengo conocimiento previo sobre programación, pero con ganas de aprender.

<br />

# Sitios de Referencia
1. Mercadolibre: Debido a la presentación de los productos y al menú desplegable que presenta en la versión móvil, que se utilizaron para nuestra versión móvil. https://www.mercadolibre.com.co

2. Mc Center - Tienda Apple: Nos interesó la presentación de las categorías desplegables en el header del sitio, al igual que el formulario de login que presenta. https://mac-center.com/

3. Amazon: Observamos aquí la forma en la que organizan gran cantidad de productos de distintos tipos sin confudir a los usuarios. Tambien manejan muy bien pagos desde distintas partes del mundo con disintos medios de pago internacionales. https://www.amazon.es/ap/register

4. Xiaomi - Tienda oficial Argentina: Ofrece el mismo tipo de productos de tecnología que queremos ofrecer en nuestro e-commerce (smartphones, smart tv, smarwatchs, accesorios, entre otros). Además, nos inspiramos en la presentación de cada producto que hace este sitio para nuestra versión desktop. Finalmente, nos basamos en su formulario de registro y la información que solicita para diseñar nuestro formulario de registro. En cuanto a lo estético, de aquí se toma el color principal de nuestro sitio (naranja) https://xiaomistore.com.ar

5. Alkosto Colombia: Tienda en linea que ofrece una amplia gama de categorías. De este sitio nos inspiramos para la estructuración del homepage y una parte para la vista de producto. https://www.alkosto.com/

<br />

# Respositorio Dashboard:
https://github.com/CarlosCrisonG/grupo_2_mitechstore_dashboard

<br />

# Inicialización del proyecto:
- Descargar el proyecto principal desde GitHub y abrirlo con VSCode.
- Ejecutar el comando **npm install** en la terminal de VSCode.
- Crear un archivo titulado **.env** en la carpeta raíz del proyecto, el cual debe completarse utilizando como referencia el archivo **.env.example** ya existente en el proyecto. Los datos solicitados corresponden a una conexión que deberá tener creada en un administrador de bases de datos como **MySQL Workbench**, el cual deberá tener instalado y configurado.
- Ejecutar el comando **npx sequelize-cli db:create** en la terminal de VSCode para crear la base de datos.
- Ejecutar el comando **npx sequelize-cli db:migrate** en la terminal de VSCode para crear las tablas y columnas de la base de datos.
- Ejecutar el comando **npx sequelize-cli db:seed:all** en la temrinal de VSCode para poblar con información la base de datos.
- Ejecutar el comando **npm run dev** en la terminal de VSCode para poner en marcha el proyecto en el puerto 3000 (por defecto).
- Descargar el *Dashboard* desde su repositorio de GitHub y abrirlo en otra ventana de VSCode.
- En la ventana del *Dashboard* ejecutar el comando **npm install** en la terminal de VSCode.
- En la ventana del *Dashboard* ejecutar el comando **npm run dev** en la terminal de VSCode.

# Herramientas utilizadas (librerías, frameworks):
- **Node.js + JavaScript**
- **React** 18.2.0, librería que permite construir aplicaciones más rápidas y performantes del lado del frontend mediante componentes.
- **React-router** 6.11.2, librería que permite implementar sistemas de ruteo en aplicaciones de React.
- **Bcrypt** 5.1.0, librería que permite trabajar con contraseñas encritpadas(hasheadas).
- **Cookie-parser** 1.4.6, librería que permite trabajar con cookies. 
- **Dotenv** 16.0.3, librería utilizada para cargar variables de entorno desde un archivo .env
- **Ejs** 3.1.8, motor de plantillas que permite generar vistas con información y estructura dinámicas.
- **Express** 4.18.2, framework que facilita el desarrollo de aplicaciones web en Node.js. 
- **Express-session** 1.17.3, librería que permite administrar sesiones de usuario en una aplicación de Express.
- **Express-validator** 6.15.0, librería que facilita la validación de formularios desde el backend en aplicaciones de Express.
- **Method-override** 3.0.0, librería que permite que los formularios HTML soporten los métodos HTTP PUT (actualizar) y DELETE (borrar)
- **Multer** 1.4.5, paquete que permite subir archivos al servidor.
- **Sequelize** 6.31.0, ORM para trabajar con bases de datos relacionales utilizando Node.js + JS.
- **Sequelize-cli** 6.6.0, paquete que proporciona una una interfaz de comandos para realizar diversas tareas relacionadas a Sequelize.
- **Mysql2** 3.2.3, paquete que le permite a Sequelize trabajar con una base de datos SQL.