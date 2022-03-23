require("colors");
require("dotenv").config({ path: "./config/config.env" });
const Handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access");
const { listen } = require("./utils");

const path = require("path");
//importing routes
const {
  authroutes,
  profileroutes,
  myprodroutes,
  ordersroutes,
  cartroutes,
  contactroutes
} = require("./routes");

const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const express = require("express");

const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
  handlebars: allowInsecurePrototypeAccess(Handlebars)
});
const store = new MongoStore({
  collection:"sessions", 
  uri:process.env.MONGO_URI
});

app.use(session( {
  secret:"Ozodbek", 
  reseave:false,
  saveUninitialized:false, 
  store
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//settings
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

//middlewares
app.use(express.static(path.join(__dirname, "public")));

//use Middlewares
app.use(authroutes);
app.use("/orders",ordersroutes);
app.use("/myprods",myprodroutes);
app.use("/profile",profileroutes);
app.use("/cart",cartroutes);
app.use('/contact', contactroutes);


//server listener
listen(app);
