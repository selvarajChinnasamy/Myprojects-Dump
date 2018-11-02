var queries = {
	createBoard: "INSERT INTO `userboards`(`boardid`, `userid`, `title`, `createdat`) VALUES (NULL,?,?,?);",
	getBoard: "SELECT `boardid`, `title`, `createdat` FROM `userboards` WHERE `userid` = ?;"
}

exports.createBoard = function(board, callback) {
	db.query(queries.createBoard,[board.userId, board.title, board.createdAt], function (err, rows) {
		if(err)
			callback(err);
		else
			callback(null, rows);
	});
}

exports.getBoard = function(userId, callback) {
	db.query(queries.getBoard,[userId], function (err, rows) {
		if(err)
			callback(err);
		else
			callback(null, rows);
	});
}