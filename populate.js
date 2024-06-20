require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/product');

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  await Product.deleteMany({});

  const products = [
    {
      name: 'Item A',
      description: 'Item A is an item',
      image: 'images/products/A.png',
      price: 0,
      categories: ['A and B', 'A and C'],
      quantity: 10,
    },
    {
      name: 'Item B',
      description: 'Item B is an item',
      image: 'images/products/B.png',
      price: 0,
      categories: ['A and B', 'B and D'],
      quantity: 20,
    },
    {
      name: 'Item C',
      description: 'Item C is an item',
      image: 'images/products/C.png',
      price: 0,
      categories: ['C and D', 'A and C'],
      quantity: 15,
    },
    {
      name: 'Item D',
      description: 'Item D is an item',
      image: 'images/products/D.png',
      price: 0,
      categories: ['C and D', 'B and D'],
      quantity: 8,
    },
  ];

  await Product.insertMany(products);

  console.log('Database populated!');
  mongoose.connection.close();
}).catch(err => {
  console.error(err);
});
