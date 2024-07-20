
const Ns = require("../models/product.model");


module.exports.homeCLient = async (req,res)=>{
    var condition = {
        deleted: false
    }
    const data = await Ns.find(condition);

    res.render("client/pages/home/index.pug",{
        da: data
    })
}

// file này có nhiệm vụ xuất cái hàm (req,res)=>{render file pug} thông qua thuộc tính tự định nghĩa của object module.exports