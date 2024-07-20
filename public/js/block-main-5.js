var buttons = document.querySelectorAll(".control-5 button");
var url = [
    "2024.4.2 Dự án Danko Riverside Bắc Giang _compressed-hình ảnh-7.jpg",
    "2024.4.2 Dự án Danko Riverside Bắc Giang _compressed-hình ảnh-8.jpg",
    "2024.4.2 Dự án Danko Riverside Bắc Giang _compressed-hình ảnh-9.jpg",
    "2024.4.2 Dự án Danko Riverside Bắc Giang _compressed-hình ảnh-10.jpg",
    "2024.4.2 Dự án Danko Riverside Bắc Giang _compressed-hình ảnh-11.jpg",
    "2024.4.2 Dự án Danko Riverside Bắc Giang _compressed-hình ảnh-12.jpg",
    "2024.4.2 Dự án Danko Riverside Bắc Giang _compressed-hình ảnh-13.jpg",
    "2024.4.2 Dự án Danko Riverside Bắc Giang _compressed-hình ảnh-14.jpg",
    "2024.4.2 Dự án Danko Riverside Bắc Giang _compressed-hình ảnh-15.jpg",
    "2024.4.2 Dự án Danko Riverside Bắc Giang _compressed-hình ảnh-16.jpg",
    "2024.4.2 Dự án Danko Riverside Bắc Giang _compressed-hình ảnh-17.jpg",
    "2024.4.2 Dự án Danko Riverside Bắc Giang _compressed-hình ảnh-18.jpg",
    "2024.4.2 Dự án Danko Riverside Bắc Giang _compressed-hình ảnh-19.jpg"
]

var path = "/img/";

function eventB(i) {
    buttons[i].onclick = () => {
        var curUrl = document.querySelector(".main-img-5 img");
        curUrl.setAttribute("src", path + url[i]);

        let lastButtonActive = document.querySelector(".control-5 button.active");
        lastButtonActive.classList.remove("active"); // xóa class active đi khỏi dot cũ
        buttons[i].classList.add('active');
    }
}

for (var i = 0; i < buttons.length; i++) {
    eventB(i);
}