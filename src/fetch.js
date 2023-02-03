const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const url="mongodb+srv://meg_24:<password>@cluster0.brmmayu.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url).then(() => {console.log("CON")}).catch( () => {console.log("NOR CON")});

const Schema = mongoose.Schema;
const itemSchema = new Schema({
    name: String,
    location: String
  }, 
  {collection: "peaks"}
  );

  const Item = mongoose.model("", itemSchema);

  Item.find({}, (err, items) => {
    if(err) console.warn(err);
    console.log(items);
  });