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
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.get('/api/config/google', (req, res) => {
  res.send(process.env.GOOGLE_API_KEY || 'AlzaSyCj1vbd6BXIX_eXP7hegn2pMgG934loRLL4');
});
// app.use(express.static(path.join(__dirname, '//frontend/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(`${__dirname}//frontend/build/index.html`));
// });

// app.listen(config.PORT, () => {
//   console.log('Server started at http://localhost:5000');
if(process.env.NODE_ENV ==='production'){
  app.use(express.static('frontend/build'));
  
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'frontend','build','index.html'));
  
  });
  }
  
  app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
  