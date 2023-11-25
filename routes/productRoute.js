const express = require('express')
const router = express.Router()
const Product = require('../models/productModel')
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController')

// get all product
router.get('/', getProducts)

// get a single product
router.get('/:id', getProduct)

// create a product
router.post('/', createProduct)

// update a product
router.put('/:id', updateProduct)

// delete a product
router.delete('/:id', deleteProduct)

module.exports = router
