function chuyenAnh() {
    var colorsList = document.querySelectorAll(".home-product-item>.item-dt>img");
    for (var i = 0; i < colorsList.length; i++) {
        colorsList[i].onclick = function() {
            // alert(this.src);
            var mainImg = document.querySelector(".home-product-item>.item-img>img");
            mainImg.src = this.src;
        }
    }
}

//Bắt đầu cắt mảng tại index= start, kết thúc tại index=end-1
function mangBlog(mang, start, end) {
    return mang.slice(start, end)
}

//Hàm hiển thị form thay đổi thông tin đặt hàng
function hienThiFormThayDoi() {
    document.getElementById('pop-up').style.display = "block";
}

//Hàm ẩn form thay đổi thông tin đặt hàng
function anFormThayDoi() {
    document.getElementById('pop-up').style.display = "none";
    console.log("Đã ẩn")
}