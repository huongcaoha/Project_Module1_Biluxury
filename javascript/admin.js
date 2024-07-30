// function xử lý trạng thái đơn hàng
function handleStatus(status, order) {
  switch (Number.parseInt(status)) {
    case 1: {
      return `<td>
      <button class="orderButtonConfirm" title="${order.id}">Confirm</button>
              <button class="orderButtonDelete" title="${order.id}">Delete</button>
               <button class="orderButtonDetail" title="${order.id}">Detail</button>
              </td>`;
    }
    case 2: {
      return `<td>
      <button class="orderButtonDelivery" title="${order.id}">Delivery</button>
       <button class="orderButtonDetail" title="${order.id}">Detail</button>
              </td>`;
    }

    case 3: {
      return `<td>
       <button class="orderButtonDetail" title="${order.id}">Detail</button>
        <button class="orderButtonDelivered" title="${order.id}">Delivered</button>
              </td>`;
    }

    case 4: {
      return `<td>
       <button class="orderButtonDetail" title="${order.id}">Detail</button>
              </td>`;
    }

    case 0: {
      return `<td>
       <button class="orderButtonDetail" title="${order.id}">Detail</button>
              </td>`;
    }
  }
}

// kiểm tra xem đã đăng nhập tài khoản chưa ?
if (!getDataLocalstorage("statusLogin")) {
  window.location.href = "../html/login.html";
}
if (getDataLocalstorage("statusLogin") != 2) {
  window.location.href = "../html/login.html";
}
// hiển thị tên admin
let navAdmin = document.querySelector(".nav-admin");
let admin = "";
if (getDataLocalstorage("admin")) {
  admin = getDataLocalstorage("admin");
} else {
  window.location.href = "../html/login.html";
}

navAdmin.innerHTML += `<li><i class="fa-solid fa-user-tie"></i><b>${admin}</b></li>
 <li><a href="./login.html"><i class="fa-solid fa-right-from-bracket" id="buttonLogout"></i></a></li>`;

//------------------

// xử lý button login
if (document.getElementById("buttonLogout")) {
  let buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", function () {
    updateDataLocalStorage("nameUser", "");
    updateDataLocalStorage("statusLogin", 0);
    window.location.href = "../html/login.html";
  });
}

//------------------
const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});
getDataLocalstorage;
// -------------------------------------------------------------------Controls dashbroad
const humbergerNavBar = document.querySelectorAll(".humberger-navBar");
for (let nav of humbergerNavBar) {
  let value = nav.getAttribute("title");
  nav.addEventListener("click", function () {
    updateDataLocalStorage("currentDisplayContent", value);
    window.location.reload();
  });
}
const controlContent1 = document.getElementById("content1");
controlContent1.addEventListener("click", function () {
  updateDataLocalStorage("currentDisplayContent", 1);
  window.location.reload();
});

const controlProduct = document.getElementById("section-product");
controlProduct.addEventListener("click", function () {
  updateDataLocalStorage("currentDisplayContent", 2);
  window.location.reload();
});

const controlRevenue = document.getElementById("section-revenue");
controlRevenue.addEventListener("click", function () {
  updateDataLocalStorage("currentDisplayContent", 3);
  window.location.reload();
});

const controlUser = document.getElementById("section-user");
controlUser.addEventListener("click", function () {
  updateDataLocalStorage("currentDisplayContent", 4);
  window.location.reload();
});

const controlOrder = document.getElementById("section-order");
controlOrder.addEventListener("click", function () {
  updateDataLocalStorage("currentDisplayContent", 5);
  window.location.reload();
});

const controlCategory = document.getElementById("section-category");
controlCategory.addEventListener("click", function () {
  updateDataLocalStorage("currentDisplayContent", 6);
  window.location.reload();
});

// Điều khiển các khối trong trang admin
let blockContent1 = document.querySelector(".content1");
let blockSectionProduct = document.querySelector(".section-product");
let blockSectionRevenue = document.querySelector(".section-revenue");
let blockSectionUser = document.querySelector(".section-user");
let blockSectionOrder = document.querySelector(".section-order");
let blockSectionCategory = document.querySelector(".section-category");
let listBlockSections = [
  blockContent1,
  blockSectionProduct,
  blockSectionRevenue,
  blockSectionUser,
  blockSectionOrder,
  blockSectionCategory,
];

let controlBlockContent1 = document.querySelector("#content1");
let controlBlockSectionProduct = document.querySelector("#section-product");
let controlBlockSectionRevenue = document.querySelector("#section-revenue");
let controlBlockSectionUser = document.querySelector("#section-user");
let controlBlockSectionOrder = document.querySelector("#section-order");
let controlBlockSectionCategory = document.querySelector("#section-category");
let listControlBlocks = [
  "huongcaoha",
  controlBlockContent1,
  controlBlockSectionProduct,
  controlBlockSectionRevenue,
  controlBlockSectionUser,
  controlBlockSectionOrder,
  controlBlockSectionCategory,
];
for (let i = 1; i < listControlBlocks.length; i++) {
  if (i == Number.parseInt(getDataLocalstorage("currentDisplayContent"))) {
    listControlBlocks[i].style.color = "#2196f7";
    break;
  }
}
//

let listOrders = [];
if (getDataLocalstorage("listOrders")) {
  listOrders = Object.values(getDataLocalstorage("listOrders"));
}

let content1 = document.querySelector(".content1");

let sectionProduct = document.querySelector(".section-product");

let sectionRevenue = document.querySelector(".section-revenue");

let sectionUser = document.querySelector(".section-user");

let sectionOrder = document.querySelector(".section-order");

let sectionCategory = document.querySelector(".section-category");

let listControls = [
  "123",
  content1,
  sectionProduct,
  sectionRevenue,
  sectionUser,
  sectionOrder,
  sectionCategory,
];

let currentDisplayContent = getDataLocalstorage("currentDisplayContent");
for (let i = 1; i < listControls.length; i++) {
  if (i != currentDisplayContent) {
    listControls[i].classList.add("display-none");
  }
}

if (!getDataLocalstorage("listOrders")) {
  updateDataLocalStorage("listOrders", []);
}

// ----------------------------------------------------------------------------------section Content1

let revenueMonth1 = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) =>
      order.month == 1 &&
      order.year == new Date().getFullYear() &&
      order.status == 4
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth1 = Math.ceil((revenueMonth1 / 100000000) * 100);

let revenueMonth2 = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) =>
      order.month == 2 &&
      order.year == new Date().getFullYear() &&
      order.status == 4
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth2 = Math.ceil((revenueMonth2 / 100000000) * 100);

let revenueMonth3 = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) =>
      order.month == 3 &&
      order.year == new Date().getFullYear() &&
      order.status == 4
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth3 = Math.ceil((revenueMonth3 / 100000000) * 100);

let revenueMonth4 = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) =>
      order.month == 4 &&
      order.year == new Date().getFullYear() &&
      order.status == 4
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth4 = Math.ceil((revenueMonth4 / 100000000) * 100);

let revenueMonth5 = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) =>
      order.month == 5 &&
      order.year == new Date().getFullYear() &&
      order.status == 4
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth5 = Math.ceil((revenueMonth5 / 100000000) * 100);

let revenueMonth6 = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) =>
      order.month == 6 &&
      order.year == new Date().getFullYear() &&
      order.status == 4
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth6 = Math.ceil((revenueMonth6 / 100000000) * 100);

let revenueMonth7 = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) =>
      order.month == 7 &&
      order.year == new Date().getFullYear() &&
      order.status == 4
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth7 = Math.ceil((revenueMonth7 / 100000000) * 100);

let revenueMonth8 = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) =>
      order.month == 8 &&
      order.year == new Date().getFullYear() &&
      order.status == 4
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth8 = Math.ceil((revenueMonth8 / 100000000) * 100);

let revenueMonth9 = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) =>
      order.month == 9 &&
      order.year == new Date().getFullYear() &&
      order.status == 4
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth9 = Math.ceil((revenueMonth9 / 100000000) * 100);

let revenueMonth10 = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) =>
      order.month == 10 &&
      order.year == new Date().getFullYear() &&
      order.status == 4
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth10 = Math.ceil((revenueMonth10 / 100000000) * 100);

let revenueMonth11 = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) =>
      order.month == 11 &&
      order.year == new Date().getFullYear() &&
      order.status == 4
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth11 = Math.ceil((revenueMonth11 / 100000000) * 100);

let revenueMonth12 = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) =>
      order.month == 12 &&
      order.year == new Date().getFullYear() &&
      order.status == 4
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth12 = Math.ceil((revenueMonth12 / 100000000) * 100);

const countProduct = getDataLocalstorage("products")
  ? getDataLocalstorage("products").length
  : 0;

// tạo dữ liệu giả để phục vụ cho tạo trang Users
class User {
  constructor(id, username, password, email, phoneNumber, birthday) {
    (this.id = id),
      (this.username = username),
      (this.password = password),
      (this.email = email),
      (this.phoneNumber = phoneNumber),
      (this.birthday = birthday),
      (this.status = 1),
      (this.createdDate = new Date());
  }
}
let listUsersDemo = [];
for (let i = 1; i <= 20; i++) {
  let newUser = new User(
    i,
    `user${i}`,
    "123456789",
    `user${i}@gmail.com`,
    "0123456789",
    "23/08/1994"
  );
  listUsersDemo.push(newUser);
}
if (!getDataLocalstorage("listUsers")) {
  updateDataLocalStorage("listUsers", listUsersDemo);
}

const revenue = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) =>
      order.month == new Date().getMonth() + 1 &&
      order.year == new Date().getFullYear() &&
      order.status == 4
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
const countOrder = Object.values(getDataLocalstorage("listOrders")).filter(
  (order) =>
    order.month == new Date().getMonth() + 1 &&
    order.year == new Date().getFullYear()
).length;
const countUser = Object.values(getDataLocalstorage("listUsers")).length;
const htmlContent1 = ` <div class="dashboard">
          <h1>Statistical</h1>
        </div>

        <div class="statistical">
          <div class="sub-statistical statistical1">
            <div>
              <i class="fa-solid fa-chart-simple"></i>
            </div>
            <div>
              <h3>${countProduct}</h3>
              <h3>Products</h3>
            </div>
          </div>

          <div class="sub-statistical statistical2">
            <div>
              <i class="fa-solid fa-money-bill-trend-up"></i>
            </div>
            <div>
              <h3>${formatter.format(revenue)}</h3>
              <h3>Revenue Month</h3>
            </div>
          </div>

          <div class="sub-statistical statistical3">
            <div>
              <i class="fa-solid fa-users"></i>
            </div>
            <div>
              <h3>${countUser}</h3>
              <h3>Users</h3>
            </div>
          </div>

          <div class="sub-statistical statistical4">
            <div>
              <i class="fa-solid fa-border-all"></i>
            </div>
            <div>
              <h3>${countOrder}</h3>
              <h3>Orders Month</h3>
            </div>
          </div>
        </div>

        <div class="chart">
          <div id="month1" class="col-month" title="${revenueMonth1}">
            <p class="percent">${revenueMonth1}%</p>
            <p class="month">Tháng 1</p>
          </div>

          <div id="month2" class="col-month" title="${revenueMonth2}">
            <p class="percent">${revenueMonth2}%</p>
            <p class="month">Tháng 2</p>
          </div>

          <div id="month3" class="col-month" title="${revenueMonth3}">
            <p class="percent">${revenueMonth3}%</p>
            <p class="month">Tháng 3</p>
          </div>

          <div id="month4" class="col-month" title="${revenueMonth4}">
            <p class="percent">${revenueMonth4}%</p>
            <p class="month">Tháng 4</p>
          </div>

          <div id="month5" class="col-month" title="${revenueMonth5}">
            <p class="percent">${revenueMonth5}%</p>
            <p class="month">Tháng 5</p>
          </div>

          <div id="month6" class="col-month" title="${revenueMonth6}">
            <p class="percent">${revenueMonth6}%</p>
            <p class="month">Tháng 6</p>
          </div>

          <div id="month7" class="col-month" title="${revenueMonth7}">
            <p class="percent">${revenueMonth7}%</p>
            <p class="month">Tháng 7</p>
          </div>

          <div id="month8" class="col-month" title="${revenueMonth8}">
            <p class="percent">${revenueMonth8}%</p>
            <p class="month">Tháng 8</p>
          </div>

          <div id="month9" class="col-month" title="${revenueMonth9}">
            <p class="percent">${revenueMonth9}%</p>
            <p class="month">Tháng 9</p>
          </div>

          <div id="month10" class="col-month" title="${revenueMonth10}">
            <p class="percent">${revenueMonth10}%</p>
            <p class="month">Tháng 10</p>
          </div>

          <div id="month11" class="col-month" title="${revenueMonth11}">
            <p class="percent">${revenueMonth11}%</p>
            <p class="month">Tháng 11</p>
          </div>

          <div id="month12" class="col-month" title="${revenueMonth12}">
            <p class="percent">${revenueMonth12}%</p>
            <p class="month">Tháng 12</p>
          </div>
        </div>`;
content1.innerHTML = htmlContent1;
let colRevenueMonth1 = document.getElementById("month1");
let colRevenueMonth2 = document.getElementById("month2");
let colRevenueMonth3 = document.getElementById("month3");
let colRevenueMonth4 = document.getElementById("month4");
let colRevenueMonth5 = document.getElementById("month5");
let colRevenueMonth6 = document.getElementById("month6");
let colRevenueMonth7 = document.getElementById("month7");
let colRevenueMonth8 = document.getElementById("month8");
let colRevenueMonth9 = document.getElementById("month9");
let colRevenueMonth10 = document.getElementById("month10");
let colRevenueMonth11 = document.getElementById("month11");
let colRevenueMonth12 = document.getElementById("month12");

let arrMonths = [
  colRevenueMonth1,
  colRevenueMonth2,
  colRevenueMonth3,
  colRevenueMonth4,
  colRevenueMonth5,
  colRevenueMonth6,
  colRevenueMonth7,
  colRevenueMonth8,
  colRevenueMonth9,
  colRevenueMonth10,
  colRevenueMonth11,
  colRevenueMonth12,
];
for (let month of arrMonths) {
  let value =
    month.getAttribute("title") * 0.4 <= 40
      ? month.getAttribute("title") * 0.4
      : 40;
  month.style.height = `${value}vh`;
}
// ---------------------------------------------------------------------------------section products---------------------------------------------------------------------------

//in ra công cụ tìm kiếm trong filter product
let search = getDataLocalstorage("productFilterSearch")
  ? getDataLocalstorage("productFilterSearch").trim()
  : "";
let price = getDataLocalstorage("productFilterPrice")
  ? getDataLocalstorage("productFilterPrice")
  : 0;
let category = getDataLocalstorage("productFilterCategory")
  ? getDataLocalstorage("productFilterCategory")
  : "";
let color = getDataLocalstorage("productFilterColor")
  ? getDataLocalstorage("productFilterColor")
  : "";
let productFilterNav = document.querySelector(".productFilterNav");
let categories = getDataLocalstorage("category") || [];
let currentCategoryFilter = getDataLocalstorage("productFilterCategory") || "";
let contentCategory = `<option value="">select</option>`;
for (let category of categories) {
  contentCategory += ` <option value="${category}" ${
    currentCategoryFilter == category ? "selected" : ""
  }>${category}</option>`;
}
productFilterNav.innerHTML = ` <input type="text" name="productSearch" id="productSearch" placeholder="${search}"/>
            <button class="productButtonSearch">Search</button>
            <br />

            <label for="filterPrice">Price</label>
            <select name="filterPrice" id="filterPrice">
              <option value="">Select</option>
              <option value="300000" ${
                price == "300000" ? "selected" : ""
              }>Dưới 300k</option>
              <option value="1000000" ${
                price == "1000000" ? "selected" : ""
              }>300k-1000k</option>
              <option value="2000000" ${
                price == "2000000" ? "selected" : ""
              }>1000k-2000k</option>
              <option value="3000000" ${
                price == "3000000" ? "selected" : ""
              }>2000k-3000k</option>
              <option value="" ${price == "" ? "selected" : ""}>Tất cả</option>
            </select>
            <br />

            <label for="filterCategory">Category</label>
            <select name="filterCategory" id="filterCategory">
              ${contentCategory}
            </select>
            <br />

            <label for="filterColor">Color</label>
            <select name="filterColor" id="filterColor">
              <option value="">Select</option>
              <option value="black" ${
                color == "black" ? "selected" : ""
              }>Black</option>
              <option value="white" ${
                color == "white" ? "selected" : ""
              }>White</option>
              <option value="purple" ${
                color == "purple" ? "selected" : ""
              }>Purple</option>
              <option value="gray" ${
                color == "gray" ? "selected" : ""
              }>Gray</option>
              <option value="blue" ${
                color == "blue" ? "selected" : ""
              }>Blue</option>
              <option value="brown" ${
                color == "brown" ? "selected" : ""
              }>Brown</option>
              <option value="pink" ${
                color == "pink" ? "selected" : ""
              }>Pink</option>
              <option value="grey" ${
                color == "grey" ? "selected" : ""
              }>Grey</option>
              <option value="" ${color == "" ? "selected" : ""}>Tất cả</option>
            </select>`;

// filter product

if (!getDataLocalstorage("productFilterSearch")) {
  updateDataLocalStorage("productFilterSearch", "");
}
if (!getDataLocalstorage("productFilterCategory")) {
  updateDataLocalStorage("productFilterCategory", "");
}
if (!getDataLocalstorage("productFilterColor")) {
  updateDataLocalStorage("productFilterColor", "");
}
if (!getDataLocalstorage("productFilterPrice")) {
  updateDataLocalStorage("productFilterPrice", "");
}

let productFilterSearch = document.getElementById("productSearch");
let productButtonSearch = document.querySelector(".productButtonSearch");
productButtonSearch.addEventListener("click", function () {
  updateDataLocalStorage("productFilterSearch", productFilterSearch.value);
  window.location.reload();
});

let productFilterPrice = document.getElementById("filterPrice");
productFilterPrice.addEventListener("change", function () {
  updateDataLocalStorage("productFilterPrice", productFilterPrice.value);
  window.location.reload();
});

let productFilterCategory = document.getElementById("filterCategory");
productFilterCategory.addEventListener("change", function () {
  updateDataLocalStorage("productFilterCategory", productFilterCategory.value);
  window.location.reload();
});

let productFilterColor = document.getElementById("filterColor");
productFilterColor.addEventListener("change", function () {
  updateDataLocalStorage("productFilterColor", productFilterColor.value);
  window.location.reload();
});

function getDataLocalstorage(nameData) {
  return JSON.parse(localStorage.getItem(nameData));
}

function updateDataLocalStorage(nameData, newData) {
  localStorage.setItem(nameData, JSON.stringify(newData));
}

let tagTableProduct = document.getElementById("table-product");

let totalProducts = [];
let productsData = getDataLocalstorage("products");
if (productsData == null) {
} else {
  totalProducts = Object.values(getDataLocalstorage("products"));
}
let productTagPagination = document.querySelector(".pagination");
const itemPerPage = 5;
let totalPage = Math.ceil(totalProducts.length / itemPerPage);
let adminProductCurrentPage = 1;

if (getDataLocalstorage("adminProductCurrentPage")) {
  adminProductCurrentPage = getDataLocalstorage("adminProductCurrentPage");
}
let skipProduct = (adminProductCurrentPage - 1) * itemPerPage;
let currentProducts = [];

if (!search && !price && !category && !color) {
  currentProducts = totalProducts.slice(skipProduct, skipProduct + itemPerPage);
} else {
  currentProducts = getDataLocalstorage("products");

  if (search) {
    currentProducts = totalProducts.filter((product) =>
      new RegExp(search, "i").test(product.name.toLowerCase())
    );
  }

  if (price) {
    currentProducts = currentProducts.filter((product) =>
      price == 3000000
        ? product.price < price && product.price >= 2000000
        : product.price < price
    );
  }

  if (category) {
    currentProducts = currentProducts.filter(
      (product) => product.category == category
    );
  }

  if (color) {
    currentProducts = currentProducts.filter(
      (product) => product.color == color
    );
  }

  adminProductCurrentPage = getDataLocalstorage("adminProductCurrentPage");
  totalPage = Math.ceil(currentProducts.length / itemPerPage);
  if (adminProductCurrentPage > totalPage) {
    updateDataLocalStorage("adminProductCurrentPage", 1);
    adminProductCurrentPage = getDataLocalstorage("adminProductCurrentPage");
  }
  let skip = (adminProductCurrentPage - 1) * itemPerPage;
  if (currentProducts.length > 5) {
    currentProducts = currentProducts.slice(skip, skip + 5);
  }
}
if (currentProducts.length == 0) {
  alert("Không tìm thấy sản phẩm nào !");
  updateDataLocalStorage("productFilterSearch", "");
  updateDataLocalStorage("productFilterCategory", "");
  updateDataLocalStorage("productFilterColor", "");
  updateDataLocalStorage("productFilterPrice", "");
}
function getProduct(currentProducts) {
  let contentHtmlTable = ` <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Inventory</th>
            <th>Color</th>
            <th>Category</th>
            <th></th>
          </tr>`;
  for (let product of currentProducts) {
    contentHtmlTable += `
            <tr>
            <td>${product.id}</td>
            <td><img src="${product.image1}" alt="${product.name}" /></td>
            <td>${product.name}</td>
            <td>${product.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}</td>
            <td>${product.inventory}</td>
            <td>${product.color}</td>
            <td>${product.category}</td>
            <td>
              
              <button class="productButtonUpdate" title="${
                product.id
              }">Update</button>
              <button class="productButtonDelete" title="${
                product.id
              }">Delete</button>
            </td>
          </tr>
        `;
  }
  return contentHtmlTable;
}

let curentPagination = Math.ceil(adminProductCurrentPage / 10) * 10;

function getCurrentPagination(adminProductCurrentPage) {
  let rs = `<button id="lt-pagination">&lt;</button>`;

  for (let i = curentPagination - 9; i <= curentPagination; i++) {
    if (adminProductCurrentPage == i) {
      rs += `<button class="sub-pagination" title="${i}" style="background-color: #2bcfe7;">${i}</button>`;
    } else {
      rs += `<button class="sub-pagination" title="${i}">${i}</button>`;
    }
    if (i == totalPage) {
      break;
    }
  }
  rs += `<button id="gt-pagination">&gt;</button>`;

  return rs;
}

function updateProducts(
  tagTableProduct,
  tagPagination,
  adminProductCurrentPage,
  currentProducts
) {
  tagTableProduct.innerHTML += getProduct(currentProducts);
  tagPagination.innerHTML += getCurrentPagination(adminProductCurrentPage);
}
updateProducts(
  tagTableProduct,
  productTagPagination,
  adminProductCurrentPage,
  currentProducts
);

// phân trang admin product
let subPagination = document.querySelectorAll(".sub-pagination");
let ltPagination = document.getElementById("lt-pagination");
let gtPagination = document.getElementById("gt-pagination");
for (let pagination of subPagination) {
  let adminProductCurrentPage = pagination.getAttribute("title");
  pagination.addEventListener("click", function (e) {
    updateDataLocalStorage("adminProductCurrentPage", adminProductCurrentPage);
    window.location.reload();
  });
}

ltPagination.addEventListener("click", function (e) {
  if (adminProductCurrentPage > 10) {
    updateDataLocalStorage(
      "adminProductCurrentPage",
      adminProductCurrentPage - 10
    );
    window.location.reload();
  }
});

gtPagination.addEventListener("click", function (e) {
  if (adminProductCurrentPage + 10 <= totalPage) {
    updateDataLocalStorage(
      "adminProductCurrentPage",
      adminProductCurrentPage + 10
    );
    window.location.reload();
  } else {
    updateDataLocalStorage("adminProductCurrentPage", totalPage);
    window.location.reload();
  }
});

// render category cho form tạo mới product
let selectInputCategory = document.getElementById("productInputCategory");
selectInputCategory.innerHTML = contentCategory;

// create new product
let productFormCreate = document.getElementById("productFormCreate");
let productButtonCreate = document.getElementById("productButtonCreate");
let productButtonCancel = document.querySelector(".productButtonCancel");
let buttonDisplayFormCreate = document.querySelector(
  "#buttonDisplayFormCreate"
);

buttonDisplayFormCreate.addEventListener("click", function () {
  productFormCreate.style.display = "block";
});
window.onclick = function (e) {
  if (e.target == productFormCreate) {
    productFormCreate.style.display = "none";
  }
};

if (productButtonCreate) {
  productButtonCreate.addEventListener("click", function () {
    createNewProduct();
    alert("Create new product successfully !");
    productFormCreate.style.display = "none";
    window.location.reload();
  });
}

if (productButtonCancel) {
  productButtonCancel.addEventListener("click", function () {
    productFormCreate.style.display = "none";
  });
}
let productInputName = document.getElementById("productInputName");
let productInputPrice = document.getElementById("productInputPrice");
let productInputColor = document.getElementById("productInputColor");
let productInputCategory = document.getElementById("productInputCategory");
let productInputInventory = document.getElementById("productInputInventory");
let productInputImage1 = document.getElementById("productInputImage1");
let productInputImage2 = document.getElementById("productInputImage2");
let imageName1 = "";
let imageName2 = "";
productInputImage2.addEventListener("change", function (e) {
  const file = e.target.files[0];

  // Chuyển đổi file ảnh thành base64
  const reader = new FileReader();
  reader.onload = function () {
    imageName2 = reader.result;
  };
  reader.readAsDataURL(file);
});

productInputImage1.addEventListener("change", function (e) {
  const file = e.target.files[0];

  // Chuyển đổi file ảnh thành base64
  const reader = new FileReader();
  reader.onload = function () {
    imageName1 = reader.result;
  };
  reader.readAsDataURL(file);
});

function createNewProduct() {
  console.log(productInputImage1);
  //còn thiếu đoạn code lưu ảnh

  let totalProducts = [];
  const productsData = getDataLocalstorage("products");
  if (productsData != null) {
    totalProducts = Object.values(getDataLocalstorage("products"));
  }
  let productName = productInputName.value;
  let price = productInputPrice.value;
  let color = productInputColor.value;
  let category = productInputCategory.value;
  let inventory = productInputInventory.value;
  let image1 = imageName1;
  let image2 = imageName2;
  let id = 1;
  const rootPath = "data:image/png;base64,";
  if (totalProducts.length > 1 && totalProducts != null) {
    id = totalProducts[totalProducts.length - 1].id + 1;
  }

  let newProduct = {
    id: id,
    category: category,
    name: productName,
    price: price,
    rootPath: rootPath,
    image1: image1,
    image2: image2,
    color: color,
    inventory: inventory,
  };

  totalProducts.push(newProduct);
  updateDataLocalStorage("products", totalProducts);
}

// update product

let productFormUpdate = document.getElementById("productFormUpdate");
let productButtonUpdate = document.getElementById("productButtonUpdate");
let listButtonUpdate = document.querySelectorAll(".productButtonUpdate");

// kiểm tra button cancel2 có tồn tại ko?
let productButtonCancel2 = document.querySelector(".productButtonCancel2");

for (let btnUpdate of listButtonUpdate) {
  btnUpdate.addEventListener("click", function () {
    productFormUpdate.style.display = "block";
    let id = btnUpdate.getAttribute("title");
    let product =
      currentProducts[currentProducts.findIndex((element) => element.id == id)];
    let categories = getDataLocalstorage("category") || [];
    let contentCategory = `<option value="">Select</option>`;
    for (let category of categories) {
      contentCategory += ` <option value="${category}" ${
        product.category === category ? "selected" : ""
      }>${category}</option>`;
    }

    productFormUpdate.innerHTML = ` <div class="form">
        <div>
          <h2>Update Product</h2>
        </div>

        <div>
          <label for="productInputName2">Product Name :</label>
          <input type="text" id="productInputName2" class="productInputName2" value="${
            product.name
          }"/>
        </div>

        <div>
          <label for="productInputPrice2">Price : </label>
          <input
            type="number"
            id="productInputPrice2"
            name="productInputPrice2"
            value="${product.price}"
          />
        </div>

        <div>
          <label for="productInputColor2">Color :</label>
          <select name="productInputColor2" id="productInputColor2">
            <option value="">Select</option>
            <option value="black" ${
              product.color === "black" ? "selected" : ""
            }>Black</option>
            <option value="purple" ${
              product.color === "purple" ? "selected" : ""
            }>Purple</option>
            <option value="gray" ${
              product.color === "gray" ? "selected" : ""
            }>Gray</option>
            <option value="white" ${
              product.color === "white" ? "selected" : ""
            }>White</option>
            <option value="blue" ${
              product.color === "blue" ? "selected" : ""
            }>Blue</option>
            <option value="brown" ${
              product.color === "brown" ? "selected" : ""
            }>Brown</option>
            <option value="pink" ${
              product.color === "pink" ? "selected" : ""
            }>Pink</option>
            <option value="grey" ${
              product.color === "grey" ? "selected" : ""
            }>Grey</option>
          </select>
        </div>

        <div>
          <label for="productInputCategory2">Category :</label>
          <select name="productInputCategory2" id="productInputCategory2">
            ${contentCategory}
          </select>
        </div>

        <div>
          <label for="productInputInventory2">Inventory :</label>
          <input
            type="number"
            name="productInputInventory2"
            id="productInputInventory2"
            value="${product.inventory}"
          />
        </div>

        <div>
          <label for="productInputImage12">Image 1 :</label>
          <input
            type="file"
            name="productInputImage12"
            id="productInputImage12"
            accept="image/*"
            value="${product.image1}"
          />
        </div>

        <div>
          <label for="productInputImage22">Image 2 :</label>
          <input
            type="file"
            name="productInputImage22"
            id="productInputImage22"
            accept="image/*"
            value="${product.image2}"
          />
        </div>

        <div class="div-button">
          <button id="productButtonUpdate" title="${product.id}">Update</button>
          <button class="productButtonCancel2">Cancel</button>
        </div>
      </div>`;
    productButtonUpdate = document.getElementById("productButtonUpdate");
    productButtonCancel2 = document.querySelector(".productButtonCancel2");
    productButtonCancel2.addEventListener("click", function () {
      productFormUpdate.style.display = "none";
    });
    window.onclick = function (e) {
      if (e.target == productFormUpdate) {
        productFormUpdate.style.display = "none";
      }
    };

    let productInputName2 = document.getElementById("productInputName2");
    let productInputPrice2 = document.getElementById("productInputPrice2");
    let productInputColor2 = document.getElementById("productInputColor2");
    let productInputCategory2 = document.getElementById(
      "productInputCategory2"
    );
    let productInputInventory2 = document.getElementById(
      "productInputInventory2"
    );
    let productInputImage12 = document.getElementById("productInputImage12");
    let productInputImage22 = document.getElementById("productInputImage22");
    let imageName1 = product.image1;
    let imageName2 = product.image2;
    productInputImage12.addEventListener("change", function () {
      if (productInputImage12.files && productInputImage12.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          imageName1 = e.target.result;
        };
        reader.readAsDataURL(productInputImage12.files[0]);
      }
    });

    productInputImage22.addEventListener("change", function () {
      if (productInputImage22.files && productInputImage22.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          imageName2 = e.target.result;
        };
        reader.readAsDataURL(productInputImage22.files[0]);
      }
    });
    function updateProduct() {
      // đoạn code lưu ảnh

      let totalProducts = getDataLocalstorage("products");
      let productName = productInputName2.value;
      let price = productInputPrice2.value;
      let color = productInputColor2.value;
      let category = productInputCategory2.value;
      let inventory = productInputInventory2.value;
      let image1 = imageName1;
      let image2 = imageName2;
      let id = btnUpdate.getAttribute("title");
      let index = totalProducts.findIndex((element) => element.id == id);

      let newProduct = {
        id: id,
        category: category,
        name: productName,
        price: price,
        image1: imageName1,
        image2: imageName2,
        color: color,
        inventory: inventory,
      };

      totalProducts[index] = newProduct;
      updateDataLocalStorage("products", totalProducts);
    }
    if (productButtonUpdate) {
      productButtonUpdate.addEventListener("click", function () {
        updateProduct();
        alert("Update product successfully !");
        productFormUpdate.style.display = "none";
        window.location.reload();
      });
    }
  });
}

// delete product

let productButtonDeletes = document.querySelectorAll(".productButtonDelete");
for (let btnDelete of productButtonDeletes) {
  btnDelete.addEventListener("click", function () {
    let check = confirm("Bạn muốn xóa sản phẩm này chứ ?");
    if (check) {
      let id = btnDelete.getAttribute("title");
      let indexProduct = totalProducts.findIndex((element) => element.id == id);
      totalProducts.splice(indexProduct, 1);
      updateDataLocalStorage("products", totalProducts);
      window.location.reload();
    }
  });
}

//----------------------------------------------------------------------------------------- section revrenue
let revenueYear = new Date().getFullYear();
if (getDataLocalstorage("revenueYear")) {
  revenueYear = getDataLocalstorage("revenueYear");
} else {
  updateDataLocalStorage("revenueYear", revenueYear);
}
let tableSectionRevenue = document.querySelector(".tableSectionRevenue");
let contentTableRevenue = ` <tr>
            <th>Month</th>
            <th>Year</th>
            <th>Revenue</th>
            <th>Target</th>
            <th>Complete</th>
          </tr>`;

let target = 100000000;
let year = getDataLocalstorage("revenueYear");

for (let i = 1; i <= 12; i++) {
  let listOrderForMonth = listOrders.filter(
    (order) =>
      order.month == i && order.year == revenueYear && order.status == 4
  );
  if (listOrderForMonth) {
    let revenue = listOrderForMonth.reduce(
      (pre, curent) => pre + curent.totalMoney,
      0
    );
    let complete = (revenue / target) * 100;
    contentTableRevenue += `<tr>
                <td>${i}</td>
                <td>${year}</td>
                <td>${formatter.format(revenue)}</td>
                <td>${formatter.format(target)}</td>
                <td>${Math.ceil(complete)}%</td>
              </tr>`;
  } else {
    contentTableRevenue += `<tr>
                <td>${i}</td>
                <td>${year}</td>
                <td>${formatter.format(0)}</td>
                <td>${formatter.format(target)}</td>
                <td>0%</td>
              </tr>`;
  }
}
tableSectionRevenue.innerHTML = contentTableRevenue;
// }

// Revenue Pagination

let revenuePagination = document.querySelector(".revenuePagination");
let contentRevenuePagination = ` <button class="ltRevenuePagination">&lt;</button>`;
let start = revenueYear - 5 >= 2019 ? revenueYear - 5 : 2019;
for (let i = start; i <= start + 5; i++) {
  if (i == revenueYear) {
    contentRevenuePagination += `<button class="sub-revenuePagination" style="background-color:#2196f7;">${i}</button>`;
  } else {
    contentRevenuePagination += ` <button class="sub-revenuePagination" title="${i}">${i}</button>`;
  }
}
contentRevenuePagination += ` <button class="gtRevenuePagination">&gt;</button>`;
revenuePagination.innerHTML = contentRevenuePagination;

let ltRevenuePagination = document.querySelector(".ltRevenuePagination");
let gtRevenuePagination = document.querySelector(".gtRevenuePagination");
let subRevenuePagination = document.querySelectorAll(".sub-revenuePagination");

ltRevenuePagination.addEventListener("click", function () {
  if (revenueYear > 2024) {
    revenueYear -= 5;
    updateDataLocalStorage("revenueYear", revenueYear);
    window.location.reload();
  }
});

gtRevenuePagination.addEventListener("click", function () {
  if (revenueYear + 5 <= new Date().getFullYear) {
    revenueYear += 5;
    updateDataLocalStorage("revenueYear", revenueYear);
    window.location.reload();
  }
});

for (let pagination of subRevenuePagination) {
  pagination.addEventListener("click", function () {
    let value = Number.parseInt(pagination.getAttribute("title"));
    updateDataLocalStorage("revenueYear", value);
    window.location.reload();
  });
}

//----------------------------------------------------------------------------------------- section order
let orderFilterDate = getDataLocalstorage("orderFilterDate")
  ? getDataLocalstorage("orderFilterDate")
  : 0;
let orderFilterMonth = getDataLocalstorage("orderFilterMonth")
  ? getDataLocalstorage("orderFilterMonth")
  : 0;
let orderFilterYear = getDataLocalstorage("orderFilterYear")
  ? getDataLocalstorage("orderFilterYear")
  : 0;

let optionsDate = "";
for (let i = 1; i <= 31; i++) {
  if (orderFilterDate == i) {
    optionsDate += `<option value="${i}" selected>${i}</option>`;
  } else {
    optionsDate += `<option value="${i}">${i}</option>`;
  }
}

optionsDate += `<option value="" ${
  orderFilterDate == "" ? "selected" : ""
}>Tất cả</option>`;

let optionsMonth = "";
for (let i = 1; i <= 12; i++) {
  if (orderFilterMonth == i) {
    optionsMonth += `<option value="${i}" selected>${i}</option>`;
  } else {
    optionsMonth += `<option value="${i}">${i}</option>`;
  }
}
optionsMonth += `<option value="" ${
  orderFilterMonth == "" ? "selected" : ""
}>Tất cả</option>`;

let currentYear = new Date().getFullYear();
let optionsYear = "";
for (let i = 2019; i <= currentYear; i++) {
  if (orderFilterYear == i) {
    optionsYear += `<option value="${i}" selected>${i}</option>`;
  } else {
    optionsYear += `<option value="${i}">${i}</option>`;
  }
}
optionsYear += `<option value="" ${
  orderFilterYear == "" ? "selected" : ""
}>Tất cả</option>`;

let orderFilter = document.querySelector(".orderFilter");
orderFilter.innerHTML = ` <b>Filter :</b>
          <label for="orderFilterDate">Ngày</label>
          <select name="orderFilterDate" id="orderFilterDate">
            <option value="">Select</option>
            ${optionsDate}
          </select>

          <label for="orderFilterMonth">Tháng</label>
          <select name="orderFilterMonth" id="orderFilterMonth">
            <option value="">Select</option>
            ${optionsMonth}
          </select>

          <label for="orderFilterYear">Năm</label>
          <select name="orderFilterYear" id="orderFilterYear">
            <option value="">Select</option>
            ${optionsYear}
          </select>`;

let orderSelectFilterDate = document.getElementById("orderFilterDate");
let orderSelectFilterMonth = document.getElementById("orderFilterMonth");
let orderSelectFilterYear = document.getElementById("orderFilterYear");

orderSelectFilterDate.addEventListener("change", function () {
  updateDataLocalStorage("orderFilterDate", orderSelectFilterDate.value);
  console.log(orderSelectFilterDate.value);
  window.location.reload();
});

orderSelectFilterMonth.addEventListener("change", function () {
  updateDataLocalStorage("orderFilterMonth", orderSelectFilterMonth.value);
  window.location.reload();
});

orderSelectFilterYear.addEventListener("change", function () {
  updateDataLocalStorage("orderFilterYear", orderSelectFilterYear.value);
  window.location.reload();
});

if (!getDataLocalstorage("listOrders")) {
  let listOrders = [];
  updateDataLocalStorage("listOrders", listOrders);
}

// get dữ liệu in ra bảng trong section orders
if (orderFilterDate || orderFilterMonth || orderFilterYear) {
  if (orderFilterDate) {
    listOrders = listOrders.filter((order) => order.date == orderFilterDate);
  }
  console.log(listOrders);
  if (orderFilterMonth) {
    listOrders = listOrders.filter((order) => order.month == orderFilterMonth);
  }
  console.log(listOrders);

  if (orderFilterYear) {
    listOrders = listOrders.filter((order) => order.year == orderFilterYear);
  }
  console.log(listOrders);
}
if (listOrders.length == 0) {
  alert("Không tìm thấy đơn đặt hàng nào !");
}
let orderCurrentPage = 1;
if (getDataLocalstorage("orderCurrentPage")) {
  orderCurrentPage = getDataLocalstorage("orderCurrentPage");
} else {
  updateDataLocalStorage("orderCurrentPage", orderCurrentPage);
}
let orderItemPerPage = 5;
let orderTotalPage = Math.ceil(listOrders.length / orderItemPerPage);
if (orderCurrentPage > orderTotalPage) {
  orderCurrentPage = 1;
}
let orderEnd = orderCurrentPage * orderItemPerPage;

let orderStart = orderEnd - orderItemPerPage;
let orderCurrentList = listOrders.slice(orderStart, orderEnd);
let contentTable = ` <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Date Time</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>PayMethod</th>
            <th>Total Money</th>
            <th>Status</th>
            <th></th>
          </tr>`;
let tableSectionOrders = document.getElementById("tableSectionOrders");
if (getDataLocalstorage("listOrders")) {
  listOrders = getDataLocalstorage("listOrders");
}

for (let order of orderCurrentList) {
  let listProduct = order.products.map((element) => element.name).join(",");
  let status = ["Đã hủy", "Đã đặt", "Đã xác nhận", "Đang giao", "Đã giao"];
  contentTable += ` <tr>
            <td>${order.id}</td>
            <td>${order.name}</td>
            <td>${order.createdTime}</td>
             <td>${
               order.address + " , " + order.district + " , " + order.city
             }</td>
             <td>${order.phone}</td>
             <td>${order.email}</td>
             <td>${order.payMethod}</td>
             <td>${order.totalMoney}</td>
             <td>${status[Number.parseInt(order.status)]}</td>
            ${handleStatus(order.status, order)}
          </tr>`;
}

tableSectionOrders.innerHTML = contentTable;

// xử lý nút bấm xem chi tiết order
let tagOrderDetail = document.querySelector(".orderDetail");
let tableOrderDetail = document.getElementById("tableOrderDetail");
let orderButtonDetails = document.querySelectorAll(".orderButtonDetail");
for (let btn of orderButtonDetails) {
  btn.addEventListener("click", function () {
    tagOrderDetail.style.display = "block";
    let id = btn.getAttribute("title");
    let indexOrder = listOrders.findIndex((order) => order.id == id);
    let listCarts = listOrders[indexOrder].products;
    let count = 1;
    tableOrderDetail.innerHTML = `<tr>
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
      tableOrderDetail.innerHTML += ` <tr>
          <td>${count}</td>
          <td><img src="${product.image1}" alt="image Product"></td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td> ${product.quantity} </td>
          <td>${product.size} </td>
          <td>${new Intl.NumberFormat("vi-VN", {
            style: "decimal",
          }).format(product.price * product.quantity)}</td>
          <td>
          </td>
        </tr>`;
      count++;
    }
  });
}

// xử lý bấm ra ngoài thì ẩn đi bảng order detail
window.addEventListener("click", function (e) {
  if (e.target == tagOrderDetail) {
    e.target.style.display = "none";
  }
});

// pagination Orders
let orderTotalCurrentPagination = Math.ceil(orderCurrentPage / 10) * 10;
let orderPagination = document.querySelector(".orderPagination");
let contentOrderPagination = ` <button class="lt-orderPagination">&lt;</button>`;
for (
  let i = orderTotalCurrentPagination - 9;
  i <= orderTotalCurrentPagination;
  i++
) {
  if (i > orderTotalPage) {
    break;
  }
  if (i == orderCurrentPage) {
    contentOrderPagination += `<button class="sub-orderPagination" title="${i}" style="background-color:#2196f7;">${i}</button>`;
  } else {
    contentOrderPagination += `<button class="sub-orderPagination" title="${i}">${i}</button>`;
  }
}
contentOrderPagination += ` <button class="gt-orderPagination">&gt;</button>`;
orderPagination.innerHTML = contentOrderPagination;

//Gọi sự kiện nhấn vào từng number Pagination Orders
let gtOrderPagination = document.querySelector(".gt-orderPagination");
let ltOrderPagination = document.querySelector(".lt-orderPagination");
let subOrderPaginations = document.querySelectorAll(".sub-orderPagination");

gtOrderPagination.addEventListener("click", function () {
  if (orderCurrentPage + 10 < orderTotalPage) {
    let updateCurrentPage = Math.ceil(orderCurrentPage / 10) * 10 + 1;
    updateDataLocalStorage("orderCurrentPage", updateCurrentPage);
    window.location.reload();
  }
});

ltOrderPagination.addEventListener("click", function () {
  if (orderCurrentPage - 10 >= 1) {
    let updateCurrentPage = Math.floor((orderCurrentPage - 10) / 10) * 10 + 1;
    updateDataLocalStorage("orderCurrentPage", updateCurrentPage);
    window.location.reload();
  }
});

for (let pagination of subOrderPaginations) {
  pagination.addEventListener("click", function () {
    let value = pagination.getAttribute("title");
    updateDataLocalStorage("orderCurrentPage", value);
    window.location.reload();
  });
}

// tạo sự kiện click xóa order
let orderButtonDeletes = document.querySelectorAll(".orderButtonDelete");
for (let btn of orderButtonDeletes) {
  btn.addEventListener("click", function () {
    let idProduct = btn.getAttribute("title");
    let indexProduct = listOrders.findIndex(
      (element) => element.id == idProduct
    );
    let check = confirm("Bạn có chắc muốn xóa đơn hàng này chứ ?");
    if (check) {
      listOrders.splice(indexProduct, 1);
      updateDataLocalStorage("listOrders", listOrders);
      window.location.reload();
    }
  });
}

// xử lý chuyển trạng thái đơn hàng sang đã xác nhận
let orderButtonConfirms = document.querySelectorAll(".orderButtonConfirm");
for (let btn of orderButtonConfirms) {
  btn.addEventListener("click", function () {
    let idProduct = btn.getAttribute("title");
    let indexOrder = listOrders.findIndex((element) => element.id == idProduct);
    let check = confirm("Bạn muốn xác nhận đơn hàng này ?");
    if (check) {
      listOrders[indexOrder].status = 2;
      updateDataLocalStorage("listOrders", listOrders);
      window.location.reload();
    }
  });
}

// chuyển trạng thái đã xác nhận sang đang giao hàng
let orderButtonDeliverys = document.querySelectorAll(".orderButtonDelivery");
for (let btn of orderButtonDeliverys) {
  btn.addEventListener("click", function () {
    let idProduct = btn.getAttribute("title");
    let indexOrder = listOrders.findIndex((element) => element.id == idProduct);
    let check = confirm(
      "Bạn muốn chuyển đơn hàng này sang trạng thái đang giao hàng ?"
    );
    if (check) {
      listOrders[indexOrder].status = 3;
      updateDataLocalStorage("listOrders", listOrders);
      window.location.reload();
    }
  });
}

// chuyển trạng thái đang giao sang đã giao hàng
let orderButtonDelivereds = document.querySelectorAll(".orderButtonDelivered");
for (let btn of orderButtonDelivereds) {
  btn.addEventListener("click", function () {
    let idProduct = btn.getAttribute("title");
    let indexOrder = listOrders.findIndex((element) => element.id == idProduct);
    let check = confirm(
      "Bạn muốn chuyển đơn hàng này sang trạng thái đã giao hàng ?"
    );
    if (check) {
      listOrders[indexOrder].status = 4;
      updateDataLocalStorage("listOrders", listOrders);
      window.location.reload();
    }
  });
}

//-------------------------------------------------------------------------- section user ---------------------------------------------------
// filter user
let userContentSearch = "";
if (getDataLocalstorage("userContentSearch")) {
  userContentSearch = getDataLocalstorage("userContentSearch");
} else {
  updateDataLocalStorage("userContentSearch", "");
}
let userFilter = document.querySelector(".userFilter");
userFilter.innerHTML = ` <input
            type="text"
            id="userInputSearch"
            class="userInputSearch"
            placeholder="    ${
              userContentSearch == null
                ? "Search username & phone number"
                : userContentSearch
            }"
          />
          <button id="userButtonSearch" class="userButtonSearch">Search</button>`;
const userInputSearch = document.getElementById("userInputSearch");
const userButtonSearch = document.getElementById("userButtonSearch");

userButtonSearch.addEventListener("click", function () {
  let contentSearch = userInputSearch.value.trim().toLowerCase();
  updateDataLocalStorage("userContentSearch", contentSearch);
  window.location.reload();
});

//---------------------

let listUsers = [];
if (getDataLocalstorage("listUsers")) {
  listUsers = Object.values(getDataLocalstorage("listUsers"));
} else {
  updateDataLocalStorage("listUsers", listUsers);
}

if (userContentSearch) {
  listUsers = listUsers.filter(
    (user) =>
      new RegExp(userContentSearch, "i").test(user.username.toLowerCase()) ||
      new RegExp(userContentSearch, "i").test(user.phoneNumber)
  );
}

let userCurrentPage = 1;
if (getDataLocalstorage("userCurrentPage")) {
  userCurrentPage = getDataLocalstorage("userCurrentPage");
} else {
  updateDataLocalStorage("userCurrentPage", userCurrentPage);
}
let userItemPerPage = 10;
let userTotalPage = Math.ceil(listUsers.length / userItemPerPage);

if (userCurrentPage > userTotalPage) {
  userCurrentPage = 1;
  updateDataLocalStorage("userCurrentPage", 1);
  updateDataLocalStorage("userContentSearch", "");
  alert("Không tìm thấy user nào !");
  window.location.reload();
}
let userEnd = userCurrentPage * userItemPerPage;
let userStart = userEnd - userItemPerPage;
let listCurrentUsers = listUsers.splice(userStart, userEnd);
let tableSectionUsers = document.querySelector("#tableSectionUsers");
let contentTableSectionUsers = ` <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Birthday</th>
            <th>Gender</th>
            <th>Status</th>
            <th></th>
          </tr>`;

for (let user of listCurrentUsers) {
  let status = user.status == 1 ? "on" : "off";
  contentTableSectionUsers += `<tr>
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.birthday}</td>
            <td>${user.gender}</td>
            <td>${status}</td>
            <td>
            <button class="userUpdateStatus" title="${user.id}">Ban/Open</button>
            </td>
          </tr>`;
}
tableSectionUsers.innerHTML = contentTableSectionUsers;
if (getDataLocalstorage("listUsers")) {
  listUsers = getDataLocalstorage("listUsers");
}

// User pagination
userCurrentPage = getDataLocalstorage("userCurrentPage");
let userPagination = document.querySelector(".userPagination");
let userTotalCurrentPagination = Math.ceil(userCurrentPage / 10) * 10;
let contentUserPagination = `<button class="ltUserPagination">&lt;</button>`;
for (
  let i = userTotalCurrentPagination - 9;
  i <= userTotalCurrentPagination;
  i++
) {
  if (i > userTotalPage) {
    break;
  }
  if (userCurrentPage == i) {
    contentUserPagination += `<button class="sub-userPagination" style="background-color:#2196f7;" title="${i}">${i}</button>`;
  } else {
    contentUserPagination += `<button class="sub-userPagination" title="${i}">${i}</button>`;
  }
}
contentUserPagination += ` <button class="gtUserPagination">&gt;</button>`;
userPagination.innerHTML = contentUserPagination;

let subUserPagination = document.querySelectorAll(".sub-userPagination");
let ltUserPagination = document.querySelector(".ltUserPagination");
let gtUserPagination = document.querySelector(".gtUserPagination");

ltUserPagination.addEventListener("click", function () {
  if (userCurrentPage > 10) {
    userCurrentPage = Math.floor((userCurrentPage - 10) / 10) * 10 + 1;
    updateDataLocalStorage("userCurrentPage", userCurrentPage);
    window.location.reload();
  }
});

gtUserPagination.addEventListener("click", function () {
  if (userCurrentPage + 10 <= userTotalPage) {
    userCurrentPage = Math.ceil(userCurrentPage / 10) * 10 + 1;
    updateDataLocalStorage("userCurrentPage", userCurrentPage);
    window.location.reload();
  }
});

for (let pagination of subUserPagination) {
  pagination.addEventListener("click", function () {
    let value = pagination.getAttribute("title");
    updateDataLocalStorage("userCurrentPage", value);
    window.location.reload();
  });
}

// delete user
let userUpdateStatus = document.querySelectorAll(".userUpdateStatus");
for (let ban of userUpdateStatus) {
  ban.addEventListener("click", function () {
    let totalUsers = Object.values(getDataLocalstorage("listUsers"));
    let id = ban.getAttribute("title");
    let index = totalUsers.findIndex((element) => element.id == id);
    totalUsers[index].status = totalUsers[index].status == 0 ? 1 : 0;
    updateDataLocalStorage("listUsers", totalUsers);
    window.location.reload();
  });
}

//-----------------------------------------------------------------------section category--------------------------------------------------------
function renderCategory() {
  let listCategory = getDataLocalstorage("category") || [];
  let currentPageCategory = 1;
  if (getDataLocalstorage("currentPageCategory")) {
    currentPageCategory = getDataLocalstorage("currentPageCategory");
  } else {
    updateDataLocalStorage("currentPageCategory", currentPageCategory);
  }
  let itemPerPage = 5;
  let totalPage = Math.ceil(listCategory.length / itemPerPage);
  let skip = (currentPageCategory - 1) * itemPerPage;
  let newListCategory = listCategory.slice(skip, skip + itemPerPage);
  let tbodyCategory = document.getElementById("tbodyCategory");
  tbodyCategory.innerHTML = "";
  let count = currentPageCategory * itemPerPage - 4;
  for (let category of newListCategory) {
    tbodyCategory.innerHTML += `<tr>
                <td>${count}</td>
                <td>${category}</td>
                <td>
                  <button class="updateCategory" category="${category}">update</button>
                  <button class="deleteCategory" category="${category}">delete</button>
                </td>
              </tr>`;
    count++;
  }
  if (currentPageCategory > totalPage) {
    updateDataLocalStorage("currentPageCategory", 1);
    window.location.reload();
  }
  // tạo phân trang cho category
  let categoryPagination = document.querySelector(".categoryPagination");
  categoryPagination.innerHTML = ` <button class="ltPagination">&lt;</button>`;
  for (let i = 1; i <= 10; i++) {
    if (i == currentPageCategory) {
      categoryPagination.innerHTML += `<button class="subPagination" style="background-color: cornflowerblue;">${i}</button>`;
    } else {
      categoryPagination.innerHTML += `<button class="subPagination" id="${i}">${i}</button>`;
    }
    if (i >= totalPage) {
      break;
    }
  }
  categoryPagination.innerHTML += `<button class="gtPagination">&gt;</button>`;

  // xử lý sự kiện nhấn vào các trang category
  let subPaginations = document.querySelectorAll(".subPagination");
  for (let sub of subPaginations) {
    sub.addEventListener("click", function () {
      let value = sub.getAttribute("id");
      currentPageCategory = value;
      updateDataLocalStorage(
        "currentPageCategory",
        Number.parseInt(currentPageCategory)
      );
      renderCategory();
    });
  }

  let ltPagination = document.querySelector(".ltPagination");
  ltPagination.addEventListener("click", function () {
    if (currentPageCategory - 10 >= 1) {
      currentPageCategory -= 10;
      updateDataLocalStorage("currentPageCategory", currentPageCategory);
      window.location.reload();
    }
  });

  let gtPagination = document.querySelector(".gtPagination");
  gtPagination.addEventListener("click", function () {
    if (currentPageCategory + 10 <= totalPage) {
      currentPageCategory += 10;
      updateDataLocalStorage("currentPageCategory", currentPageCategory);
      window.location.reload();
    }
  });

  // xử lý nút bấm add category
  let buttonCreateCategory = document.getElementById("buttonCreateCategory");
  let inputCategoryName = document.getElementById("inputCategoryName");
  buttonCreateCategory.addEventListener("click", function () {
    let index = listCategory.findIndex(
      (category) => category == inputCategoryName.value
    );
    if (!inputCategoryName.value) {
      alert("vui lòng không để trống tên category !");
    } else {
      if (index != -1) {
        alert("Category đã tồn tại !");
      } else {
        listCategory.push(inputCategoryName.value);
        updateDataLocalStorage("category", listCategory);
        alert("Thêm category thành công !");
        window.location.reload();
      }
    }
  });

  // xử lý xóa category
  let deleteCategorys = document.querySelectorAll(".deleteCategory");
  for (let del of deleteCategorys) {
    del.addEventListener("click", function () {
      let check = confirm("Bạn chắc là muốn xóa category này chứ ?");
      if (check) {
        let category = del.getAttribute("category");
        let index = listCategory.findIndex((cate) => cate == category);
        listCategory.splice(index, 1);
        updateDataLocalStorage("category", listCategory);
        window.location.reload();
      }
    });
  }

  // xử lý đóng mở form update category
  let updateCategories = document.querySelectorAll(".updateCategory");
  let formUpdateCategory = document.querySelector(".formUpdateCategory");
  let containerUpdate = document.querySelector(".containerUpdate");
  for (let cate of updateCategories) {
    cate.addEventListener("click", function () {
      let categoryOdd = cate.getAttribute("category");
      containerUpdate.style.display = "block";
      formUpdateCategory.innerHTML = ` <h2>Update category</h2>
            <br />
            <label for="inputCategoryNameUpdate">Category Name</label>
            <input
              type="text"
              name="inputCategoryNameUpdate"
              id="inputCategoryNameUpdate"
              value="${categoryOdd}"
            />
            <br />
            <br />
            <button id="buttonUpdateCategory" category="${categoryOdd}">Update</button>
            <button id="buttonCancelUpdateCategory">Cancel</button>`;
      let buttonCancelUpdateCategory = document.getElementById(
        "buttonCancelUpdateCategory"
      );
      buttonCancelUpdateCategory.addEventListener("click", function () {
        containerUpdate.style.display = "none";
      });

      // xử lý update category
      let buttonUpdateCategory = document.getElementById(
        "buttonUpdateCategory"
      );
      let inputCategoryNameUpdate = document.getElementById(
        "inputCategoryNameUpdate"
      );
      buttonUpdateCategory.addEventListener("click", function () {
        let category = buttonUpdateCategory.getAttribute("category");
        let newArr = listCategory.filter((cate) => cate != category);
        let indexOdd = listCategory.findIndex((cate) => cate == category);
        let newIndex = newArr.findIndex(
          (cate) => cate == inputCategoryNameUpdate.value
        );
        console.log(newArr, category);
        if (!inputCategoryNameUpdate.value) {
          alert("vui lòng nhập tên category !");
        } else {
          if (newIndex != -1) {
            alert("Category đã tồn tại !");
          } else {
            listCategory.splice(indexOdd, 1, inputCategoryNameUpdate.value);
            updateDataLocalStorage("category", listCategory);
            alert("Update category thành công !");
            window.location.reload();
          }
        }
      });
    });
  }
}
renderCategory();

//----------------------------------------------------------------------section message-----------------------------------------------------------
function renderMessage() {
  let message = document.getElementById("message");
  let containerTotalMessage = document.querySelector(".containerTotalMessage");
  let buttonMessage = document.getElementById("buttonMessage");
  let dataMessage = getDataLocalstorage("dataMessage") || {};
  let listUsers = getDataLocalstorage("listUsers") || [];
  //xử lý đóng mở hộp tin nhắn
  buttonMessage.addEventListener("click", function () {
    containerTotalMessage.style.display = "block";
  });

  // xử lý in ra danh sách tin nhắn người dùng
  let newObject = Object.keys(dataMessage).sort((a, b) => {
    return (
      Number(dataMessage[b][dataMessage[b].length - 1].valueDate) -
      Number(dataMessage[a][dataMessage[a].length - 1].valueDate)
    );
  });
  containerTotalMessage.innerHTML = `<button id="totalMessageClose">Close</button>`;

  for (let user of newObject) {
    let indexUser = listUsers.findIndex((u) => u.username == user);
    let endMessage = dataMessage[user][dataMessage[user].length - 1].message;
    let readStatus = dataMessage[user][dataMessage[user].length - 1].readStatus;
    let avatar = listUsers[indexUser].avatar || "";
    containerTotalMessage.innerHTML += `${
      readStatus == 1
        ? `<div class="detailMessage" id="${user}"  style="color: #db4e1b;">
      ${
        avatar
          ? `<img src="${avatar}" alt="avatar"> <h3>${user}:</h3> <p>${endMessage}</p>`
          : `<i class="fa-solid fa-user"></i> <h3>${user}:</h3> <p>${endMessage}</p> `
      }
    </div>`
        : `<div class="detailMessage" id="${user}">
    ${
      avatar
        ? `<img src="${avatar}" alt="avatar"> <h3>${user}:</h3> <p>${endMessage}</p>`
        : `<i class="fa-solid fa-user"></i> <h3>${user}:</h3> <p>${endMessage}</p> `
    }
  </div>`
    }`;
  }

  let totalMessageClose = document.getElementById("totalMessageClose");
  let formMessageDetail = document.querySelector(".formMessageDetail");
  totalMessageClose.addEventListener("click", function () {
    containerTotalMessage.style.display = "none";
  });

  let buttonMessageClose = document.getElementById("buttonMessageClose");
  buttonMessageClose.addEventListener("click", function () {
    formMessageDetail.style.display = "none";
  });

  // xử lý in ra hộp tin nhắn riêng từng khách hàng
  let detailMessages = document.querySelectorAll(".detailMessage");
  let containerMessage = document.querySelector(".containerMessage");
  let messageDetail = [];
  let username = "";
  for (let mes of detailMessages) {
    mes.addEventListener("click", function () {
      formMessageDetail.style.display = "block";
      username = mes.getAttribute("id");
      messageDetail = dataMessage[username];
      let indexUser = listUsers.findIndex((u) => u.username == username);
      let avatar = listUsers[indexUser].avatar;
      containerMessage.innerHTML = "";
      for (let mes of messageDetail) {
        containerMessage.innerHTML += `<div><img src="${
          mes.id == 1 ? avatar : "../image/iconAdmin.png"
        }" alt="avatar"><p>: ${mes.message}</p></div>`;
      }
      dataMessage[username][dataMessage[username].length - 1].readStatus = 0;
      updateDataLocalStorage("dataMessage", dataMessage);
      renderMessage();
    });
  }

  // xử lý button nhắn tin
  let buttonSendMessage = document.getElementById("buttonSendMessage");
  message.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      buttonSendMessage.click();
    }
  });
  buttonSendMessage.addEventListener("click", function (e) {
    messageDetail = dataMessage[username];
    let newMessage = {
      id: 2,
      message: message.value,
      createdDate: new Date(),
      valueDate:
        `${new Date().getFullYear()}` +
        `${new Date().getMonth()}` +
        `${new Date().getDate()}` +
        `${new Date().getHours()}` +
        `${new Date().getMinutes()}` +
        `${new Date().getSeconds()}`,
      readStatus: 0,
    };
    messageDetail.push(newMessage);
    dataMessage[username] = messageDetail;
    updateDataLocalStorage("dataMessage", dataMessage);
    message.value = "";
    renderMessage();
    let tagDiv = document.getElementById(username);
    tagDiv.click();
  });
}
renderMessage();
