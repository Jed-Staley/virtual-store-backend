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
      name: 'Beef',
      description: 'Jordan Peterson swears by this stuff',
      image: 'https://media.istockphoto.com/id/1319467946/photo/young-black-and-white-cow-heifer-in-a-meadow-looking-in-the-camera.jpg?s=2048x2048&w=is&k=20&c=5pJOpjqaM8M-o0vjkyoFuj_KmP947lYT8fUP1PeSO9s=',
      price: '24',
      categories: ['Meat', 'Dairy', 'Protein'],
      quantity: 10,
    },
    {
      name: 'Apple',
      description: 'A fresh and juicy red apple',
      image: 'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=2048x2048&w=is&k=20&c=y-vQTuSseLrreXAfueKeeXMwyYV9Pgw4Pt_V0tbxbl8=',
      price: '1',
      categories: ['Fruit', 'Snacks', 'Healthy'],
      quantity: 50,
    },
    {
      name: 'Milk',
      description: 'Fresh whole milk',
      image: 'https://media.istockphoto.com/id/1337307092/photo/pouring-fresh-milk-in-glass.jpg?s=2048x2048&w=is&k=20&c=ZfIL9BXhq4GLpzPpuuE6OuvbEVCHm8sZjlrNMJWdPg8=',
      price: '2',
      categories: ['Dairy', 'Beverages', 'Breakfast'],
      quantity: 30,
    },
    {
      name: 'Bread',
      description: 'Whole grain bread',
      image: 'https://media.istockphoto.com/id/475263838/photo/many-mixed-breads-and-rolls-shot-from-above.jpg?s=2048x2048&w=is&k=20&c=vgzyaP-onYvP9bajw_WqIyX23hlJAigfiLGbgdUHax8=',
      price: '3',
      categories: ['Bakery', 'Snacks', 'Breakfast'],
      quantity: 20,
    },
    {
      name: 'Eggs',
      description: 'A dozen free-range eggs',
      image: 'https://media.istockphoto.com/id/1356240873/photo/closeup-macro-of-pasture-raised-farm-fresh-dozen-brown-eggs-store-bought-from-farmer-in.jpg?s=2048x2048&w=is&k=20&c=bZmpnVyZuuXumNKBNJWMimfW5KOn5KpU5BdRc1D4c48=',
      price: '4',
      categories: ['Dairy', 'Breakfast', 'Protein'],
      quantity: 25,
    },
    {
      name: 'Chicken',
      description: 'Fresh chicken breast',
      image: 'https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=2048x2048&w=is&k=20&c=ParT029986YAhkDgVRklAfaX0XeXpG7HPa13diBDssc=',
      price: '8',
      categories: ['Meat', 'Poultry', 'Protein'],
      quantity: 15,
    },
    {
      name: 'Orange Juice',
      description: 'Freshly squeezed orange juice',
      image: 'https://media.istockphoto.com/id/537837754/photo/orange-juice-splash.jpg?s=2048x2048&w=is&k=20&c=_SuSqZUZ_i62Zumg7ZoEp4XXzWu1xJ-i7G4120KxuBE=',
      price: '5',
      categories: ['Beverages', 'Breakfast', 'Healthy'],
      quantity: 20,
    },
    {
      name: 'Butter',
      description: 'Creamy unsalted butter',
      image: 'https://media.istockphoto.com/id/177834117/photo/butter-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=IMUOwXR-3X3agpXRf5qknxIHKk5IqeB1R2IeRXdp8C4=',
      price: '3',
      categories: ['Dairy', 'Baking', 'Cooking'],
      quantity: 30,
    },
    {
      name: 'Carrots',
      description: 'Fresh organic carrots',
      image: 'https://media.istockphoto.com/id/185275579/photo/bundles-of-organic-carrots-with-the-stems-still-attached.jpg?s=2048x2048&w=is&k=20&c=e9uhAgkpIH8ZlZ34qbk1sN09J-ABiLqwh2_fbl753i0=',
      price: '2',
      categories: ['Vegetables', 'Snacks', 'Healthy'],
      quantity: 40,
    },
    {
      name: 'Tomatoes',
      description: 'Juicy ripe tomatoes',
      image: 'https://media.istockphoto.com/id/1132371208/photo/three-ripe-tomatoes-on-green-branch.jpg?s=2048x2048&w=is&k=20&c=hbYm1CpYczF1nHfznC0_lb4RGzKVoPwN0wRCZKT9rTM=',
      price: '3',
      categories: ['Vegetables', 'Salads', 'Cooking'],
      quantity: 35,
    },
    {
      name: 'Cheese',
      description: 'Sharp cheddar cheese',
      image: 'https://media.istockphoto.com/id/1127471287/photo/cheese-on-white.jpg?s=2048x2048&w=is&k=20&c=0l0C0yKoXN4bmw56rVxNG-D4BxBTb9h9Qaram3EP7Ys=',
      price: '5',
      categories: ['Dairy', 'Snacks', 'Bakery'],
      quantity: 20,
    },
    {
      name: 'Broccoli',
      description: 'Fresh green broccoli',
      image: 'https://media.istockphoto.com/id/147060621/photo/broccoli.jpg?s=2048x2048&w=is&k=20&c=XM6VRl7AEzY7XHT0z8MmLNSf4B3sJY3hoGnDIBjRLdk=',
      price: '2',
      categories: ['Vegetables', 'Healthy', 'Cooking'],
      quantity: 30,
    },
    {
      name: 'Almonds',
      description: 'Raw organic almonds',
      image: 'https://media.istockphoto.com/id/171292794/photo/almond.jpg?s=2048x2048&w=is&k=20&c=mTLlWvZOV-rEfLD6NpPvTYGoRCmeV7cfK-xpoIZEeHE=',
      price: '10',
      categories: ['Nuts', 'Snacks', 'Healthy'],
      quantity: 25,
    },
    {
      name: 'Salmon',
      description: 'Fresh Atlantic salmon',
      image: 'https://media.istockphoto.com/id/1071096328/photo/fresh-salmon-fillets.jpg?s=2048x2048&w=is&k=20&c=APZageY70kzumGtMk-xAgVTlqLpD6_-WIg_oGKTIkT4=',
      price: '15',
      categories: ['Fish', 'Protein', 'Healthy'],
      quantity: 10,
    },
    {
      name: 'Yogurt',
      description: 'Greek yogurt with honey',
      image: 'https://media.istockphoto.com/id/515777808/photo/yogurt.jpg?s=2048x2048&w=is&k=20&c=mcwYmRAMGy_2evkx4EPcAQwgh5hjtX_O3vtDsxM_t7Q=',
      price: '6',
      categories: ['Dairy', 'Snacks', 'Breakfast'],
      quantity: 20,
    },
    {
      name: 'Spinach',
      description: 'Fresh baby spinach',
      image: 'https://media.istockphoto.com/id/522189977/photo/spinach.jpg?s=2048x2048&w=is&k=20&c=fyYbNSIXrFl7Y0QtmCstA7wtS9txCzTpYQ13p1XDa10=',
      price: '4',
      categories: ['Vegetables', 'Salads', 'Healthy'],
      quantity: 30,
    },
    {
      name: 'Bananas',
      description: 'A bunch of ripe bananas',
      image: 'https://media.istockphoto.com/id/1187668811/photo/fresh-bananas-on-wooden-background.jpg?s=2048x2048&w=is&k=20&c=nCVloIl3VndR-YEWAo53ci-XefaPUy3mAYUS1IQbaHw=',
      price: '2',
      categories: ['Fruit', 'Snacks', 'Healthy'],
      quantity: 40,
    },
    {
      name: 'Avocado',
      description: 'Fresh Hass avocado',
      image: 'https://media.istockphoto.com/id/1359819435/photo/halves-of-fresh-avocado-on-a-cutting-board.jpg?s=2048x2048&w=is&k=20&c=uR8ItYyCfIwcvfTwma5gqHcoif28H-bNn5xiZDLeuWo=',
      price: '3',
      categories: ['Fruit', 'Salads', 'Healthy'],
      quantity: 20,
    },
    {
      name: 'Beef Jerky',
      description: 'Spicy beef jerky',
      image: 'https://media.istockphoto.com/id/504820137/photo/dried-peppered-beef-jerky.jpg?s=2048x2048&w=is&k=20&c=1BPjHYwuyLToDoxdMZFkgz_L2MNI3YTpyrfHRI5ZrG4=',
      price: '12',
      categories: ['Meat', 'Snacks', 'Protein'],
      quantity: 15,
    },
    {
      name: 'Granola',
      description: 'Crunchy oat granola',
      image: 'https://media.istockphoto.com/id/626198054/photo/homemade-granola-with-yogurt-and-fresh-berries.jpg?s=2048x2048&w=is&k=20&c=kNVSNi5g_l0Kq1CJvsFf1ikmY98fWyXW2h7PH8mMkvc=',
      price: '5',
      categories: ['Breakfast', 'Snacks', 'Healthy'],
      quantity: 25,
    },
    {
      name: 'Pasta',
      description: 'Italian spaghetti pasta',
      image: 'https://media.istockphoto.com/id/185065945/photo/pasta-variation.jpg?s=2048x2048&w=is&k=20&c=bMZwTW6eQb5HT9BF5CX5SujhgnHO8X1x8YdaKwXtSoY=',
      price: '4',
      categories: ['Bakery', 'Cooking'],
      quantity: 30,
    },
    {
      name: 'Peanut Butter',
      description: 'Creamy peanut butter',
      image: 'https://media.istockphoto.com/id/1051092868/photo/peanut-paste-in-an-open-jar-and-peanuts.jpg?s=2048x2048&w=is&k=20&c=fStLtNtcFRsFHsQTNogvTJQBWz1hPt2iPoQvX82MQ8U=',
      price: '7',
      categories: ['Snacks', 'Protein'],
      quantity: 20,
    },
    {
      name: 'Honey',
      description: 'Organic wildflower honey',
      image: 'https://media.istockphoto.com/id/598241944/photo/honey-in-jar-and-bunch-of-dry-lavender.jpg?s=2048x2048&w=is&k=20&c=I8f2IYtT1Vj4HHnxqd2tRugRmwDhO1RmBIGzlsVAGyw=',
      price: '8',
      categories: ['Snacks', 'Healthy', 'Cooking'],
      quantity: 15,
    },
    {
      name: 'Oatmeal',
      description: 'Steel-cut oats',
      image: 'https://media.istockphoto.com/id/1408374876/photo/oatmeal-porridge-bowl-with-berry-fruits-in-female-hands.jpg?s=2048x2048&w=is&k=20&c=qJZGZgHjAISxZA3bZ1jbY4r0fhQMhO_0FyXc73a0Nks=',
      price: '6',
      categories: ['Breakfast', 'Healthy'],
      quantity: 25,
    },
  ];

  await Product.insertMany(products);

  console.log('Database populated!');
  mongoose.connection.close();
}).catch(err => {
  console.error(err);
});
