const app = require("./app");
const port = 8000;

const mongoose = require("mongoose");

(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/todolist");
  console.log("Database connected");
})();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
