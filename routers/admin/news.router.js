const express = require("express");
const multer = require("multer");
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')
cloudinary.config({ 
    cloud_name: 'duoqkdsvm', 
    api_key: '673153191584518', 
    api_secret: 'mjhhis2Wd0Fy0a59_pouHM_Cnlc',
    timeout: 60000 // Tăng thời gian chờ lên 60 giây
});

const cp = require("../../controllers/admin/news.controller");

const upload = multer();
const router = express.Router();

router.get("/", cp.newsAD);
router.get("/create", cp.create);





router.post("/create", upload.fields([
    { name: 'imgx', maxCount: 1 },
    { name: 'docx', maxCount: 1 }
]), async function (req, res, next) {
    // Hàm tải lên tệp lên Cloudinary
    const streamUpload = (file) => {
        return new Promise((resolve, reject) => {
            let stream = cloudinary.uploader.upload_stream(
                { resource_type: "auto" },                                                             // Tùy chọn này cho phép Cloudinary tự động nhận diện loại tài nguyên
                (error, result) => {
                    if (result) {                                                                           // HEY I"M HERE YOUR NOTE
                        resolve(result);
                    } else {
                        reject(error);
                    }
                }
            );

            // Tạo một luồng đọc từ buffer và chuyển đến Cloudinary
            streamifier.createReadStream(file.buffer).pipe(stream);
        });
    };

    try {
        console.log("Files received:", req.files);

        // Tải lên tệp hình ảnh
        const imgxResult = req.files.imgx ? await streamUpload(req.files.imgx[0]) : null;

        // Tải lên tệp .docx
        let docxResult = null;
        if (req.files.docx) {
            try {
                docxResult = await streamUpload(req.files.docx[0]);
            } catch (docxError) {
                console.error("Error uploading docx file:", docxError);
            }
        }

        console.log("imgxResult:", imgxResult);
        console.log("docxResult:", docxResult);

        // In URL của tệp hình ảnh nếu có
        if (imgxResult) {
            console.log("imgxResult.secure_url:", imgxResult.secure_url);
        }
        // đưa url cho req.body
        req.body.imgx = imgxResult ? imgxResult.url : null;
        req.body.docx = docxResult ? docxResult.url : null;

        // gọi controller
        cp.create_post(req,res);

    } catch (error) {
        console.error("Error uploading files:", error);
        next(error);
    }
});

router.delete("/delete/:id",cp.delete);
router.get("/edit/:id",cp.edit);
router.patch('/edit/:id', upload.fields([{ name: 'imgx', maxCount: 1 }, { name: 'docx', maxCount: 1 }]), cp.edit_patch);
    // chú ý khi có file up lên thì cần upload.fields([
    // { name: 'imgx', maxCount: 1 },
    // { name: 'docx', maxCount: 1 }
    // nếu ko req.body trả về rồng dù các ô input khác type có value
    // nếu không cập nhập file thì rrq.files sẽ trả []
    // nếu cập nhập cái nào thì sẽ chỉ hiển thị cái đó cái không cập nhập sẽ ko có
    // hay có thể hiểu đơn giản khi form đc gửi nêu nếu ko cập nhập tức inputfile đó ko có data và gửi lên form với 1 số ô bị thiếu
    // khi cập nhật thì ta sẽ k tra file đó có đc gửi lên ko nếu không tức ko cần cập nhật vào database
    // chứ khác với inputtext inputfile không có value mặc định 
module.exports = router;
