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