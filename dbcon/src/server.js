const express = require('express');
const app = express();
app.use(express.json());
const { addMessage, getMessage } = require('./user');

const cors = require('cors');
app.use(cors());


app.get("/get-records", async (req, res) => {
    const list = await getMessage();
    res.json(list);
});

app.post("/add-records", async (req, res) => {
    const user = req.body;
    await addMessage(user);
    res.json("added")
});

app.listen(4800, () => {
    console.log("Server started")
});