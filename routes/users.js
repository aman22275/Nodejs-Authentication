var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Respond with resourse');
});

//Register a New User
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'About' });
});

//Login a user
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/users/register', function(req,res,next){

    //Form Values 
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;
    
    
    
});

//Check for Image feild
if(req.files.image){
    console.log('Uploading file....');
    
    //File Info
    var profileImageOriginalName = req.files.image.originalname;
    
    var profileImageName = req.files.image.name;
    var profileImageMime = req.files.image.mimetype;
    var profileImagePath = req.files.image.path;
    var profileImageExt  = req.files.image.extension;
    var profileImageSize = req.files.image.size;
    
    
    
}else{
    var profileOriginalName = 'noimage.png';
}

module.exports = router;
