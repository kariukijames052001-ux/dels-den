require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // allow frontend to connect
app.use(express.json());

app.get('/', (req, res) => {
  res.send("DEL'S DEN API LIVE 🚀");
});

const PORT = process.env.PORT || 3000;
app.post('/order', (req, res) => {
  const { phone } = req.body;

  console.log("New order from:", phone);

  res.json({
    success: true,
    message: "Order received ✅. Payment request coming soon..."
  });
});
app.listen(PORT, '0.0.0.0', () => {
  console.log("Server running on port " + PORT);
});
