var dashboar = require("./dashboar.router");
var news_ad = require("./news.router")



module.exports = (app) =>{
    app.use("/admin/dashboar",dashboar);
    app.use("/admin/news",news_ad);
}