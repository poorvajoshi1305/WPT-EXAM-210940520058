const mysql = require('mysql');
const Promise = require('bluebird');
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "REACT_db"
};

const chats = {
    sender: "poorva",
    reciever: "friend",
    msg: "how are you"
}

const addMessage = async (chats) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `insert into message (sender,reciever,msg) values (?,?,?)`;
    await connection.queryAsync(sql, [chats.sender, chats.reciever, chats.msg]);
    await connection.endAsync();
    console.log("message record added..!");
}

// addMessage(record);
const getMessage = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `select * from message`;
    const list = await connection.queryAsync(sql, []);
    await connection.endAsync();
    console.log("list of record..!");
    console.log(list);
    return list;
}
getMessage()

module.exports = { addMessage, getMessage };