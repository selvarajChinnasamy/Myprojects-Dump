var queries = {
	createUser: "INSERT INTO `users`(`userid`, `mailid`, `password`) VALUES (NULL,?,?);",
	userLogin: "SELECT `userid` FROM `users` WHERE `mailid`=? and `password` = ? ;"
}

exports.createUser = function(user,callback) {
	db.query(queries.createUser,[user.mailId, user.password], function (err, rows) {
		if(err)
			callback(err);
		else
			callback(null, rows);
	});
}


exports.userLogin = function(user,callback) {
	db.query(queries.userLogin,[user.mailId, user.password], function (err, rows) {
		if(err)
			callback(err);
		else
			callback(null, rows);
	});
}