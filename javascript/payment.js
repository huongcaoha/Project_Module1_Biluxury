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

// xử lý sự kiện chọn category tại navbar
let listTagCategorySlide = document.querySelectorAll(".categorySlide");
listTagCategorySlide.forEach((tag) =>
  tag.addEventListener("click", function (e) {
    categoryProduct = e.target.getAttribute("title");
    slide = e.target.getAttribute("title");
    let categorys = Object.values(getDataLocalstorage("category"));
    updateDataLocalStorage("filterProductCategory", categoryProduct);
    updateDataLocalStorage("slide", slide);
    updateDataLocalStorage(
      "filterProductCategory",
      categorys[Number.parseInt(slide)]
    );
    updateDataLocalStorage("filterProductColor", "");
    updateDataLocalStorage("filterProductPrice", "");
    updateDataLocalStorage("filterProductSearch", "");
    updateDataLocalStorage("currentPageProduct", 1);
    reload();
  })
);

// hiển thị icon giỏ hàng và số lượng sản phẩm trong giỏ hàng
const nameUserCart = getDataLocalstorage("nameUser") + "Carts";
let carts = getDataLocalstorage(nameUserCart) || [];
let totalProductCarts = carts.reduce(
  (pre, current) => (pre += current.quantity),
  0
);
let iconCart = document.getElementById("carts");
iconCart.innerHTML = ` <a href="../html/carts.html"><i class="fa-solid fa-cart-shopping" style="color : black"></i><span id="numberCarts">${totalProductCarts}</span></a>`;

// in ra list product in carts

let nameCarts = getDataLocalstorage("nameUser") + "Carts" || "";
let listCarts = getDataLocalstorage(nameCarts) || [];
let table = document.querySelector(".listProduct");
let count = 1;
console.log(listCarts);
for (let product of listCarts) {
  table.innerHTML += `<tr>
                <td>${count}</td>
                <td> <img src="${product.image1}" alt="product"></td>
                <td>${new Intl.NumberFormat("vi-VN", {
                  style: "decimal",
                }).format(product.price)}</td>
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>${new Intl.NumberFormat("vi-VN", {
                  style: "decimal",
                }).format(product.price * product.quantity)}</td>
            </tr>`;
  count++;
}
let totalMoney = listCarts.reduce(
  (pre, current) => (pre += current.price * current.quantity),
  0
);
table.innerHTML += `<tr>
                        <td>Tổng tiền : </td>
                        <td>${totalMoney}</td>
                        
                    </tr>`;
