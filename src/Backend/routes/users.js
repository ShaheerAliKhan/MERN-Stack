const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const Posts = require('../models/Posts');
const verifyToken = require('../middlewares/verifyToken');

//protected route
router.get('/getAll', verifyToken, (req, res) => {
    const users = Users.find();
        users.then((allUsers) => {
        res.send({result: allUsers})
    }).catch(e => {
        res.send({message: e.message});
    })
})

// my files starts

// SELECT
// router.get('/test',function(req,res){
//     res.sendFile(__dirname + "/index.html")
// })

router.get('/test',function(req, res){
    // res.sendFile(__dirname + "/index.html")

    const users = Users.find({email : "asd"})
    users.then((allUsers)=>{
        res.send({message : allUsers})
    }).catch(e => {
        res.send({message : e.message})
    })
})

router.post('/addShaheer',function(req, res){

    
    // let value = req.body.value

    // let query = req.body.field

    // let result = JSON.stringify(query)
    // res.send(query)

    const users = Users.find()
    users.then((allUsers)=>{
        res.send({message : allUsers})
    }).catch(e => {
        res.send({message : e.message})
    })
})
// SELECT END
router.get('/add',function(req,res){


    const users = Users.find(query)
    users.then((allUsers) => {
        res.send({result: allUsers})
        console.log(allUsers)
    }).catch(e => {
        res.send({message: e.message});
    })
})


router.post('/update', function(req, res){
    let query = { email : "asdd"}
    let newValues = { $set : {email : "updatedEmail"}}

    const users = Users.updateOne(query,newValues)
    users.then(()=>{
        res.send({message : "Updated Successfully!"})
    }).catch(e =>{
        res.send({message: e.message})
    })
})


router.post('/add', (req, res) => {

    const userInfo = req.body;
    const user = new Users(userInfo);

    user.save().then(() => {
        res.send("Registered Successfully!")
    }).catch(e => {
        res.send({message: e.message});
    })
})

router.get('/all', (req, res) => {
    const users = Users.find();
    users.then((allUsers) => {
        res.send({result : allUsers})
    }).catch(e => {
        res.send({message: e.message});
    })
})

// my files ends

router.post('/register', (req, res) => {
    const userInfo = req.body;
    const user = new Users(userInfo);

    user.save().then(() => {
        res.send({result: "Registered Successfully!"})
    }).catch(e => {
        res.send({message: e.message});
    })
})

router.post('/register', (req, res) => {
    const userInfo = req.body;
    const user = new Users(userInfo);

    user.save().then(() => {
        res.send({result: "Registered Successfully!"})
    }).catch(e => {
        res.send({message: e.message});
    })
})

router.post('/login', async (req, res) => {
    const userInfo = req.body;

    //check email
    const user = await Users.findOne({email: userInfo.email});

    if(!user) {
        res.send({message: "Invalid email or password!"});
    }

    //check password
    const matchPassword = user.comparePassword(userInfo.password);

    if(!matchPassword) {
        res.send({message: "Invalid email or password!"});
    }

    //generate token
    await user.generateToken();

    res.send({_id: user._id, email: user.email, token: user.token});


    // user.then((userObj) => {
        
    //     console.log('allUsers =-==>', allUsers)
    //     // res.send({result: "Registered Successfully!"})
    // }).catch(e => {
    //     res.send({message: e.message});
    // })
})


//fetch('url.com/users/314y781yieash')
router.post('/getUser', (req, res) => {
    //req.params.id
    const email = req.body.email;
    const users = Users.find({ email });

    users.then((allUsers) => {
        res.send({result : allUsers})
    }).catch(e => {
        res.send({message: e.message});
    })
})

router.post('/addUser', (req, res) => {
    const user = req.body;
    const newUser = new Posts(user);

    newUser.save()
    .then(() => {
        res.send({message: "User added successfully!"})
    })
    .catch(e => {
        console.log('e ===>', e);
        res.send({message: e.message})
    })
})

module.exports = router;