const mongoose = require('mongoose');

exports.connect = () => {
    try{
        mongoose.connect('mongodb://localhost:27017/b262-ecommerce', {useNewUrlParser : true, useUnifiedTopology:true})
    } catch(err) {
        console.log(err);
        process.exit();
    }
}