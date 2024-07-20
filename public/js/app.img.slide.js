let list = document.querySelector(".slide .list");
let items = document.querySelectorAll(".slide .list .item");
let dots = document.querySelectorAll(".slide .dots li");

let prev = document.getElementById("prev");
let next = document.getElementById("next");

// vị trí active đầu tiên
let active = 0;
let NumberOfItems = items.length - 1; // tru 1 do index

let autoSlide = setInterval(() => {
    next.click();
}, 7000); // khi người dùng click để truyển slide thì sẽ gặp tình trạng nó chuyển tự động luôn
// giả sử đọc slide 1 3s người dùng chuyển slide 2 thì 24321ms sau nó chuyển luôn slide 3 thay vì 54321 mới chuyển ý là bất đồng bộ time
// ==> khi người dùng chuyển slide ta xóa cái đếm và gọi nó lại


function reloadSlide() {
    let checkLeft = items[active].offsetLeft;
    //active đc khai báo ở ngoài (tương đương nó global)
     // offsetLeft thuộc tính có săn trong DOM lấy khoảng cách từ vị trí bên trái nó đến bên trái phần tử cha gần nó nhất
    // ví dụ đang ở 1 chuyển active sang 4 ==> vị trí left 4 đến vị trí bên trái khung cha 
    list.style.left = - checkLeft + "px";     // chỉnh css của list cách trái 1 khoảng

    let lastDotActive = document.querySelector(".slide .dots .active");
    lastDotActive.classList.remove("active"); // xóa class active đi khỏi dot cũ
    dots[active].classList.add('active');


    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        next.click();
    }, 7000);
}

function eachDots(i){
    dots[i].addEventListener('click',()=>{
        active = i;
        reloadSlide();
    })
}

next.onclick = () => {
    if (active + 1 > NumberOfItems) {
        active = 0;
    }
    else {
        active += 1;
    }
    reloadSlide()
}

prev.onclick = () => {
    if (active - 1 < 0) {
        active = NumberOfItems;
    }
    else {
        active -= 1;
    }
    reloadSlide()
}

for(var i = 0; i< dots.length ; i++){
    eachDots(i);
}