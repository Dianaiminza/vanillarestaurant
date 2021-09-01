var express = require('express');
var  path =require ('path');
var  bodyParser=require('body-parser');
var config =require ('./config');
var  userRoute =require('./routes/userRoute');
var  productRoute =require ('./routes/productRoute');
var orderRoute =require ('./routes/orderRoute');
var uploadRoute =require ('./routes/uploadRoute');
var  mongoose =require ('mongoose');

mongoose.connect(process.env.MONGODB_URL ||'mongodb+srv://dbUser:Captain@cluster0.w11hf.mongodb.net/food?retryWrites=true&w=majority');
const mongodbUrl = config.MONGODB_URL;
mongoose .connect(mongodbUrl, {
  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    
  })
   .catch((error) => console.log(error.reason));
  

const app = express();
app.use(bodyParser.json());
app.use('/api/uploads', uploadRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.use(bodyParser.json());
app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});
app.use(express.static(path.join(__dirname,'/frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/frontend/build/index.html`));
});

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});
