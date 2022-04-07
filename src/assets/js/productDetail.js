function chuyenAnh() {
    var colorsList = document.querySelectorAll(".home-product-item>.item-dt>img");
    for (var i = 0; i < colorsList.length; i++) {
        colorsList[i].onclick = function() {
            // alert(this.src);
            var mainImg = document.querySelector(".home-product-item>.item-img>img");
            mainImg.src = this.src;
        }
    }
    console.log("Đã chạy")
}