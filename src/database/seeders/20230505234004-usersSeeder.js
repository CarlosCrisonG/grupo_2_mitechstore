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

    await queryInterface.bulkInsert('users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@gmail.com',
        password: '$2a$10$aMYLt2jnLEEQqP6kc2DOAOWAOSqv.l50TrDXVMUpIslN37rvmAw8G',
        phone: '149598249',
        avatar: "defaultUser.jpg",
        region: "Antioquia",
        city: "Medellín",
        zip: "2700",
        address: "calle falsa 123",
        userprofile_id: 1,
        country_id: 5
      },
      {
        first_name: 'Jorge',
        last_name: 'Rodríguez',
        email: 'jorgito@gmail.com',
        password: '$2a$10$RYPAxH7L9lp7jm9FxMyOY.T05J9Fo2tbx3U/gvv.O7fctgJWRlVgO',
        phone: '176815218',
        avatar: "defaultUser.jpg",
        region: "Rio Negro",
        city: "Cipolletti",
        zip: "8326",
        address: "calle falsa 678",
        userprofile_id: 2,
        country_id: 1
      },
      {
        first_name: "Juan",
        last_name: "Pérez",
        email: "juan.perez@example.com",
        password: "$2a$10$uieRfLHEFIRtMjQtvFuq5.XZ3RQfZVlVKB7B8v3vXuq2HtB9hKsUu",
        phone: "123456789",
        avatar: "defaultUser.jpg",
        region: "Antioquia",
        city: "Medellín",
        zip: "2700",
        address: "calle falsa 123",
        userprofile_id: 1,
        country_id: 1
      },
      {
        first_name: "María",
        last_name: "López",
        email: "maria.lopez@example.com",
        password: "$2a$10$ds6P4b1R2R.s6Yer2O7jq.UXDAI0dmeAdgRIZzn6fyWZ5OnlCMC7q",
        phone: "987654321",
        avatar: "defaultUser.jpg",
        region: "Rio Negro",
        city: "Cipolletti",
        zip: "8326",
        address: "calle falsa 456",
        userprofile_id: 2,
        country_id: 2
      },
      {
        first_name: "Luis",
        last_name: "González",
        email: "luis.gonzalez@example.com",
        password: "$2a$10$KjZId4Nedf8X0r5f8v2Qsul.e1H6.c3S0YCV45z8sV0BEIw4sxSyq",
        phone: "789456123",
        avatar: "defaultUser.jpg",
        region: "Buenos Aires",
        city: "La Plata",
        zip: "1900",
        address: "calle falsa 789",
        userprofile_id: 1,
        country_id: 3
      },
      {
        first_name: "Ana",
        last_name: "García",
        email: "ana.garcia@example.com",
        password: "$2a$10$LiXaSRrcrFTXBkZ5HIEc/.ma3g7.WBOeDv8Pl5xwT2/M5WE2I9bc.",
        phone: "654321987",
        avatar: "defaultUser.jpg",
        region: "São Paulo",
        city: "São Paulo",
        zip: "4534",
        address: "calle falsa 987",
        userprofile_id: 2,
        country_id: 4
      },
      {
        first_name: "Carlos",
        last_name: "Martínez",
        email: "carlos.martinez@example.com",
        password: "$2a$10$K4RvhugyzSYGqtbwWun44.l2vmwOSU.xEDiG5aY3AxyY.DSN5YIkC",
        phone: "987123654",
        avatar: "defaultUser.jpg",
        region: "Antioquia",
        city: "Envigado",
        zip: "2300",
        address: "calle falsa 654",
        userprofile_id: 1,
        country_id: 5
      },
      {
        first_name: "Andrés",
        last_name: "Gómez",
        email: "andres.gomez@example.com",
        password: "$2a$10$ZxkjB0x.Pjz0xqqjg8QRIOfe5NOXj2V86AbL2QoOhIiooO.GXrlEa",
        phone: "987654321",
        avatar: "defaultUser.jpg",
        region: "Valparaíso",
        city: "Viña del Mar",
        zip: "2520",
        address: "calle falsa 456",
        userprofile_id: 2,
        country_id: 2
      },
      {
        first_name: "María",
        last_name: "Sánchez",
        email: "maria.sanchez@example.com",
        password: "$2a$10$3UMtkQsvx66dN8Z7edS7ouYoefv.zfMXLHgsCWeTCI4J2pVRW9s3m",
        phone: "789456123",
        avatar: "defaultUser.jpg",
        region: "Buenos Aires",
        city: "Mar del Plata",
        zip: "7600",
        address: "calle falsa 789",
        userprofile_id: 1,
        country_id: 3
      },
      {
        first_name: "Sofía",
        last_name: "López",
        email: "sofia.lopez@example.com",
        password: "$2a$10$L/.u5jxiz9zsyHQBEWZUXeYp.ZqNopZBc4Dg7f0.GVyU/D1sRMT6.",
        phone: "654321987",
        avatar: "defaultUser.jpg",
        region: "São Paulo",
        city: "Campinas",
        zip: "1300",
        address: "calle falsa 987",
        userprofile_id: 2,
        country_id: 4
      },
      {
        first_name: "Laura",
        last_name: "Hernández",
        email: "laura.hernandez@example.com",
        password: "$2a$10$tU7ZGvB0JQpVtx8I7q2Cl.kdy8PA4ncrBpMFOj.7AL/q/xxSp2WGS",
        phone: "456789123",
        avatar: "defaultUser.jpg",
        region: "San José",
        city: "San José",
        zip: "1010",
        address: "calle falsa 321",
        userprofile_id: 2,
        country_id: 8
      },
      {
        first_name: "Diego",
        last_name: "Rodríguez",
        email: "diego.rodriguez@example.com",
        password: "$2a$10$CpEeZy2lfWZpUfJw21Y6ae6ZdJhQPEgMHCGyVYXbRjWBGkVZdL4Ou",
        phone: "987654321",
        avatar: "defaultUser.jpg",
        region: "Valparaíso",
        city: "Valparaíso",
        zip: "2340",
        address: "calle falsa 111",
        userprofile_id: 1,
        country_id: 6
      },
      {
        first_name: "Fernanda",
        last_name: "Martínez",
        email: "fernanda.martinez@example.com",
        password: "$2a$10$OwKfABzhQxyQew6Ge7K5Wubu1vWxJe.lZxguVKQp9Z/tKG/nrgSFS",
        phone: "789456123",
        avatar: "defaultUser.jpg",
        region: "Buenos Aires",
        city: "Bahía Blanca",
        zip: "8000",
        address: "calle falsa 222",
        userprofile_id: 2,
        country_id: 7
      },
      {
        first_name: "Carlos",
        last_name: "Fernández",
        email: "carlos.fernandez@example.com",
        password: "$2a$10$BpExeZC3/EJdyVQ4iv.4LOt0R1yz/VXv7aOJqSgk3IRghv1G6FS8K",
        phone: "654321987",
        avatar: "defaultUser.jpg",
        region: "São Paulo",
        city: "Sorocaba",
        zip: "1000",
        address: "calle falsa 333",
        userprofile_id: 1,
        country_id: 8
      },
      {
        first_name: "Mariana",
        last_name: "López",
        email: "mariana.lopez@example.com",
        password: "$2a$10$G3AS5EkWpl9bk0bACqlVgeYz3sE9dRHGdFtWOFABmBw2fcTVt5nRq",
        phone: "987123654",
        avatar: "defaultUser.jpg",
        region: "Antioquia",
        city: "Itagüí",
        zip: "0540",
        address: "calle falsa 444",
        userprofile_id: 2,
        country_id: 9
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.sequelize.query(
      'ALTER TABLE users AUTO_INCREMENT = 1'
    );
  }
};