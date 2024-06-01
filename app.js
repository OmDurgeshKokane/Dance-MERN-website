const express = require("express");
const path = require("path");
const fs = require('fs')
const nodemailer = require('nodemailer'); 
const app = express();
var validate = require('validator');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DanceDataBase');
const hostname = '127.1.1.0';
const port = 3000;


//MONGO BASED SCHEMA`


const Contact = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    course: String,
    phone: Number,
    email: String,
    address: String,
    desc: String,
});
const cont = mongoose.model('Contact', Contact);

const DanceType = new mongoose.Schema({
    name: String,
    phone: Number,
    dancetype:String,
});
const dancety = mongoose.model('DanceTypes', DanceType);

const Kathak = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    oncard: String,
    cardno: Number,
    amt: Number,
    month: String,
    expyear: String,
    cvv: Number,
});
const kathak = mongoose.model('KathakPayment', Kathak);

const Hiphop = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    oncard: String,
    cardno: Number,
    amt: Number,
    month: String,
    expyear: String,
    cvv: Number,
});
const hiphop = mongoose.model('HiphopPayment', Hiphop);

const Folk = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    oncard: String,
    cardno: Number,
    amt: Number,
    month: String,
    expyear: String,
    cvv: Number,
});
const folk = mongoose.model('FolkPayment', Folk);

const Salsa = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    oncard: String,
    cardno: Number,
    amt: Number,
    month: String,
    expyear: String,
    cvv: Number,
});
const salsa = mongoose.model('SalsaPayment', Salsa);

const Contemporary = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    oncard: String,
    cardno: Number,
    amt: Number,
    month: String,
    expyear: String,
    cvv: Number,
});
const contemporary = mongoose.model('ContemporaryPayment', Contemporary);

const Jazz = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    oncard: String,
    cardno: Number,
    amt: Number,
    month: String,
    expyear: String,
    cvv: Number,
});
const jazz = mongoose.model('JazzPayment', Jazz);
            
const Ballroom = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    oncard: String,
    cardno: Number,
    amt: Number,
    month: String,
    expyear: String,
    cvv: Number,
});
const ballroom = mongoose.model('BallroomPayment', Ballroom);

const User = new mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    gender:{
        type: String,
        required:true
    },
    phone:{
        type: Number,
        required:true,
        unique:true,
    },
    Age:{
        type: Number,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    confirmpassword:{
        type: String,
        required:true
    }
    
})
const Register = new mongoose.model('RegisterUser',User);
//And than schema is coverted into model  
//Now in this the first parameter(Contact)is became a collections while it coverting in collectons mongodb automactilly coverts it's purel means in collections there will be Contacts


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.post('/register', async (req,res)=>{
    try {
        
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password === cpassword){
            const regi = new Register({

                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                Age: req.body.Age,
                password: password,
                confirmpassword: cpassword
            })
            const re = await regi.save(); 
            res.status(201).send('<script>alert("You Have been Register Succesfully"); window.location.href= "/log";</script>');

        }else{
            res.status(200).send('<script>alert("Password is not Maching"); window.location.href= "/";</script>');
        }

    } catch (error) {
        res.status(400).send('<script>alert("You Have Already Register Go back to Login"); window.location.href= "/log";</script>');
    }
})

app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('register.pug');
})
app.get('/registration', (req, res)=>{
    const params = {}
    res.status(200).render('register.pug');
})
app.get('/log', (req, res)=>{
    const params = {}
    res.status(200).render('login.pug');
})

app.get('/home1', (req,res)=>{
    res.status(400).send('<script>alert("Please Do Registration First!!!"); window.location.href= "/";</script>')
})
app.get('/danceinfo2', (req,res)=>{
    res.status(400).send('<script>alert("Please Do Registration First!!!"); window.location.href= "/";</script>')
})
app.get('/dancevedio3', (req,res)=>{
    res.status(400).send('<script>alert("Please Do Registration First!!!"); window.location.href= "/";</script>')
})
app.get('/about4', (req,res)=>{
    res.status(400).send('<script>alert("Please Do Registration First!!!"); window.location.href= "/";</script>')
})
app.get('/contact5', (req,res)=>{
    res.status(400).send('<script>alert("Please Do Registration First!!!"); window.location.href= "/";</script>')
})
app.get('/payment6', (req,res)=>{
    res.status(400).send('<script>alert("Please Do Registration First!!!"); window.location.href= "/";</script>')
})

app.get('/home7', (req,res)=>{
    res.status(400).send('<script>alert("Please Do Registration First!!!"); window.location.href= "/";</script>')
})
app.get('/danceinfo8', (req,res)=>{
    res.status(400).send('<script>alert("Please Do Registration First!!!"); window.location.href= "/";</script>')
})
app.get('/dancevedio9', (req,res)=>{
    res.status(400).send('<script>alert("Please Do Registration First!!!"); window.location.href= "/";</script>')
})
app.get('/about10', (req,res)=>{
    res.status(400).send('<script>alert("Please Do Registration First!!!"); window.location.href= "/";</script>')
})
app.get('/contact11', (req,res)=>{
    res.status(400).send('<script>alert("Please Do Registration First!!!"); window.location.href= "/";</script>')
})
app.get('/payment12', (req,res)=>{
    res.status(400).send('<script>alert("Please Do Registration First!!!"); window.location.href= "/";</script>')
})

app.post('/login', async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});
        
        if(useremail.password === password){
            res.status(201).render('home.pug');
        }else{
            res.send('<script>alert("Password are not Maching"); window.location.href= "/log";</script>');
        }
        
    } catch (error) {
        res.status(400).send('<script>alert("Invalid Email"); window.location.href= "/log";</script>');
    }
})

app.get('/logout', (req,res)=>{
    res.status(201).render("login.pug");
})

app.get('/home', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug');
})
app.get('/danceinfo',(req,res)=>{
    res.status(200).render('danceinformation.pug');
})
app.get('/about', (req, res)=>{
    const params = {}
    res.status(200).render('about.pug');
})
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug');
})
app.get('/dancevedio', (req,res)=>{
    res.status(200).render('dancevedio.pug');
})
app.get('/payment',(req,res)=>{
    res.status(200).render('payment.pug');
})
app.get('/kathakinfo',(req,res)=>{
    res.status(200).render('kathak.pug');
})
app.get('/hiphopinfo',(req,res)=>{
    res.status(200).render('hiphop.pug');
})
app.get('/folkinfo',(req,res)=>{
    res.status(200).render('folk.pug');
})
app.get('/salsainfo',(req,res)=>{
    res.status(200).render('salsa.pug');
})
app.get('/Contemporaryinfo',(req,res)=>{
    res.status(200).render('Contemporary.pug');
})
app.get('/jazzinfo',(req,res)=>{
    res.status(200).render('jazz.pug');
})
app.get('/ballroominfo',(req,res)=>{
    res.status(200).render('ballroom.pug');
})


app.get('/pay1',(req,res)=>{
    res.status(200).render('pay1.pug');
})
app.get('/pay2',(req,res)=>{
    res.status(200).render('pay2.pug');
})
app.get('/pay3',(req,res)=>{
    res.status(200).render('pay3.pug');
})
app.get('/pay4',(req,res)=>{
    res.status(200).render('pay4.pug');
})
app.get('/pay5',(req,res)=>{
    res.status(200).render('pay5.pug');
})
app.get('/pay6',(req,res)=>{
    res.status(200).render('pay6.pug');
})
app.get('/pay7',(req,res)=>{
    res.status(200).render('pay7.pug');
})

app.get('/kathak',(req,res)=>{
    res.send('<html><body><a href="../static/img/kathak.mp4">Go And Check A Kathak Dance Video Now!!!!</a></body></html>')
})
app.get('/hiphop',(req,res)=>{
    res.send('<html><body><a href="../static/img/hiphop.mp4">Go And Check A HipHop Dance Video Now!!!!</a></body></html>')
})
app.get('/folk',(req,res)=>{
    res.send('<html><body><a href="../static/img/folk.mp4">Go And Check A Folk Dance Video Now!!!!</a></body></html>')
})
app.get('/salsa',(req,res)=>{
    res.send('<html><body><a href="../static/img/hiphop.mp4">Go And Check A Salsa Dance Video Now!!!!</a></body></html>')
})
app.get('/contemporary',(req,res)=>{
    res.send('<html><body><a href="../static/img/hiphop.mp4">Go And Check A Contemporary Dance Video Now!!!!</a></body></html>')
})
app.get('/jazz',(req,res)=>{
    res.send('<html><body><a href="../static/img/hiphop.mp4">Go And Check A Jazz Dance Video Now!!!!</a></body></html>')
})
app.get('/ballroom',(req,res)=>{
    res.send('<html><body><a href="../static/img/hiphop.mp4">Go And Check A Ballroom Dance Video Now!!!!</a></body></html>')
})

//Data saving In DataBase Section
app.post('/contact', (req, res)=>{
    var myData = new cont(req.body);
       myData.save().then(()=>{
        res.send('<script>alert("YOUR ADDMISSION IS SUCCESFULL GO TO PAYMENT MENU"); window.location.href= "/payment";</script>')
       }).catch(()=>{
       res.status(400).send('<script>alert(" YOUR ADDMISSION IS FAIL CHECK YOUR ALL FIELDS"); window.location.href= "/contact";</script>')
   })
})
app.post('/dancetype',(req,res)=>{
    var data = new dancety(req.body);
       data.save().then(()=>{
        res.send('<script>alert("FORM IS SUCCESSFULLY SUBMITTED"); window.location.href= "/danceinfo";</script>')
       }).catch(()=>{
       res.status(400).send('<script>alert("FORM IS NOT SUBMITTED"); window.location.href= "/danceinfo";</script>')
   })
})
app.post('/kathakpay',(req,res)=>{
    name = req.body.name
    email = req.body.email
    city = req.body.city
    state = req.body.state
    amt = req.body.amt
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:'omkokane.13579@gmail.com' , // generated ethereal user
          pass: 'sensryqhzywuoacr' , // generated ethereal password
        },
      });
    var mailOptions = {
        from:'omkokane.13579@gmail.com',
        to: `${email}`,
        subject:'hii there', 
        text:`Welcome to our Dance+ Academy you have take a susscessfull addmission Your Name is ${name} Email is ${email} you are from ${city} city and ${state} state you have paid for Khatak Dance RS.${amt}Thank For Visting our Dance+ Academy`
    };
    transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log('Email Send: ' + info.response);
        }
    })
    var data = new kathak(req.body);
       data.save().then(()=>{
        res.send('<script>alert("PAYMENT IS SUCCESSFULLY DONE!!! RECIPT IS SEND TO YOUR MAIL"); window.location.href= "/home";</script>')
       }).catch(()=>{
       res.status(400).send('<script>alert("PAYMENT IS NOT SUCCESS CHECK YOUR FIELDS AGAIN"); window.location.href= "/pay1";</script>')
   })
})

app.post('/hiphoppay',(req,res)=>{
    name = req.body.name
    email = req.body.email
    city = req.body.city
    state = req.body.state
    amt = req.body.amt
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:'omkokane.13579@gmail.com' , // generated ethereal user
          pass: 'sensryqhzywuoacr' , // generated ethereal password
        },
      });
    var mailOptions = {
        from:'omkokane.13579@gmail.com',
        to: `${email}`,
        subject:'hii there', 
        text:`Welcome to our Dance+ Academy you have take a susscessfull addmission Your Name is ${name} Email is ${email} you are from ${city} city and ${state} state you have paid for Hiphop Dance RS.${amt}Thank For Visting our Dance+ Academy`
    };
    transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log('Email Send: ' + info.response);
        }
    })
    var data = new hiphop(req.body);
       data.save().then(()=>{
        res.send('<script>alert("PAYMENT IS SUCCESSFULLY DONE!!! RECIPT IS SEND TO YOUR MAIL"); window.location.href= "/home";</script>')
       }).catch(()=>{
       res.status(400).send('<script>alert("PAYMENT IS NOT SUCCESS CHECK YOUR FIELDS AGAIN"); window.location.href= "/pay2";</script>')
   })
})

app.post('/folkpay',(req,res)=>{
    name = req.body.name
    email = req.body.email
    city = req.body.city
    state = req.body.state
    amt = req.body.amt
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:'omkokane.13579@gmail.com' , // generated ethereal user
          pass: 'sensryqhzywuoacr' , // generated ethereal password
        },
      });
    var mailOptions = {
        from:'omkokane.13579@gmail.com',
        to: `${email}`,
        subject:'hii there', 
        text:`Welcome to our Dance+ Academy you have take a susscessfull addmission Your Name is ${name} Email is ${email} you are from ${city} city and ${state} state you have paid for Folk Dance RS.${amt}Thank For Visting our Dance+ Academy`
    };
    transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log('Email Send: ' + info.response);
        }
    })
    var data = new folk(req.body);
       data.save().then(()=>{
        res.send('<script>alert("PAYMENT IS SUCCESSFULLY DONE!!! RECIPT IS SEND TO YOUR MAIL"); window.location.href= "/home";</script>')
       }).catch(()=>{
       res.status(400).send('<script>alert("PAYMENT IS NOT SUCCESS CHECK YOUR FIELDS AGAIN"); window.location.href= "/pay3";</script>')
   })
})

app.post('/salsapay',(req,res)=>{
    name = req.body.name
    email = req.body.email
    city = req.body.city
    state = req.body.state
    amt = req.body.amt
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:'omkokane.13579@gmail.com' , // generated ethereal user
          pass: 'sensryqhzywuoacr' , // generated ethereal password
        },
      });
    var mailOptions = {
        from:'omkokane.13579@gmail.com',
        to: `${email}`,
        subject:'hii there', 
        text:`Welcome to our Dance+ Academy you have take a susscessfull addmission Your Name is ${name} Email is ${email} you are from ${city} city and ${state} state you have paid for Salsa Dance RS.${amt}Thank For Visting our Dance+ Academy`
    };
    transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log('Email Send: ' + info.response);
        }
    })
    var data = new salsa(req.body);
       data.save().then(()=>{
        res.send('<script>alert("PAYMENT IS SUCCESSFULLY DONE!!! RECIPT IS SEND TO YOUR MAIL"); window.location.href= "/home";</script>')
       }).catch(()=>{
       res.status(400).send('<script>alert("PAYMENT IS NOT SUCCESS CHECK YOUR FIELDS AGAIN"); window.location.href= "/pay4";</script>')
   })
})

app.post('/contemporarypay',(req,res)=>{
    name = req.body.name
    email = req.body.email
    city = req.body.city
    state = req.body.state
    amt = req.body.amt
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:'omkokane.13579@gmail.com' , // generated ethereal user
          pass: 'sensryqhzywuoacr' , // generated ethereal password
        },
      });
    var mailOptions = {
        from:'omkokane.13579@gmail.com',
        to: `${email}`,
        subject:'hii there', 
        text:`Welcome to our Dance+ Academy you have take a susscessfull addmission Your Name is ${name} Email is ${email} you are from ${city} city and ${state} state you have paid for Contemporary Dance RS.${amt}Thank For Visting our Dance+ Academy`
    };
    transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log('Email Send: ' + info.response);
        }
    })
    var data = new contemporary(req.body);
       data.save().then(()=>{
        res.send('<script>alert("PAYMENT IS SUCCESSFULLY DONE!!! RECIPT IS SEND TO YOUR MAIL"); window.location.href= "/home";</script>')
       }).catch(()=>{
       res.status(400).send('<script>alert("PAYMENT IS NOT SUCCESS CHECK YOUR FIELDS AGAIN"); window.location.href= "/pay5";</script>')
   })
})

app.post('/jazzpay',(req,res)=>{
    name = req.body.name
    email = req.body.email
    city = req.body.city
    state = req.body.state
    amt = req.body.amt
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:'omkokane.13579@gmail.com' , // generated ethereal user
          pass: 'sensryqhzywuoacr' , // generated ethereal password
        },
      });
    var mailOptions = {
        from:'omkokane.13579@gmail.com',
        to: `${email}`,
        subject:'hii there', 
        text:`Welcome to our Dance+ Academy you have take a susscessfull addmission Your Name is ${name} Email is ${email} you are from ${city} city and ${state} state you have paid for Jazz Dance RS.${amt}Thank For Visting our Dance+ Academy`
    };
    transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log('Email Send: ' + info.response);
        }
    })
    var data = new jazz(req.body);
       data.save().then(()=>{
        res.send('<script>alert("PAYMENT IS SUCCESSFULLY DONE!!! RECIPT IS SEND TO YOUR MAIL"); window.location.href= "/home";</script>')
       }).catch(()=>{
       res.status(400).send('<script>alert("PAYMENT IS NOT SUCCESS CHECK YOUR FIELDS AGAIN"); window.location.href= "/pay6";</script>')
   })
})

app.post('/ballroompay',(req,res)=>{
    name = req.body.name
    email = req.body.email
    city = req.body.city
    state = req.body.state
    amt = req.body.amt
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:'omkokane.13579@gmail.com' , // generated ethereal user
          pass: 'sensryqhzywuoacr' , // generated ethereal password
        },
      });
    var mailOptions = {
        from:'omkokane.13579@gmail.com',
        to: `${email}`,
        subject:'hii there', 
        text:`Welcome to our Dance+ Academy you have take a susscessfull addmission Your Name is ${name} Email is ${email} you are from ${city} city and ${state} state you have paid for Ballroom Dance RS.${amt}Thank For Visting our Dance+ Academy`
    };
    transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log('Email Send: ' + info.response);
        }
    })
    var data = new ballroom(req.body);
       data.save().then(()=>{
        res.send('<script>alert("PAYMENT IS SUCCESSFULLY DONE!!! RECIPT IS SEND TO YOUR MAIL"); window.location.href= "/home";</script>')
       }).catch(()=>{
       res.status(400).send('<script>alert("PAYMENT IS NOT SUCCESS CHECK YOUR FIELDS AGAIN"); window.location.href= "/pay7";</script>')
   })
})
// START THE SERVER
app.listen(port,hostname, ()=>{
    console.log(`The Website started successfully on port http://${hostname}:${port}`);
}); 