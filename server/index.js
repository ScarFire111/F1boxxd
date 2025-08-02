const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 4000;
const jwt = require("jsonwebtoken");
const axios = require('axios');

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(
  "mongodb+srv://ScarFire:Rishav123@cluster0.7jhukes.mongodb.net/F1boxxd",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//khalti secret key//
const KHALTI_SECRET_KEY = 'your_khalti_secret_key_here';

// Ensure upload/images directory exists
const fs = require("fs");
const uploadDir = path.join(__dirname, "upload", "images");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage: storage });
app.use("/images", express.static(uploadDir));

// Product schema
const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

//User Schema
const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//api for upload//
app.post("/upload", upload.single("product"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }
  res.json({
    success: true,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//api for add product//
app.post("/addproduct", async (req, res) => {
  try {
    const products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await product.save();
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

//api for removeproduct//
app.post("/removeproduct", async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

//api for all products//
app.get("/allproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

//Creating endpoint for registering the user//
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({ success: false, errors: "existing user found with same email address" });
  }

  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});

//creating endpoint for userlogin//
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Wrong password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong Email Id" });
  }
});

//endpoint for new collections//
app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("New collection fetched");
  res.send(newcollection);
});

app.get("/", (req, res) => {
  res.send("Express is running");
});

//creating middleware to fetch user//
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "Please authenticate using valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({ errors: "please authenticate using a valid token" });
    }
  }
};

//endpoint for addtocart//
app.post("/addtocart", fetchUser, async (req, res) => {
  try {
    const itemId = parseInt(req.body.itemId); 
    let userData = await Users.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(404).send({ error: "User not found" });
    }
    userData.cartData[itemId] = (userData.cartData[itemId] || 0) + 1;
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    res.send({message:"Added"});
  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).send("Server error");
  }
});

//creating endpoint to remove product from cartdata//

app.post('/removefromcart',fetchUser,async(req,res)=>{
try {
    const itemId = parseInt(req.body.itemId); 
    let userData = await Users.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(404).send({ error: "User not found" });
    }
    if(userData.cartData[req.body.itemId]>0){
    userData.cartData[itemId] = (userData.cartData[itemId] || 0) - 1;}
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    res.send({message:"Removed"});
  } catch (error) {
    console.error("Remove to cart error:", error);
    res.status(500).send("Server error");
  }
})

//creating endpoint to getcartdata//

app.post('/getcart',fetchUser,async(req,res)=>{
  console.log('getcart');
  let userData=await Users.findOne({_id:req.user.id});
  res.json(userData.cartData);
})

app.post('/khalti/payment', fetchUser, async (req, res) => {
  try {

    const userId = req.user.id;

    
    const user = await Users.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

   
    const cartData = user.cartData || {}; 

  
    const productIds = Object.keys(cartData).filter(
      (pid) => cartData[pid] > 0
    );

    if (productIds.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }
    const products = await Product.find({
      id: { $in: productIds.map((id) => parseInt(id)) },
    });

    let totalAmount = 0;
    const productDetails = products.map((product) => {
      const quantity = cartData[product.id] || 0;
      const unitPricePaisa = product.new_price * 100;
      const totalPricePaisa = unitPricePaisa * quantity;
      totalAmount += totalPricePaisa;
      return {
        identity: product.id.toString(),
        name: product.name,
        total_price: totalPricePaisa,
        quantity: quantity,
        unit_price: unitPricePaisa,
      };
    });

    const vatAmount = Math.floor(totalAmount * 0.13);
    const markPrice = totalAmount - vatAmount;
    const purchaseOrderId = `order_${Date.now()}`;


    const paymentPayload = {
    
      amount: totalAmount,
      purchase_order_id: purchaseOrderId,
      purchase_order_name: "",
      customer_info: {
        name: user.name || "",
        email: user.email || "",
        phone: "", 
      },
      amount_breakdown: [
        { label: "Mark Price", amount: markPrice },
        { label: "VAT", amount: vatAmount },
      ],
      product_details: productDetails,
      merchant_username: "your_merchant_username", 
      merchant_extra: "Extra info if any", 
    };

    const khaltiResponse = await axios.post(
      'https://khalti.com/api/v2/payment/initiate/', 
      paymentPayload,
      {
        headers: {
          Authorization: `Key ${KHALTI_SECRET_KEY}`, //need secret key help//
          'Content-Type': 'application/json',
        },
      }
    );
    res.json(khaltiResponse.data);
  } catch (error) {
    console.error('Khalti Payment Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Payment processing failed' });
  }
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
