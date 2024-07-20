const email = require("../service/sendMail");

module.exports.submitClient = (req, res) => {
    let { name, email: userEmail, phone, address, comment } = req.body;

    // Kiểm tra xem các trường bắt buộc đã được nhập chưa
    if (!name || !userEmail || !phone || !address) {
        return res.status(400).send("Tất cả các trường bắt buộc phải được điền!");
    }

    // Kiểm tra nếu comment là null, undefined hoặc rỗng và gán giá trị mặc định
    if (comment===null || comment ===undefined || comment === "") { // tất cả cái trong if có thể thay = !comment
        comment = req.body.comment = "no comment";
    }

    // Gọi hàm gửi email với các giá trị từ form
    email.mail(name, userEmail, phone, address, comment);

    // Hiển thị trang submit thành công với dữ liệu từ form
    res.render("client/pages/submit_successful/index.pug", {
        data: req.body
    });
};
