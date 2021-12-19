var express = require('express');
var router = express.Router();
var productModule = require('../modules/productModule');

router.post('/saveproduct', productModule.postProduct);
router.get('/getproduct', productModule.getProduct);
router.patch('/updateProduct/:productId', productModule.updateProduct);
router.delete('/deleteProduct/:productId', productModule.deleteProduct);

module.exports = router;