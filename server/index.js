const express = require('express')
const axios = require('axios')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/userModel')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const app = express()
const bcrypt = require('bcrypt')
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
const secretKey = 'your-secret-key';
//DataBase connectivity goes here...
mongoose.connect('mongodb+srv://mohammeddmushtaq:MRiYKd0L9QQfJy7Q@cluster.7d9s434.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.post('/signup', async (req, res) => {
  console.log('Signup request received');
  console.log(req.body);
  const { fname, lname, email, password, phone } = req.body;

  // Hash the password before saving it to the database
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    FirstName: fname,
    LastName: lname,
    Email: email,
    Password: hashedPassword,
    Phone: phone
  });

  try {
    await newUser.save();
    res.status(200).json({ status: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false })
  }
});
app.post('/signin', async (req, res) => {
  console.log('Signin request received');
  const { email, password } = req.body;
  console.log(req.body)
  try {
    const user = await User.findOne({ Email: email });
    console.log(user)
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const passwordMatch = await bcrypt.compare(password, user.Password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    jwt.sign({ email: user.Email }, secretKey, {
      expiresIn: '1h', // 1 hour expiration
    }, (err, token) => {
      if (err) {
        console.error('Error generating token:', err);
        return res.status(500).json({ error: 'Error logging in' });
      }

      console.log('Generated token:', token);
      res.json({ t: token, userdata: user });
    });
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});
////////////////////////////////////////////////////////////////////////
const multer = require('multer');
const Purchases = require('./models/purchases')
const Sales = require('./models/sales')
// Set up Multer with disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './payments/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/purchase', upload.single('file'), async (req, res) => {
  console.log('Purchases data');
  console.log(req.body);
  console.log(req.file);
  try {
    const purchase = await Purchases.create(
      {
        Email: req.body.email,
        Phone: req.body.phone,
        CarData: req.body.data,
        Token: req.file.filename,
        ImgUrl: JSON.parse(req.body.data).imgUrl,
        Name: JSON.parse(req.body.data).name
      }
    )
    console.log(purchase._id)
    res.json({ TID: purchase._id });
  } catch (error) {
    console.log(error)
    res.json('Error Occured')
  }
});
//////////////////////////////////////////////////////////////////////
const storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './car_images/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname);
  }
});
const upload1 = multer({ storage: storage1 });

app.post('/sell', upload1.single('file'), async (req, res) => {
  console.log('Sales data');
  console.log(req.body);
  console.log(req.file);
  try {
    const sale = await Sales.create(
      {
        Email: req.body.email,
        Phone: req.body.phone,
        Name: req.body.name,
        ImgUrl: req.file.filename,
        Year: req.body.year,
        SellerName: req.body.sellerName
      }
    )
    console.log(sale._id)
    const purchaseDetails = await Purchases.findOne({ Name: req.body.name });

    if (purchaseDetails) {
      console.log('Buyer details:', purchaseDetails);
      var nodemailer = require('nodemailer');

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'moneshcbit@gmail.com',
          pass: 'jvrv szib vxmv cwuq'
        }
      });

      var mailOptions = {
        from: 'moneshcbit@gmail.com',
        to: purchaseDetails.Email,
        subject: 'A car is available for you.',
        text: `Here is the contact information...\nName : ${req.body.sellerName}\nEmail : ${req.body.email}\nPhone : ${req.body.phone}`
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.json({ TID: sale._id, BuyerDetails: purchaseDetails });
    } else {
      console.log('No matching buyer details found.');
      res.json({ TID: sale._id, BuyerDetails: null });
    }
  } catch (error) {
    console.log(error)
    res.json('Error Occured')
  }
});

app.post('/transactions/:email', async (req, res) => {
  try {
    const email = req.params.email;
    // Fetch transactions based on the user's email
    const transactions = await Purchases.find({ Email: email });
    console.log('Fetched transactions')
    console.log(transactions)
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/search', async (req, res) => {
  const { car, arr } = req.body
  try {
    ///////////////////////API-1
    var options = {
      method: 'GET',
      url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
      params: { model: arr[1], make: arr[0], limit: '10' },
      headers: {
        'X-RapidAPI-Key': '72c49e350fmshfe8d7384857c73ap1f5007jsn6c6d948921d8',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    };


    const response1 = await axios.request(options);
    console.log('API-1 called...')
    console.log(response1.data);



    /////////////////////API-2 Images
    var options = {
      method: 'GET',
      url: 'https://google-search72.p.rapidapi.com/imagesearch',
      params: {
        q: car,
        gl: 'us',
        lr: 'lang_en',
        num: '10',
        start: '0'
      },
      headers: {
        'X-RapidAPI-Key': '72c49e350fmshfe8d7384857c73ap1f5007jsn6c6d948921d8',
        'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
      }
    };

    const response2 = await axios.request(options);
    console.log('API-2 called...');
    console.log(response2.data);
    /////////////////////API-3 Data
/*
    var options = {
      method: 'GET',
      url: 'https://cars-data3.p.rapidapi.com/cars-data',
      params: {
        limit: '1',
        skip: '0',
        brand: arr[0],
        model: arr[1]
      },
      headers: {
        'X-RapidAPI-Key': '72c49e350fmshfe8d7384857c73ap1f5007jsn6c6d948921d8',
        'X-RapidAPI-Host': 'cars-data3.p.rapidapi.com'
      }
    };

    
      const response3 = await axios.request(options);
      console.log('API-3 called...');
      console.log(response3.data);*/
    
    res.json({ api1Data: response1.data, api2Data: response2.data})
  } catch (error) {
    console.error(error);
    res.json({ error: 'Internal Server Error' })
  }

})

app.listen('2004', () => {
  console.log("Hey Mom!!");
})
