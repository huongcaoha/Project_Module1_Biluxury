function getDataLocalstorage(nameData) {
  return JSON.parse(localStorage.getItem(nameData));
}

function updateDataLocalStorage(nameData, newData) {
  localStorage.setItem(nameData, JSON.stringify(newData));
}

// in ra tên user
let tagUser = document.getElementById("user");
if (getDataLocalstorage("nameUser")) {
  const nameUser = getDataLocalstorage("nameUser");
  tagUser.innerHTML = `<a href="#"><i class="fa-solid fa-user"></i>${nameUser}</a>`;
} else {
  tagUser.innerHTML = `<a href="../html/login.html"><button id="buttonLogin">Login</button></a>`;
}

// xử lý button logout
if (document.getElementById("buttonLogout")) {
  let buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", function () {
    updateDataLocalStorage("nameUser", "");
    window.location.href = "../html/login.html";
  });
}

//lấy dữ liệu product hiện tại để show ra
function loadProduct() {
  let productSize = getDataLocalstorage("productSize") || 43;
  let arrDay = [
    "Chủ nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy",
  ];
  let day = new Date().getDay() + 3;
  if (day > 6) {
    day = day - 6;
  }
  day = arrDay[day];
  let month = new Date().getMonth() + 1;
  let date = new Date().getDate() + 3;
  if (date > 31) {
    date = date - 31;
    month++;
  }
  let id = 1;
  if (getDataLocalstorage("productDetail")) {
    id = getDataLocalstorage("productDetail");
  }

  let listProducts = {};
  if (getDataLocalstorage("products")) {
    listProducts = getDataLocalstorage("products");
  }
  let index = listProducts.findIndex((product) => product.id == id);
  let product = { ...listProducts[index] };

  let tagProductDetail = document.querySelector(".productDetail");
  tagProductDetail.innerHTML = ` <div class="image1">
        <img src="${product.image1}" alt="image" />
      </div>

      <div class="image2">
        <img src="${product.image2}" alt="image" />
      </div>
      <div class="inforProduct">
        <h2>
          ${product.name}
        </h2>
        <h3>5.0 ★★★★★ | Đã bán: 7355</h3>
        <p>Tình trạng: Còn ${product.inventory} sản phẩm</p>
        <h2>${new Intl.NumberFormat("vi-VN", { style: "decimal" }).format(
          product.price
        )} VNĐ</h2>
        <p>Size ✄ Giúp bạn chọn size Bảng size</p>
        <div class="size">
          <button id=39 class="buttonSize" ${
            productSize == 39 ? 'style= "background-color: cornflowerblue"' : ""
          }>39</button>
           <button id=40 class="buttonSize" ${
             productSize == 40
               ? 'style= "background-color: cornflowerblue"'
               : ""
           }>40</button>
            <button id=41 class="buttonSize" ${
              productSize == 41
                ? 'style= "background-color: cornflowerblue"'
                : ""
            }>41</button>
          <button id=42 class="buttonSize" ${
            productSize == 42 ? 'style= "background-color: cornflowerblue"' : ""
          }>42</button> 
          <button id=43 class="buttonSize" ${
            productSize == 43 ? 'style= "background-color: cornflowerblue"' : ""
          }>43</button><br />
        </div>
        <div class="quantity">
          <label for="quantity">Số Lượng :</label>
          <button id="down">-</button>
          <input type="number" name="quantity" id="quantity" value="1"/>
          <button id="up">+</button>
        </div>
        <button id="add">Thêm vào giỏ hàng</button>
        <p><b>Dự kiến giao hàng trước:</b> ${day}, Ngày ${date} tháng ${month}</p>
      </div>`;

  // xử lý sự kiện click vào button chọn size
  let buttonSizes = document.querySelectorAll(".buttonSize");
  for (let size of buttonSizes) {
    size.addEventListener("click", function (e) {
      let value = size.getAttribute("id");
      updateDataLocalStorage("productSize", value);
      loadProduct();
    });
  }
}
loadProduct();
