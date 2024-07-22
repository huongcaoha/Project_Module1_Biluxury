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
if (carts.length == 0) {
  window.location.href = "../html/main.html";
}
let totalProductCarts = carts.reduce(
  (pre, current) => (pre += current.quantity),
  0
);
let iconCart = document.getElementById("carts");
iconCart.innerHTML = ` <a href="../html/carts.html"><i class="fa-solid fa-cart-shopping" style="color : black"></i><span id="numberCarts">${totalProductCarts}</span></a>`;

// in ra list product in carts

// get data and print out client

function loadCarts() {
  let count = 1;
  // hiển thị icon giỏ hàng và số lượng sản phẩm trong giỏ hàng
  const nameUserCart = getDataLocalstorage("nameUser") + "Carts";
  let carts = getDataLocalstorage(nameUserCart) || [];
  let totalProductCarts = carts.reduce(
    (pre, current) => (pre += current.quantity),
    0
  );
  let iconCart = document.getElementById("carts");
  iconCart.innerHTML = ` <a href="../html/carts.html"><i class="fa-solid fa-cart-shopping" style="color : black"></i><span id="numberCarts">${totalProductCarts}</span></a>`;

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
            <td><button class="downSize" idProduct=${product.id}>-</button> ${
      product.size
    } <button class="upSize" idProduct=${product.id}>+</button></td>
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
  let totalMoneyOrders = document.querySelector(".totalMoney");
  let total = listCarts.reduce(
    (pre, current) => (pre += current.quantity * current.price),
    0
  );
  totalMoneyOrders.innerHTML = ` <h2>Tổng tiền : ${new Intl.NumberFormat(
    "vi-VN",
    {
      style: "decimal",
    }
  ).format(total)} VNĐ</h2>`;

  // xử lý button đặt hàng
  let order = document.getElementById("order");
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let email = document.getElementById("email");
  let address = document.getElementById("address");
  let district = document.getElementById("district");
  let city = document.getElementById("city");
  let payMethod = "";
  let radios = document.getElementsByName("payMethod");

  for (let radio of radios) {
    radio.addEventListener("click", function () {
      if (radio.checked) {
        payMethod = radio.value;
      }
    });
  }

  order.addEventListener("click", function () {
    console.log("paymethod", payMethod);
    if (
      !name.value ||
      !phone.value ||
      !email.value ||
      !address.value ||
      !district.value ||
      !city.value ||
      !payMethod
    ) {
      alert("Do not leave information boxes blank");
    } else {
      let listOrders = getDataLocalstorage("listOrders") || [];
      let id = 1;
      if (listOrders.length > 0) {
        id = listOrders[listOrders.length - 1].id + 1;
      }
      let newOrder = {
        id: id,
        products: listCarts,
        name: name.value,
        phone: phone.value,
        email: email.value,
        address: address.value,
        district: district.value,
        city: city.value,
        totalMoney: total,
        payMethod: payMethod,
        status: 1,
        date: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        createdTime:
          new Date().getDate().toString() +
          "/" +
          (new Date().getMonth() + 1).toString() +
          "/" +
          new Date().getFullYear().toString(),
      };
      console.log(payMethod);
      listOrders.push(newOrder);
      updateDataLocalStorage(nameCart, []);
      updateDataLocalStorage("listOrders", listOrders);
      alert("Đặt hàng thành công !");
      window.location.href = "../html/main.html";
    }
  });

  // tạo mã QR thanh toán
  let qr = document.querySelector(".qr");
  qr.innerHTML = ` <img src="https://api.vietqr.io/image/970415-113366668888-AZ9OO6e.jpg?amount=${total}&addInfo=1233456789" alt="QR">`;

  // xử lý chọn phương thức thanh toán
  let tagQr = document.querySelector(".qr");
  let cash = document.getElementById("cash");
  let banking = document.getElementById("banking");
  cash.addEventListener("click", function () {
    tagQr.style.display = "none";
  });

  banking.addEventListener("click", function () {
    tagQr.style.display = "block";
  });
  // xử lý upSize & downSize
  let upSizes = document.querySelectorAll(".upSize");
  let downSizes = document.querySelectorAll(".downSize");
  for (let upSize of upSizes) {
    upSize.addEventListener("click", function () {
      const idProduct = upSize.getAttribute("idproduct");
      let indexCarts = listCarts.findIndex(
        (product) => product.id == idProduct
      );
      if (listCarts[indexCarts].size < 43) {
        listCarts[indexCarts].size++;
        updateDataLocalStorage(nameCart, listCarts);
        loadCarts();
      }
    });
  }

  for (let downSize of downSizes) {
    downSize.addEventListener("click", function () {
      const idProduct = downSize.getAttribute("idproduct");
      let indexCarts = listCarts.findIndex(
        (product) => product.id == idProduct
      );
      if (listCarts[indexCarts].size > 39) {
        listCarts[indexCarts].size--;
        updateDataLocalStorage(nameCart, listCarts);
        loadCarts();
      }
    });
  }
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
      if (listCarts[indexCarts].quantity > 1) {
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
