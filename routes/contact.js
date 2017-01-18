var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});


router.post('/send',function(req, res, next){
    
   const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'aman.22275@gmail.com ',
        pass: '9811332880',
    },
});
const mailOptions = {
    from: 'aman.22275@gmail.com',
    to: 'motivationalove0@gmail.com',
    subject: 'hello world!',
    html: 'hello world!',
};
transport.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    }
    
});

});

module.exports = router;
