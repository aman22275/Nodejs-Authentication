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

router.post('/register', function(req,res,next){

    //Form Values 
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;

//Check for Image feild
if(req.body.profileimage){
    console.log('Uploading file....');
    
    //File Info
    var profileImageOriginalName = req.files.profileimage.originalname;
    
    var profileImageName = req.files.profileimage.name;
    var profileImageMime = req.files.profileimage.mimetype;
    var profileImagePath = req.files.profileimage.path;
    var profileImageExt  = req.files.profileimage.extension;
    var profileImageSize = req.files.profileimage.size;
    
    
    
}else{
  //  var profileOriginalName = 'noimage.png';
}

//Form Validation
req.checkBody('name','Name feild is required').notEmpty();
req.checkBody('email','Email feild is required').notEmpty();
req.checkBody('email','Name not valid').isEmail();
req.checkBody('username','Name feild is required').notEmpty();
req.checkBody('password','Name feild is required').notEmpty();
req.checkBody('repassword','Name feild is required').notEmpty();

    var errors = req.validationErrors();
    if(errors){
        res.render('register',{
            errors:errors,
            name:name,
            email:email,
            username:username,
            password:password,
            repassword:repassword
        });
    } else {
        var newUser = new User({
            name:name,
            email:email,
            username:username,
            password:password,
            profileimage: profileImageName
        
        });
        //Create User
        /*User.createUser(newUser,function(err,user){
            console.log(user);
        });*/
        
        //Success message
        req.flash('Success','You are now register');
        res.location('/');
        res.redirect('/');
    }
});

module.exports = router;
