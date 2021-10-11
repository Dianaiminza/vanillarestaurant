var  mongoose =require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String},
        qty: { type: Number},
        image: { type: String },
        price: { type: Number },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
      },
    ],
    shipping: {
      address: { type: String},
  estate: { type: String },
  postalCode: { type: String },
  phonenumber: { type: String },
  lat: Number,
      lng: Number,
    },
    paymentMethod: { type: String },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    itemsPrice: { type: Number },
    shippingPrice: { type: Number },
    taxPrice: { type: Number},
    totalPrice: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
    _id: {type:String},
  },
  {
    timestamps: true,
  }
);
const orderModel = mongoose.model('Order', orderSchema);
module.exports=orderModel;
