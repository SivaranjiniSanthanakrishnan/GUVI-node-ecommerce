const mongoose = require('mongoose');

exports.connect = () => {
    try{
        mongoose.connect('mongodb+srv://sivaranjini:fFiF1ppDwqCI5T5p@cluster0.sdfhf.mongodb.net/b262-ecommerce?retryWrites=true&w=majority', {useNewUrlParser : true, useUnifiedTopology:true})
    } catch(err) {
        console.log(err);
        process.exit();
    }
}

