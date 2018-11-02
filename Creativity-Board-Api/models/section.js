var queries = {
    createSection: "INSERT INTO `boardsections`(`boardid`, `sectionid`, `title`, `createdat`, `color`) VALUES ?;",
    getSection: "SELECT `sectionid`, `title`, `createdat`, `color` FROM `boardsections` WHERE `boardid` = ?"
}

exports.createSection = function (section, callback) {
    var values = [];
    var i;
    for (i=0;i<section.length;i++) {
        values.push([section[i].boardId, null, section[i].title, section[i].createdAt, section[i].color]);
    }
    db.query(queries.createSection, [values], function (err, rows) {
        if (err)
            callback(err);
        else
            callback(null, rows);
    });
}

exports.getSection = function (boardId, callback) {
    db.query(queries.getSection, [boardId], function (err, rows) {
        if (err)
            callback(err);
        else
            callback(null, rows);
    });
}