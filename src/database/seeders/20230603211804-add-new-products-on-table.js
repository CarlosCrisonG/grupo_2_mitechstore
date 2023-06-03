'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('products', [
      {
        name: 'Portatil Redmibook 14 Ii - 512 Gb Ssd, Intel Core I7',
        description: 'Xiaomi-ordenador portátil RedmiBook Pro 15 2022, i7-12650H Notebook con Intel Core/i5 12450H RTX2050, 16GB de RAM, 512GB/1TB SSD, 3,2 K, 90Hz, 15,6 pulgadas',
        price: 1.021,
        discount: 0,
        highlight: 1,
        model: 'RedmiBook 14',
        year: 2012,
        size: '350.1mm x 242.3mm x 4.9mm',
        weight: "1,5kg",
        inSale: 0,
        categories_id: 1
      }, {
        name: 'Redmibook AIR 13',
        description: 'El Xiaomi Redmibook AIR 13 es una computadora portátil de la marca Xiaomi. Está equipada con un potente procesador Intel Core i7 de décima generación, lo que garantiza un rendimiento rápido y eficiente en tareas intensivas. Tiene una memoria RAM de 16GB, lo que permite ejecutar múltiples aplicaciones y programas sin problemas. Además, cuenta con una capacidad de almacenamiento de 512GB, proporcionando espacio suficiente para guardar archivos, documentos y multimedia.',
        price: 1.677,
        discount: 0,
        highlight: 0,
        model: 'Redmibook AIR 13 I7',
        year: 2023,
        size: '350.1mm x 242.3mm x 4.9mm',
        weight: "1,6kg",
        inSale: 0,
        categories_id: 1
      }, {
        name: 'Smart TV',
        description: 'Con el Smart TV Mi TV P1 43 accederás a diferentes contenidos a través de las aplicaciones. Además, podrás navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.',
        price: 326,
        discount: 20,
        highlight: 0,
        model: 'L43M6-6A',
        year: 2023,
        size: '962 mm x 85 mm x 556 mm',
        weight: "7,3kg",
        inSale: 1,
        categories_id: 4
      }, {
        name: 'HD Smart TV',
        description: 'Este televisor en particular ofrece una pantalla de 55 pulgadas con una resolución de 3840 x 2160 píxeles, lo que significa que puede reproducir contenido en alta definición con una gran claridad y detalles nítidos. La tecnología LED proporciona una iluminación uniforme en toda la pantalla y ayuda a mejorar el contraste y los colores. Al ser un Smart TV, el televisor Xiaomi de 55 pulgadas te permite acceder a una amplia variedad de aplicaciones y servicios de transmisión en línea. Puedes conectarte a Internet a través de Wi-Fi o mediante un cable Ethernet para disfrutar de contenido en línea, como películas, programas de televisión, música y juegos.',
        price: 567,
        discount: 0,
        highlight: 1,
        model: 'I4K-UHDP1',
        year: 2021,
        size: '962 mm x 85 mm x 556 mm',
        weight: "12kg",
        inSale: 0,
        categories_id: 4
      }, {
        name: 'Xiaomi Mi Ionic Hair Dryer H300',
        description: 'Este diseño exclusivo, basado en el principio de funcionamiento de los motores de turbina de los aviones, cuenta con aspas curvas y una salida de aire para reducir las pérdidas de potencia eólica y mejorar de forma eficaz la velocidad del aire. El motor de alto rendimiento genera un potente flujo de aire que evapora rápidamente la humedad sin necesidad de alcanzar una elevada temperatura.',
        price: 45,
        discount: 0,
        highlight: 0,
        model: 'H300',
        year: 2021,
        size: '35 x 77 x 215 mm',
        weight: "12kg",
        inSale: 0,
        categories_id: 5
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {});
    await queryInterface.sequelize.query(
      'ALTER TABLE products AUTO_INCREMENT = 1'
    );
  }
};
