const mongoose = require("mongoose");
const chat = require("./models/chat");
//creating database samples
main()
  .catch((err) => console.log(err))
  .then(() => {
    console.log("connection successfull with the db");
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chats = [
  {
    from: "John",
    to: "alan",
    message: "How was the exam!",
    created_at: new Date(),
  },
  {
    from: "Priya",
    to: "Niya",
    message: "Do you have yest notes??",
    created_at: new Date(),
  },
  {
    from: "Dhanush",
    to: "Bibaswan",
    message: "Nigga is alan coming today??",
    created_at: new Date(),
  },
];

chat.insertMany(chats);
