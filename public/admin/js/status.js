var statusPRO = document.querySelectorAll("[btn-status]");
var statusx="";
function x(i,url){
    statusPRO[i].onclick = ()=>{
        statusx = statusPRO[i].getAttribute("btn-status");
        
        window.location.href = url + "?status=" + statusx; 
    }
}
if(statusPRO.length > 0){

    for(var i = 0; i< statusPRO.length; i++){
        // var // var url = "http://localhost:3000/admin/product";
        var url = new URL(window.location.href).origin + new URL(window.location.href).pathname;
        // var url = new URL(window.location.href);
        console.log(url);
        x(i,url);
    }
}

// ở đây sai ở chỗ lầm tưởng rằng url sẽ không thay đổi do loop sẽ kết thúc trước khi có event click
// tuy nhiên url ở đây là 1 object ==> các x(i,url) đều trỏ tới object url khi window.location.href thay đổi ==> href của url cũng đổi
// dẫn tới việc http://localhost:3000/admin/product?status=inactive?status=active?status=inactive?status=active
// khắc phục cách 1 biến url thằng string
//var url = new URL(window.location.href).origin + new URL(window.location.href).pathname;
//==> nó sẽ cố định
// cách 2 dùng luôn  var url = "http://localhost:3000/admin/product";

// và lưu ý là đặt cái url ra ngoài vòng lập chứ để trong ko có ý nghĩa gì cả