const express = require ('express');
const router = express.Router();
const productoController= require('../controllers/productoController');

router.get('/productos', productoController.list);
router.post('/productos/add',productoController.add);
router.get('/productos/eliminar/:id_producto', productoController.eliminar);
router.get('/productos/updateProductos/:id_producto', productoController.updateProductos);
router.post('/productos/actulizarproducto', productoController.Actualizarproducto);
module.exports=router;


