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

// get data and print out client
let count = 1;
function loadCarts() {
  // hiển thị icon giỏ hàng và số lượng sản phẩm trong giỏ hàng
  const nameUserCart = getDataLocalstorage("nameUser") + "Carts";
  let carts = getDataLocalstorage(nameUserCart) || [];
  let totalProductCarts = carts.reduce(
    (pre, current) => (pre += current.quantity),
    0
  );
  let iconCart = document.getElementById("carts");
  iconCart.innerHTML = ` <a href="#"><i class="fa-solid fa-cart-shopping" style="color : black"></i><span id="numberCarts">${totalProductCarts}</span></a>`;

  let tableCarts = document.getElementById("table-carts");
  let nameCart = getDataLocalstorage("nameUser") + "Carts" || "";
  let listCarts = getDataLocalstorage(nameCart) || [];
  let totalMoney = document.getElementById("totalMoney");
  tableCarts.innerHTML = `<tr>
          <th>STT</th>
          <th>Image</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Size</th>
          <th>To Money</th>
          <th></th>
        </tr>`;
  for (let product of listCarts) {
    tableCarts.innerHTML += ` <tr>
          <td>${count}</td>
          <td><img src="${product.image1}" alt="image Product"></td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td><button class="down" idProduct=${product.id}>-</button> ${
      product.quantity
    } <button class="up" idProduct=${product.id}>+</button></td>
          <td>${product.size}</td>
          <td>${new Intl.NumberFormat("vi-VN", {
            style: "decimal",
          }).format(product.price * product.quantity)}</td>
          <td>
          <button class="buttonDelete" idProduct=${product.id}>Delete</button>
          </td>
        </tr>`;
    count++;
  }

  // in ra tổng giá trị đơn hàng và button đặt hàng
  let total = listCarts.reduce(
    (pre, current) => (pre += current.quantity * current.price),
    0
  );
  totalMoney.innerHTML = ` <h2>Tổng tiền : ${new Intl.NumberFormat("vi-VN", {
    style: "decimal",
  }).format(total)} VNĐ</h2>
   <a href="../html/payment.html"> <button id="order">Đặt hàng</button></a>`;

  // xử lý button + -  sản phẩm
  let buttonDeletes = document.querySelectorAll(".buttonDelete");
  const buttonUps = document.querySelectorAll(".up");
  const buttonDowns = document.querySelectorAll(".down");

  for (let up of buttonUps) {
    up.addEventListener("click", function () {
      const idProduct = up.getAttribute("idproduct");
      let indexCarts = listCarts.findIndex(
        (product) => product.id == idProduct
      );
      if (listCarts[indexCarts].quantity < 1000) {
        listCarts[indexCarts].quantity++;
        updateDataLocalStorage(nameCart, listCarts);
        loadCarts();
      }
    });
  }

  for (let down of buttonDowns) {
    down.addEventListener("click", function () {
      const idProduct = down.getAttribute("idproduct");
      let indexCarts = listCarts.findIndex(
        (product) => product.id == idProduct
      );
      if (listCarts[indexCarts].quantity >= 1) {
        listCarts[indexCarts].quantity--;
        updateDataLocalStorage(nameCart, listCarts);
        loadCarts();
      }
    });
  }

  for (let del of buttonDeletes) {
    del.addEventListener("click", function () {
      const idProduct = del.getAttribute("idproduct");
      let indexCarts = listCarts.findIndex(
        (product) => product.id == idProduct
      );
      listCarts.splice(indexCarts, 1);
      updateDataLocalStorage(nameCart, listCarts);
      loadCarts();
    });
  }
}
loadCarts();
