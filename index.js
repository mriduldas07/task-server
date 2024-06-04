const mongoose = require("mongoose");
const app = require("./app.js");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://mriduldas0325:baX0mlY5Qh1tK19A@cluster0.hbtugp1.mongodb.net/task_manager?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database connected");
    app.listen(8000, () => {
      console.log(`App listening port 8000`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
