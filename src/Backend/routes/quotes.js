const express = require('express');
const router = express.Router();
const Quotes = require('../models/Quotes');
const verifyToken = require('../middlewares/verifyToken');

// router.get('/create',function(req, res){
//     res.sendFile(__dirname + "/index.html")
// })

router.post('/create',function(req,res){

	const quotesData = req.body
	const quotes = new Quotes(quotesData)

	let quotesSaved = quotes.save()

	quotesSaved.then(()=> {
		res.send("Added!")
	}).catch(error=>{
		res.send(error)
	})
})

router.get('/read',function(req ,res){

	let allQuotes = Quotes.find()

    allQuotes.then((resp)=>{
    	res.send(resp)
    }).catch(error=>{
    	res.send(error)
    })
})

// router.get('/update', function(req , res){
// 	res.sendFile(__dirname+"/update.html")
// })

router.post('/update',function(req, res){

	let oldValue = req.body.oldQuote
	let newValue = req.body.newQuote

	let query = { quote  : `${oldValue}`}

	let newQuote = { $set : {quote : `${newValue}`}}

	const updatedQuote = Quotes.updateOne(query,newQuote)
    updatedQuote.then(()=>{
        res.send("Updated Successfully!")
    }).catch(e =>{
        res.send( e.message)
    })
})

router.get('/delete',function(req,res){
	res.sendFile(__dirname + "/delete.html")
})

router.post('/delete',function(req, res){

	let getValues = req.body.quote

	let query = { quote : `${getValues}`}

	const deletedQuote = Quotes.deleteOne(query)
    deletedQuote.then(()=>{
        res.send("Deleted Successfully!")
    }).catch(e =>{
        res.send( e.message)
    })

})




module.exports = router;