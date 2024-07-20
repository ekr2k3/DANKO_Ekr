const fs = require('fs');
const mammoth = require('mammoth');
const path = require('path');
const Ns = require("../models/product.model");


module.exports.newsClient = async (req, res) => {
    let condition = {
        deleted: false
    }
    var datax = await Ns.find(condition);
    // để trùng tên biến lên sai

    const docPath = `${__dirname}/../public/${req.query.linkDocx}`;
    // cần học lai cái đoạn này không hiểu sao cài static file là public rồi
    // mà dùng cái đường dẫn /world/hello.docx lại sai mà dùng public/world/hello.docx lại đúng
    /*Khi bạn sử dụng app.use(express.static("public")); trong Express, thư mục public được cấu hình làm thư mục tĩnh. Điều này có nghĩa là bạn có thể truy cập các tệp trong thư mục public thông qua đường dẫn URL tương ứng.

Vì vậy, nếu bạn có một tệp hello.docx trong thư mục public/world, thì đường dẫn URL đúng để truy cập tệp đó sẽ là /world/hello.docx. Đường dẫn public/world/hello.docx là đường dẫn hệ thống tệp (file path) mà máy chủ sử dụng để lư
u trữ tệp, nhưng bạn không cần phải bao gồm thư mục public trong URL. 
--> dùng /world/hello.docx khi dùng url
--> dùng public/world/hello.docx khi dùng pathFIle
ở đây là hệ thống muốn đọc file -> dùng pathFile

*/


    console.log('Document path:', docPath);

    fs.readFile(docPath, (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading file.');
            return;
        }

        // In ra kích thước dữ liệu tệp để xác nhận rằng dữ liệu đã được đọc
        console.log('Data read successfully. Size:', data.length);

        mammoth.convertToHtml({ buffer: data })
            .then(result => {
                const html = result.value;
                console.log('HTML Conversion Result:', html.substring(0, 100)); // In ra phần đầu của HTML để kiểm tra
                res.render('client/pages/news/index', {
                    content: html,
                    c: "<p>HI</p>",
                    da : datax
                });
            })
            .catch(error => {
                console.error('Error converting file:', error);
                res.status(500).send('Error converting file.');
            });
    });
}
