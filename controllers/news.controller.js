const fs = require('fs');
const mammoth = require('mammoth');
const path = require('path');
const Ns = require("../models/product.model");
const axios = require('axios');

module.exports.newsClient = async (req, res) => {
    let condition = {
        deleted: false
    }
    var datax = await Ns.find(condition);
    // để trùng tên biến lên sai

    // const docPath = `${__dirname}/../public/${req.query.linkDocx}`;  trước kia khi dùng local

    // cần học lai cái đoạn này không hiểu sao cài static file là public rồi
    // mà dùng cái đường dẫn /world/hello.docx lại sai mà dùng public/world/hello.docx lại đúng
    /*Khi bạn sử dụng app.use(express.static("public")); trong Express, thư mục public được cấu hình làm thư mục tĩnh. Điều này có nghĩa là bạn có thể truy cập các tệp trong thư mục public thông qua đường dẫn URL tương ứng.

Vì vậy, nếu bạn có một tệp hello.docx trong thư mục public/world, thì đường dẫn URL đúng để truy cập tệp đó sẽ là /world/hello.docx. Đường dẫn public/world/hello.docx là đường dẫn hệ thống tệp (file path) mà máy chủ sử dụng để lư
u trữ tệp, nhưng bạn không cần phải bao gồm thư mục public trong URL. 
--> dùng /world/hello.docx khi dùng url
--> dùng public/world/hello.docx khi dùng pathFIle
ở đây là hệ thống muốn đọc file -> dùng pathFile

*/


    const docUrl = req.query.linkDocx;
    console.log('Document URL:', docUrl);

    try {
        // Tải dữ liệu tệp tin từ URL
        const response = await axios({
            url: docUrl,
            responseType: 'arraybuffer' // Để nhận dữ liệu nhị phân
        });

        // Đọc dữ liệu tệp tin
        const data = Buffer.from(response.data);
        console.log('Data read successfully. Size:', data.length);

        // Chuyển đổi tệp tin DOCX sang HTML
        mammoth.convertToHtml({ buffer: data })
            .then(result => {
                const html = result.value;
                console.log('HTML Conversion Result:', html.substring(0, 100)); // In ra phần đầu của HTML để kiểm tra
                res.render('client/pages/news/index', {
                    content: html,
                    c: "<p>HI</p>",
                    da: datax
                });
            })
            .catch(error => {
                console.error('Error converting file:', error);
                res.status(500).send('Error converting file.');
            });
    } catch (error) {
        console.error('Error fetching file:', error);
        res.status(500).send('Error fetching file.');
    }
}

/*
khi dọc url thay vì path file hệ thống -->
ta cần tải thêm axios thư viện này sẽ download file tạm thời và đặt vào bộ nhớ server
ko cài vào máy khách để mammoth có thể đọc khi nó đc tải xuống

*/
