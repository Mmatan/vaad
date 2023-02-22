let express = require('express')

var app = express();

var mysql = require('mysql');

app.set('view engine','ejs');

app.use('/assets',express.static('stuff'));

console.log("I DID IT");

/*
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vaad"
});

app.get('/', function (req, res) {
	
	// get all parameters from query
	
		var misparNeches = req.query['misparNeches'];
		var misparNayad = req.query['misparNayad'];
		var taarich = req.query['taarich'];
				
	var sql = "SELECT * FROM moadondayarim WHERE taarich = '" + taarich + "'";

		con.query(sql, function (err, result) {
		if (err) throw err;
		if (result.length == 0){
			var sql = "INSERT INTO moadondayarim (misparNeches,misparNayad,taarich) VALUES" +
					" ('" + misparNeches + "', '" + misparNayad + "', '" + taarich + "')";
			con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("shuryan");
			});
		}
		else
			console.log("tafus");
		});
//	});

});

app.listen(3005);*/