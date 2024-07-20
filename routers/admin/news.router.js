const express = require("express");
const multer = require("multer");
const cp = require("../../controllers/admin/news.controller");

const upload = multer({ dest: "./public/upload/" });
const router = express.Router();

router.get("/", cp.newsAD);
router.get("/create", cp.create);





router.post("/create", upload.fields([
    { name: 'imgx', maxCount: 1 },
    { name: 'docx', maxCount: 1 }
]), cp.create_post);

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
