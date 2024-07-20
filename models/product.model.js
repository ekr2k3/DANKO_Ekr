
var mongoose = require('mongoose');
var schema = new mongoose.Schema(
    {
        title: String,
        // chú ý tên key trùng tên ô input thì mới cho vào database đc
        imgx: {
            type: String,
            default: "NONE"
        },
        docx: {
            type: String,
            default: "NONE"
        },
        docxFileName: {
            type: String,
            default:"none" },
        deleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

var Ns = mongoose.model('news', schema);

module.exports = Ns;
