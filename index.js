const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chat");
const methodOverride = require("method-override");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // to parse post request
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

main()
  .catch((err) => console.log(err))
  .then(() => {
    console.log("connection successfull with the db");
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/", (req, res) => {
  res.send("Route is working");
});

//Main page Route
app.get("/chats", async (req, res) => {
  let chats = await chat.find();
  res.render("index.ejs", { chats });
});

//New route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let { from, to, message } = req.body;
  let newchat = new chat({
    from: from,
    to: to,
    message: message,
    created_at: new Date(),
  });
  newchat.save();
  res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chats = await chat.findById(id);
  res.render("edit.ejs", { chats });
});
//update route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { new_message } = req.body;
  await chat.findByIdAndUpdate(id, { message: new_message });
  res.redirect("/chats");
});
//delete
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  await chat.findByIdAndDelete(id);
  res.redirect("/chats");
});
