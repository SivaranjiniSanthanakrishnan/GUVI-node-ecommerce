const Product = require('../model/product');
const router = require('../routes');


exports.postProduct = async (req,res,next) => {
    // Create request data Object using Product Model
    const product = new Product({
        productName : req.body.productName,
        quantity : req.body.quantity,
        price : req.body.price,
        description : req.body.description,
        userQuantity : req.body.userQuantity,
    })
    try {
        var response = await product.save();
        res.send(response)
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.getProduct = async (req,res,next) => {
    var response = await Product.find();
    res.send(response);
}

exports.updateProduct = async (req,res,next) => {
    const {productId} = req.params;
    var response = await Product.findByIdAndUpdate(productId, {
        userQuantity : req.body.userQuantity
    }, {new: true})
    res.send(response);
}

exports.deleteProduct = async (req,res,next) => {
    var response = await Product.findByIdAndRemove(req.params.productId);
    res.send(response);
}
