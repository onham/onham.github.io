const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;  //using this variable is for Heroku to set a variable that we can use as a port
const app = express(); //making a new express app --


//enabling us to make use of partial files -- reusable elements on our pages
hbs.registerPartials(`${__dirname}/views/partials`); 

//establishing a key-value pair -- anything hbs here will know to look in views folder:
app.set('view engine', 'hbs'); 








//configuring more middleware:::
app.use((req, res, next) => {  //next arg is required for middleware to finish
	const now = new Date().toString();
	const log = `${now}: ${req.method} ${req.url}`;
	console.log(log)
	fs.appendFile('server.log', `${log}\n`, (err) => {
		if (err) {
			console.log('unable to append to server.log');
		}
	});
	next();
});

// app.use((req, res, next) => {
// 	res.render('maintenance.hbs')
// 	next();
// });

//using some express.js middleware - tweaking express functionality::
app.use(express.static(`${__dirname}/public`)) //express.static takes the absolute path to the folder we want to serve up