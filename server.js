'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const handleNotFound = require('./handlers/404.js');
const handleError = require('./handlers/500.js');
const logger = require('./middleware/logger.js');
const timeStamp = require('./middleware/timestamp.js');

const app = express();

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Product = require('./models/product');
const Order = require('./models/order.js');

app.use(cors());
app.use(express.json());
app.use(timeStamp);
app.use(logger);

app.get('/', getHomePage);
app.get('/category/:category', getCategory);
app.get('/categories', getCategories);
app.get('/product/:id', getProduct);
app.post('/cart/:id', addToCart);
app.delete('/cart/:id', removeFromCart);
app.post('/order', placeOrder);

app.use( handleError );
app.use('*', handleNotFound);

function getHomePage(req, res) {
  res.status(200).send('Hello World');
}

async function getCategory(req, res, next) {
  try {
    const category = req.params.category;
    const products = await Product.find({ categories: category });
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
}

async function getCategories(req, res, next) {
  try {
    const products = await Product.find();
    const categories = new Set();
    products.forEach(product => {
      product.categories.forEach(category => categories.add(category));
    });
    res.status(200).json(Array.from(categories));
  } catch (err) {
    next(err);
  }
}

async function getProduct(req, res, next) {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (err) {
    next(err);
  }
}

async function addToCart(req, res, next) {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product && product.quantity > 0) {
      product.quantity -= 1;
      await product.save();
      res.status(200).json(product);
    } else {
      res.status(400).json({ error: 'Product out of stock' });
    }
  } catch (err) {
    next(err);
  }
}

async function removeFromCart(req, res, next) {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.quantity += 1;
      await product.save();
      res.status(200).json(product);
    } else {
      res.status(400).json({ error: 'Product not found' });
    }
  } catch (err) {
    next(err);
  }
}

async function placeOrder(req, res, next) {
  try {
    const { items, payment } = req.body;
    const order = new Order({
      items,
      payment,
      date: new Date(),
    });
    await order.save();
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
}

function start(port) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = {app, start};