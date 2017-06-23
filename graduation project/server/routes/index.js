var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* GET home page. */

var con = mysql.createConnection({
	host     : '127.0.0.1',
	user     : 'root',
	port     :  3306,
	database : 'douban'
});

router.post('/', function(req, res, next) {
  res.render('index',{title:'Express'});
});


router.post('/signin', function(req, res, next) {

	var name = req.body.username;
	con.query('SELECT * FROM `yonghu` WHERE username="'+name+'"',function(err,rows,f){
		if (rows!='') {
			res.send('该用户名已被注册');
		} else{		
			con.query('INSERT INTO `yonghu`(`username`, `password`) VALUES (?,?)',[req.body.username,req.body.repassword],function(err,result,f){
		
			res.send('注册成功,请重新登录');				
			})		
		}
	})
});

router.post('/verifyusername', function(req, res, next) {
	var name = req.body.username;
	con.query('SELECT * FROM `yonghu` WHERE username="'+name+'"',function(err,rows,f){
		console.log(rows);
		if (rows=='') {
			res.send({"valid":true});
		} else{
			res.send({"valid":false});
		}
	})
});

router.post('/verifyusernamea', function(req, res, next) {
	var name = req.body.username;
	console.log(name);
	con.query('SELECT * FROM `yonghu` WHERE username="'+name+'"',function(err,rows,f){
		console.log(rows);
		if (rows=='') {
			res.send({"valid":false});
		} else{
			res.send({"valid":true});
		}
	})
});




router.post('/login', function(req, res, next) {
	var name = req.body.username;
	var passwords = req.body.password;
	con.query('SELECT * FROM `yonghu` WHERE username="'+name+'"',function(err,rows,f){
		if (rows=='') {
			res.send('该用户名未注册');
		} else if (passwords!=rows[0].password) {		
			res.send('密码不正确');
		} else{
			console.log("1");
			res.send({zhuangtai:'登录成功',
					shuju:rows});
		}
	})
});


router.post('/movieid', function(req, res, next) {
	var name = req.body.name;
	var mid = req.body.movieid;





	// con.query('SELECT * FROM `doubanb` WHERE movie="'+mid+'" AND username="'+name+'"',function(err,rows,f){
	// 	if (!rows) {	
	// 		res.send('ok');
	// 	} else {
	// 		res.send('buok');
	// 	}
	// })

});


router.post('/movieidd', function(req, res, next) {
	var name = req.body.name;
	var mid = req.body.movieid;

	con.query('SELECT * FROM `doubanb` WHERE movie="'+mid+'" AND username="'+name+'"',function(err,rows,f){
		if (!rows) {	
			res.send('ok');
		} else {
			res.send('buok');
		}
	})

});


router.post('/addpl',function(req,res){
	con.query('INSERT INTO `likeorlooked`(`username`, `type`, `movieid`,`pltext`,`star`) VALUES (?,?,?,?,?)',
		[req.body.username,req.body.type,req.body.movieid,req.body.pltext,req.body.star],function(err,rows,f){
		if(err){
			console.log(err);
		}else{
		console.log(rows);
		res.send(rows);
		}
	})
});
router.post('/updatepl',function(req,res){
	var sql = 'UPDATE `likeorlooked` SET `type`=?,`pltext`=?,`star`=? WHERE `username`=? AND `movieid`=?';
	var arr =[req.body.type,req.body.pltext,req.body.star,req.body.username,req.body.movieid];
	con.query(sql,arr,
		function(err,rows,f){
			if(!err){
				console.log(rows);
				res.send(rows);
			}else{
				console.log(err);
			}
		})
});
router.post('/delpl',function(req,res,next){
	con.query('DELETE FROM `likeorlooked` WHERE username="'+req.body.username+'" AND movieid="'+req.body.movieid+'"',function(err,rows,f){
		if(err){
			console.log(err);
		}else{
			console.log(rows);
			res.send(rows);
		}
	})
});
router.get('/getpl',function(req,res){
	con.query('SELECT * FROM `likeorlooked` WHERE username="'+req.query.username+'" AND movieid="'+req.query.movieid+'"',function(err,rows,f){
		console.log(rows);
		if(!err){
			console.log(rows);
			res.send(rows);
		}else{
			console.log(err);
			res.send(err);

		}
	})
})


module.exports = router;