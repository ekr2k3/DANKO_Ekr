const Ns = require("../../models/product.model");



module.exports.newsAD = async (req, res) => {

    let condition = {
        deleted: false
    }
    var data = await Ns.find(condition);
    res.render("admin/pages/news/index", {
        title: "List item",
        da: data
    })
}

module.exports.delete = async (req, res) => {
    const id = req.params.id;

    await Ns.deleteOne({ _id: id });
    res.redirect("back");
}






module.exports.create = async (req, res) => {

    res.render("admin/pages/news/create", {
        title: "Thêm item"
    })
}

module.exports.create_post = async (req, res) => {
    console.log(req.files); // req.file hay flies tùy vào việc bạn chọn chế độ gì
    // res.send("ok");
    const imageFile = req.files['imgx'][0];
    const docxFile = req.files['docx'][0];

    const imageFilePath = `/upload/${imageFile.filename}`;
    const docxFilePath = `/upload/${docxFile.filename}`;
    const docxFileName = docxFile.originalname; // Lấy tên gốc của file docx

    req.body.imgx = imageFilePath;
    req.body.docx = docxFilePath;
    req.body.docxFileName = docxFileName; // Thêm tên file docx vào body

    console.log(imageFilePath + "  " + docxFilePath);
    console.log(typeof (imageFilePath));
    console.log(req.body);

    const news = new Ns(req.body);
    await news.save();

    // res.redirect('/'); [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // do ta dùng 2 cái res phản hồi --> bỏ cái ok bên trên
    res.redirect('/admin/news');


}

module.exports.edit = async (req, res) => {
    let condition = {
        deleted: false,
        _id: req.params.id
    }
    try {
        const Nse = await Ns.findOne(condition);

        res.render("admin/pages/news/edit", {
            title: "Edit item",
            da: Nse
        })
    } catch (error) {
        // req.flash("error"," không tồn tại ")
        res.redirect("/admin/news")
    }
}

module.exports.edit_patch = async (req, res) => {
    if(req.files){
       // Check if 'imgx' files exist
       if (req.files['imgx'] && req.files['imgx'][0]) {
        req.body.imgx = "/upload/" + req.files['imgx'][0].filename;
    }

    // Check if 'docx' files exist
    if (req.files['docx'] && req.files['docx'][0]) {
        req.body.docx = "/upload/" + req.files['docx'][0].filename;
        req.body.docxFileName = req.files['docx'][0].originalname;
    }
    }
    try {
        await Ns.updateOne({_id : req.params.id },
            req.body
        )
        res.redirect('back');
    } catch (error) {
        res.redirect('back');
    };
}