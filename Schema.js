const mongoose = require('mongoose');

const Schema = mongoose.Schema;



let addressSchema =Schema({

    addressline1: String,
    addressline2: String,
    addressline3: String,
    city:String,
    zipcode: Number,
    state:String,
    country:String
})

let customerSchema = Schema({
    
    firstname: String,
    lastname: String,
    phone: {
    type:Number,
    unique:true,
    },
    address: [addressSchema],
    email: {
    type:String,
    unique:true
    },
    password: String
})

let vendorSchema= Schema({

    firstname: String,
    lastname: String,   
    Conpamyname: String,
    phone: {
    type:Number,
    unique:true,
    },
    officeAddress: [addressSchema],
    warehouseAddress : [addressSchema],
    email: {
    type:String,
    unique:true
    },
    password:String,
    UploadDocuments: Image

})

let orderSchema= Schema({

    product_id= String,
    product_name: String,
    order_id: Number,
    quantity: Number,
    customer_id: Number,
    customer_name: String,
    shippingAddress: [addressSchema],
    deliveryAddress: [addressSchema],
    paymentDetails:  String
})

let productSchema= Schema({

    product_id: String,
    product_name: String,
    price: Number,
    vendor_name: String,
    product_details: String,
    Product_image: Image,
    Feedback:{
        customer_name: String,
        feedback: String,
        reviews: Number,
    }
})    