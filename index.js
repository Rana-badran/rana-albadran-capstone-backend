const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// Define routes and middleware here

const storesRoutes = require("./routes/stores");
app.use("/stores", storesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
