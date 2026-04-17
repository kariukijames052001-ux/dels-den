require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("DEL'S DEN API LIVE 🚀");
});

const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});
