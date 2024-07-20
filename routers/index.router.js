var rouHome = require('./home.router');
// đại khái là import 1 hàm chứa các router

var rouSubmit = require('./submit.router')
var rouNews = require('./news.router');

// module.exports.server = (app)=>{
//     app.use
// }
// nhiệm vụ file bên này là khiến application hay ứng dụng web có thể sử dụng router
// ta nhận application từ bên index.js

// hoặc cách khác là tạo thêm 1 router rồi export nó sang cho app dùng, và router này làm kêt nối trung gian app và các router ko = các router này use để kết nối các router
// ở đây làm cách 1
// application ( ứng dụng ) hay app sẽ đi so sánh tìm đúng url khi tra đc url thì sẽ gọi tới hàm tương ứng , hàm ở đây có thể là router hoặc midlewire
module.exports.server = (app)=>{
    app.use('/',rouHome);
    app.use('/submit',rouSubmit);
    app.use('/news',rouNews);
}