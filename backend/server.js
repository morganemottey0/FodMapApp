const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");

require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("MongoDB error:", err));

// Routes
app.use("/api/foods", require("./routes/foods"));

// Gestion des erreurs
app.use(errorHandler)

// Lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
