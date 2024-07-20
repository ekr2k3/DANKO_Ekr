const express = require("express");
require('dotenv').config();
require("./config/database").connect(); // làm tắt bước impport + gọi hàm
const methodOverride = require('method-override');



const app = express();
app.use(methodOverride('_method'));
const post = 3000;
const rou = require("./routers/index.router");
const rouAdmin = require("./routers/admin/index.router")
// rou.server(app);-------------------------------------------------------------------SAI ĐÂY NHA-----------
/*Trong ứng dụng Express, thứ tự khai báo middleware và router là rất 
quan trọng. Middleware cần phải được khai báo trước các route handler
 để nó có thể xử lý các 
request trước khi các route handler nhận được chúng.*/

app.set("views", __dirname+"/views");
app.set("view engine", "pug");


app.use(express.static(__dirname+"/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// email.mail(); ----------------------------------------------------------------------------------------------

rou.server(app);
rouAdmin(app);

app.listen(post, () => {
    console.log("done in port 3000");
})
