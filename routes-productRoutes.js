const express = require('express');
const router = express.Router();
const {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

// Rutas CRUD
router.route('/')
    .get(getProducts)       // Obtener todos los productos
    .post(createProduct);   // Crear un nuevo producto

router.route('/:id')
    .put(updateProduct)     // Actualizar un producto
    .delete(deleteProduct); // Eliminar un producto

module.exports = router;
