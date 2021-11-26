var mongoose =require('mongoose');
const shippingSchema = {
  address: { type: String},
  estate: { type: String },
  postalCode: { type: String },
  phonenumber: { type: String },
  
};

const paymentSchema = {
  paymentMethod: { type: String },
  paymentResult: {
    id: String,
    status: String,
    update_time: String,
    email_address: String,
  }
};

const orderItemSchema = new mongoose.Schema({
  name: { type: String},
  qty: { type: Number},
  image: { type: String },
  price: { type: String},
  _id: {type:mongoose.Schema.Types.ObjectId,ref:'Order'},
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderItems: [orderItemSchema],
  shipping: shippingSchema,
  payment: paymentSchema,

  itemsPrice: { type: Number },
  taxPrice: { type: Number },
  shippingPrice: { type: Number },
  totalPrice: { type: Number },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date },
}, {
  timestamps: true
});

const orderModel = mongoose.model("Order", orderSchema);
module.exports=orderModel;





