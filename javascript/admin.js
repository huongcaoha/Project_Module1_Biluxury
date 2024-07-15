const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});
// -------------------------------------------------------------------Controls dashbroad
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

// Điều khiển các khối trong trang admin
let blockContent1 = document.querySelector(".content1");
let blockSectionProduct = document.querySelector(".section-product");
let blockSectionRevenue = document.querySelector(".section-revenue");
let blockSectionUser = document.querySelector(".section-user");
let blockSectionOrder = document.querySelector(".section-order");
let listBlockSections = [
  blockContent1,
  blockSectionProduct,
  blockSectionRevenue,
  blockSectionUser,
  blockSectionOrder,
];

let controlBlockContent1 = document.querySelector("#content1");
let controlBlockSectionProduct = document.querySelector("#section-product");
let controlBlockSectionRevenue = document.querySelector("#section-revenue");
let controlBlockSectionUser = document.querySelector("#section-user");
let controlBlockSectionOrder = document.querySelector("#section-order");
let listControlBlocks = [
  controlBlockContent1,
  controlBlockSectionProduct,
  controlBlockSectionRevenue,
  controlBlockSectionUser,
  controlBlockSectionOrder,
];

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

let listControls = [
  "123",
  content1,
  sectionProduct,
  sectionRevenue,
  sectionUser,
  sectionOrder,
];

let currentDisplayContent = getDataLocalstorage("currentDisplayContent");
for (let i = 1; i < listControls.length; i++) {
  if (i != currentDisplayContent) {
    listControls[i].classList.add("display-none");
  }
}

// section Content1
let revenueMonth1 = Object.values(getDataLocalstorage("listOrders"))
  .filter((order) => order.month == 1 && order.year == new Date().getFullYear())
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth1 = Math.ceil((revenueMonth1 / 30000000) * 100);

let revenueMonth2 = Object.values(getDataLocalstorage("listOrders"))
  .filter((order) => order.month == 2 && order.year == new Date().getFullYear())
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth2 = Math.ceil((revenueMonth2 / 30000000) * 100);

let revenueMonth3 = Object.values(getDataLocalstorage("listOrders"))
  .filter((order) => order.month == 3 && order.year == new Date().getFullYear())
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth3 = Math.ceil((revenueMonth3 / 30000000) * 100);

let revenueMonth4 = Object.values(getDataLocalstorage("listOrders"))
  .filter((order) => order.month == 4 && order.year == new Date().getFullYear())
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth4 = Math.ceil((revenueMonth4 / 30000000) * 100);

let revenueMonth5 = Object.values(getDataLocalstorage("listOrders"))
  .filter((order) => order.month == 5 && order.year == new Date().getFullYear())
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth5 = Math.ceil((revenueMonth5 / 30000000) * 100);

let revenueMonth6 = Object.values(getDataLocalstorage("listOrders"))
  .filter((order) => order.month == 6 && order.year == new Date().getFullYear())
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth6 = Math.ceil((revenueMonth6 / 30000000) * 100);

let revenueMonth7 = Object.values(getDataLocalstorage("listOrders"))
  .filter((order) => order.month == 7 && order.year == new Date().getFullYear())
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth7 = Math.ceil((revenueMonth7 / 30000000) * 100);

let revenueMonth8 = Object.values(getDataLocalstorage("listOrders"))
  .filter((order) => order.month == 8 && order.year == new Date().getFullYear())
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth8 = Math.ceil((revenueMonth8 / 30000000) * 100);

let revenueMonth9 = Object.values(getDataLocalstorage("listOrders"))
  .filter((order) => order.month == 9 && order.year == new Date().getFullYear())
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth9 = Math.ceil((revenueMonth9 / 30000000) * 100);

let revenueMonth10 = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) => order.month == 10 && order.year == new Date().getFullYear()
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth10 = Math.ceil((revenueMonth10 / 30000000) * 100);

let revenueMonth11 = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) => order.month == 11 && order.year == new Date().getFullYear()
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth11 = Math.ceil((revenueMonth11 / 30000000) * 100);

let revenueMonth12 = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) => order.month == 12 && order.year == new Date().getFullYear()
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
revenueMonth12 = Math.ceil((revenueMonth12 / 30000000) * 100);

const countProduct = getDataLocalstorage("products").length;

const revenue = Object.values(getDataLocalstorage("listOrders"))
  .filter(
    (order) =>
      order.month == new Date().getMonth() + 1 &&
      order.year == new Date().getFullYear()
  )
  .reduce((pre, curent) => pre + curent.totalMoney, 0);
const countOrder = Object.values(getDataLocalstorage("listOrders")).filter(
  (order) =>
    order.month == new Date().getMonth() + 1 &&
    order.year == new Date().getFullYear()
).length;
const countUser = Object.values(getDataLocalstorage("listUsers")).length;
const htmlContent1 = ` <div class="dashboard">
          <h1>Dashboard</h1>
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
  let value = month.getAttribute("title") * 0.4;
  month.style.height = `${value}vh`;
}
// ---------------------------------------------------------------------------------section products---------------------------------------------------------------------------

//in ra công cụ tìm kiếm trong filter product
let search = getDataLocalstorage("productFilterSearch");
let price = getDataLocalstorage("productFilterPrice");
let category = getDataLocalstorage("productFilterCategory");
let color = getDataLocalstorage("productFilterColor");
let productFilterNav = document.querySelector(".productFilterNav");
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
              <option value="">Select</option>
              <option value="vest" ${
                category == "vest" ? "selected" : ""
              }>Vest</option>
              <option value="threeHoles" ${
                category == "threeHoles" ? "selected" : ""
              }>ThreeHoles</option>
              <option value="longSleeveShirt" ${
                category == "longSleeveShirt" ? "selected" : ""
              }>LongSleeveShirt</option>
              <option value="patternedShirt" ${
                category == "patternedShirt" ? "selected" : ""
              }>PatternedShirt</option>
              <option value="polo" ${
                category == "polo" ? "selected" : ""
              }>Polo</option>
              <option value="longPolo" ${
                category == "longPolo" ? "selected" : ""
              }>LongPolo</option>
              <option value="koreanMen" ${
                category == "koreanMen" ? "selected" : ""
              }>KoreanMen</option>
              <option value="jacket" ${
                category == "jacket" ? "selected" : ""
              }>Jacket</option>
              <option value="feltset" ${
                category == "feltset" ? "selected" : ""
              }>Feltset</option>
              <option value="" ${
                category == "" ? "selected" : ""
              }>Tất cả</option>
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
      product.name.includes(productFilterSearch.value)
    );
  }
  console.log(currentProducts);
  if (price) {
    currentProducts = currentProducts.filter(
      (product) => product.price < price
    );
  }
  if (category) {
    currentProducts = currentProducts.filter(
      (product) => product.category == category
    );
  }
  console.log(currentProducts);
  if (color) {
    currentProducts = currentProducts.filter(
      (product) => product.color == color
    );
  }
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
            <td><img src="../image/products/${product.image1}" alt="${
      product.name
    }" /></td>
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

function createNewProduct() {
  let productInputName = document.getElementById("productInputName");
  let productInputPrice = document.getElementById("productInputPrice");
  let productInputColor = document.getElementById("productInputColor");
  let productInputCategory = document.getElementById("productInputCategory");
  let productInputInventory = document.getElementById("productInputInventory");
  let productInputImage1 = document.getElementById("productInputImage1");
  let productInputImage2 = document.getElementById("productInputImage2");

  //còn thiếu đoạn code lưu ảnh
  let imageName1 = productInputImage1?.files?.[0]?.name ?? "";

  let imageName2 = productInputImage2?.files?.[0]?.name ?? "";
  productInputImage1.addEventListener("change", function () {
    if (productInputImage1.files && productInputImage1.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        imageName1 = e.target.result;
        console.log(e.target.result);
      };
      reader.readAsDataURL(productInputImage1.files[0]);
    }
  });

  productInputImage2.addEventListener("change", function () {
    if (productInputImage2.files && productInputImage2.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        imageName2 = e.target.result;
        console.log(e.target.result);
      };
      reader.readAsDataURL(productInputImage2.files[0]);
    }
  });

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
  if (totalProducts.length > 1 && totalProducts != null) {
    id = totalProducts[totalProducts.length - 1].id + 1;
  }

  let newProduct = {
    id: id,
    category: category,
    name: productName,
    price: price,
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
            <option value="">Select</option>
            <option value="vest" ${
              product.category === "vest" ? "selected" : ""
            }>Vest</option>
            <option value="threeHoles" ${
              product.category === "threeHoles" ? "selected" : ""
            }>ThreeHoles</option>
            <option value="longSleeveShirt" ${
              product.category === "longSleeveShirt" ? "selected" : ""
            }>LongSleeveShirt</option>
            <option value="patternedShirt" ${
              product.category === "patternedShirt" ? "selected" : ""
            }>PatternedShirt</option>
            <option value="polo" ${
              product.category === "polo" ? "selected" : ""
            }>Polo</option>
            <option value="longPolo" ${
              product.category === "longPolo" ? "selected" : ""
            }>Long Polo</option>
            <option value="koreanMen" ${
              product.category === "koreanMen" ? "selected" : ""
            }>Korean Men</option>
            <option value="jacket" ${
              product.category === "jacket" ? "selected" : ""
            }>Jacket</option>
            <option value="feltset" ${
              product.category === "feltset" ? "selected" : ""
            }>Feltset</option>
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

    function updateProduct() {
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

      // đoạn code lưu ảnh
      let imageName1 = product.image1;
      let imageName2 = product.image2;
      productInputImage12.addEventListener("change", function () {
        if (productInputImage12.files && productInputImage12.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            imageName1 = e.target.result;
            console.log(e.target.result);
          };
          reader.readAsDataURL(productInputImage12.files[0]);
        }
      });

      productInputImage22.addEventListener("change", function () {
        if (productInputImage22.files && productInputImage22.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            imageName2 = e.target.result;
            console.log(e.target.result);
          };
          reader.readAsDataURL(productInputImage22.files[0]);
        }
      });

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
    let id = btnDelete.getAttribute("title");
    let indexProduct = totalProducts.findIndex((element) => element.id == id);
    totalProducts.splice(indexProduct, 1);
    updateDataLocalStorage("products", totalProducts);
    window.location.reload();
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

let target = 30000000;
let year = getDataLocalstorage("revenueYear");
// if (revenue == 0) {
//   tableSectionRevenue.innerHTML = ` <h2>Không có dữ liệu năm ${revenueYear}</h2>`;
// } else {
for (let i = 1; i <= 12; i++) {
  let listOrderForMonth = listOrders.filter(
    (order) => order.month == i && order.year == revenueYear
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

if (!getDataLocalstorage("listOrders")) {
  let listOrders = [];
  updateDataLocalStorage("listOrders", listOrders);
}

//data demo list orders
class Product {
  constructor(idProduct, productName, price, quantity) {
    (this.idProduct = idProduct),
      (this.productName = productName),
      (this.price = price),
      (this.quantity = quantity),
      (this.totalMoney = this.price * this.quantity);
  }
}
// let listOrdersDemo = [];
// for (let i = 1; i <= 20; i++) {
//   let order = {
//     id: i,
//     listProduct: [
//       new Product(1, `Product1`, 5000, i),
//       new Product(2, `Product2`, 6000, i),
//       new Product(3, `Product3`, 7000, i),
//       new Product(4, `Product4`, 8000, i),
//       new Product(5, `Product5`, 9000, i),
//       new Product(6, `Product6`, 10000, i),
//       new Product(7, `Product7`, 11000, i),
//       new Product(8, `Product8`, 12000, i),
//     ],
//     totalMoney: 1234567,
//     day: new Date().getDate(),
//     month: new Date().getMonth() + 1,
//     year: new Date().getFullYear(),
//     status: 3,
//     idUser: 1,
//   };
//   listOrdersDemo.push(order);
// }
// updateDataLocalStorage("listOrders", listOrdersDemo);

// get dữ liệu in ra bảng trong section orders

let orderCurrentPage = 1;
if (getDataLocalstorage("orderCurrentPage")) {
  orderCurrentPage = getDataLocalstorage("orderCurrentPage");
} else {
  updateDataLocalStorage("orderCurrentPage", orderCurrentPage);
}
let orderItemPerPage = 10;
let orderTotalPage = Math.ceil(listOrders.length / orderItemPerPage);

let orderEnd = orderCurrentPage * orderItemPerPage;

let orderStart = orderEnd - orderItemPerPage;
let orderCurrentList = listOrders.slice(orderStart, orderEnd);
let contentTable = ` <tr>
            <th>ID</th>
            <th>List Products</th>
            <th>Total Money</th>
            <th>Date Time</th>
            <th>Status</th>
            <th>Id User</th>
            <th></th>
          </tr>`;
let tableSectionOrders = document.getElementById("tableSectionOrders");
if (getDataLocalstorage("listOrders")) {
  listOrders = getDataLocalstorage("listOrders");
}
for (let order of orderCurrentList) {
  let listProduct = order.listProduct
    .map((element) => element.productName)
    .join(",");
  let status = ["", "ordered", "delivering", "success"];
  contentTable += ` <tr>
            <td>${order.id}</td>
            <td>${listProduct}</td>
            <td>${order.totalMoney}</td>
            <td>${order.day}/${order.month}/${order.year}</td>
            <td>${status[order.status]}</td>
             <td>${order.idUser}</td>
            <td>
              <button class="orderButtonDelete" title="${
                order.id
              }">Delete</button>
            </td>
          </tr>`;
}
tableSectionOrders.innerHTML = contentTable;

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
    listOrders.splice(indexProduct, 1);
    updateDataLocalStorage("listOrders", listOrders);
    window.location.reload();
  });
}

//-------------------------------------------------------------------------- Section User
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

let listUsers = [];
if (getDataLocalstorage("listUsers")) {
  listUsers = Object.values(getDataLocalstorage("listUsers"));
} else {
  updateDataLocalStorage("listUsers", listUsers);
}

// tạo dữ liệu giả để phục vụ cho tạo trang Users
// let listUsersDemo = [];
// for (let i = 1; i <= 20; i++) {
//   let newUser = new User(
//     i,
//     `user${i}`,
//     "123456789",
//     `user${i}@gmail.com`,
//     "0123456789",
//     "23/08/1994"
//   );
//   listUsersDemo.push(newUser);
// }
// updateDataLocalStorage("listUsers", listUsersDemo);
let userCurrentPage = 1;
if (getDataLocalstorage("userCurrentPage")) {
  userCurrentPage = getDataLocalstorage("userCurrentPage");
} else {
  updateDataLocalStorage("userCurrentPage", userCurrentPage);
}
let userItemPerPage = 10;
let userTotalPage = Math.ceil(listUsers.length / userItemPerPage);
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
            <td>${status}</td>
            <td>
            <button class="userUpdateStatus" title="${user.id}">Ban/Open</button>
            </td>
          </tr>`;
}
tableSectionUsers.innerHTML = contentTableSectionUsers;

// User pagination
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
