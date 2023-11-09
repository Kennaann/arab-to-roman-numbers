const express = require("express");
const app = express();
const convertRoutes = require("./routes/convertRoutes");

app.use(express.json());

app.use("/", convertRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
