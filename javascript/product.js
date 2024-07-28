// function
function getDataLocalstorage(nameData) {
  return JSON.parse(localStorage.getItem(nameData));
}

function updateDataLocalStorage(nameData, newData) {
  localStorage.setItem(nameData, JSON.stringify(newData));
}

function reload() {
  // hiển thị icon giỏ hàng và số lượng sản phẩm trong giỏ hàng
  const nameUserCart = getDataLocalstorage("nameUser") + "Carts";
  let carts = getDataLocalstorage(nameUserCart) || [];
  let totalProductCarts = carts.reduce(
    (pre, current) => (pre += current.quantity),
    0
  );
  let iconCart = document.getElementById("carts");
  iconCart.innerHTML = ` <a href="../html/carts.html"><i class="fa-solid fa-cart-shopping" style="color : black"></i><span id="numberCarts">${totalProductCarts}</span></a>`;

  // khai báo biến
  let slide = document.querySelector(".slide");
  const slideVest = "../image/slide/sildeVest.webp";
  const slideThreeHoles = "../image/slide/sildeThreeHoles.jpg";
  const slideslideLongSleeveShirt = "../image/slide/slideLongSleeveShirt.webp";
  const slidePolo = "../image/slide/slidePolo.webp";
  const slideLongPolo = "../image/slide/slideLongPolo.jpg";
  const slideKoreanMen = "../image/slide/slideKoreanMen.jpg";
  const slideJacket = "../image/slide/slideJacket.jpg";
  const slideFeltset = "../image/slide/slideFeltset.jpg";
  const slidePatternedShirt = "../image/slide/slidePatternedShirt.jpg";
  let listTagCategorySlide = document.querySelectorAll(".categorySlide");

  // in ra tên user
  const nameUser = getDataLocalstorage("nameUser");
  let avatarUser = nameUser + "Avatar";
  let tagUser = document.getElementById("user");
  let image = "";
  if (getDataLocalstorage(avatarUser)) {
    image = getDataLocalstorage(avatarUser);
  } else {
    updateDataLocalStorage(avatarUser, image);
  }
  if (getDataLocalstorage("nameUser")) {
    tagUser.innerHTML = `<a href="../html/profile.html">${
      getDataLocalstorage(avatarUser)
        ? ` <img src="${image}" alt="avatar" />`
        : `<i class="fa-solid fa-user"></i>`
    }</i>${nameUser}</a>`;
  } else {
    tagUser.innerHTML = `<a href="../html/login.html"><button id="buttonLogin">Login</button></a>`;
  }

  // xử lý button logout
  if (document.getElementById("buttonLogout")) {
    let buttonLogout = document.getElementById("buttonLogout");
    buttonLogout.addEventListener("click", function () {
      updateDataLocalStorage("nameUser", "");
      updateDataLocalStorage("statusLogin", 0);
    });
  }
  //------------------
  let getSlide = getDataLocalstorage("slide")
    ? getDataLocalstorage("slide")
    : "1";
  let getCategory = getDataLocalstorage("categoryProduct");
  let getSearch = getDataLocalstorage("search");
  let listCategory = getDataLocalstorage("category");

  const arraySlide = [
    slidePatternedShirt,
    slideVest,
    slideThreeHoles,
    slideslideLongSleeveShirt,
    slidePatternedShirt,
    slidePolo,
    slideLongPolo,
    slideKoreanMen,
    slideJacket,
    slideFeltset,
  ];

  let totalProductJson = localStorage.getItem("products");
  let totalProducts = JSON.parse(totalProductJson);
  let totalCategoryJson = localStorage.getItem("category");
  let totalCategory = JSON.parse(totalCategoryJson);
  let tagResultProduct = document.querySelector(".resultProduct");
  let tagFilterCategories = document.getElementById("categories");
  let tagFilterColor = document.querySelectorAll(
    ".filter-color input[type='radio']"
  );

  let tagFilterPrice = document.querySelectorAll(
    ".filter-price input[type='radio']"
  );

  // let listProduct = [];
  // let category = "";
  // let color = "";
  // let price = 0;
  // let tagProducts = document.querySelectorAll(".product");

  //in ra công cụ tìm kiếm trong filter product
  let valuePrice = getDataLocalstorage("filterProductPrice")
    ? getDataLocalstorage("filterProductPrice")
    : "";
  let valueSearch = getDataLocalstorage("filterProductSearch")
    ? getDataLocalstorage("filterProductSearch")
    : "";
  let valueCategory = getDataLocalstorage("filterProductCategory")
    ? getDataLocalstorage("filterProductCategory")
    : "";
  let valueColor = getDataLocalstorage("filterProductColor")
    ? getDataLocalstorage("filterProductColor")
    : "";

  let productFilterNav = document.querySelector(".productFilter");
  console;
  productFilterNav.innerHTML = ` <input type="text" name="filterSearch" id="filterSearch" placeholder="${valueSearch}"/>
              <button class="filterButtonSearch">Search</button>
              <br />
  
              <label for="filterPrice">Price</label>
              <select name="filterPrice" id="filterPrice">
                <option value="">Select</option>
                <option value="300000" ${
                  valuePrice == "300000" ? "selected" : ""
                }>Dưới 300k</option>
                <option value="1000000" ${
                  valuePrice == "1000000" ? "selected" : ""
                }>300k-1000k</option>
                <option value="2000000" ${
                  valuePrice == "2000000" ? "selected" : ""
                }>1000k-2000k</option>
                <option value="3000000" ${
                  valuePrice == "3000000" ? "selected" : ""
                }>2000k-3000k</option>
                <option value="" ${
                  valuePrice == "" ? "selected" : ""
                }>Tất cả</option>
              </select>
              <br />
  
              <label for="filterCategory">Category</label>
              <select name="filterCategory" id="filterCategory">
                <option value="">Select</option>
                <option value="vest" ${
                  valueCategory == "vest" ? "selected" : ""
                }>Vest</option>
                <option value="threeHoles" ${
                  valueCategory == "threeHoles" ? "selected" : ""
                }>ThreeHoles</option>
                <option value="longSleeveShirt" ${
                  valueCategory == "longSleeveShirt" ? "selected" : ""
                }>LongSleeveShirt</option>
                <option value="patternedShirt" ${
                  valueCategory == "patternedShirt" ? "selected" : ""
                }>PatternedShirt</option>
                <option value="polo" ${
                  valueCategory == "polo" ? "selected" : ""
                }>Polo</option>
                <option value="longPolo" ${
                  valueCategory == "longPolo" ? "selected" : ""
                }>LongPolo</option>
                <option value="koreanMen" ${
                  valueCategory == "koreanMen" ? "selected" : ""
                }>KoreanMen</option>
                <option value="jacket" ${
                  valueCategory == "jacket" ? "selected" : ""
                }>Jacket</option>
                <option value="feltset" ${
                  valueCategory == "feltset" ? "selected" : ""
                }>Feltset</option>
                <option value="" ${
                  valueCategory == "" ? "selected" : ""
                }>Tất cả</option>
              </select>
              <br />
  
              <label for="filterColor">Color</label>
              <select name="filterColor" id="filterColor">
                <option value="">Select</option>
                <option value="black" ${
                  valueColor == "black" ? "selected" : ""
                }>Black</option>
                <option value="white" ${
                  valueColor == "white" ? "selected" : ""
                }>White</option>
                <option value="purple" ${
                  valueColor == "purple" ? "selected" : ""
                }>Purple</option>
                <option value="gray" ${
                  valueColor == "gray" ? "selected" : ""
                }>Gray</option>
                <option value="blue" ${
                  valueColor == "blue" ? "selected" : ""
                }>Blue</option>
                <option value="brown" ${
                  valueColor == "brown" ? "selected" : ""
                }>Brown</option>
                <option value="pink" ${
                  valueColor == "pink" ? "selected" : ""
                }>Pink</option>
                <option value="grey" ${
                  valueColor == "grey" ? "selected" : ""
                }>Grey</option>
                <option value="" ${
                  valueColor == "" ? "selected" : ""
                }>Tất cả</option>
              </select>`;

  // xử lý sự kiện chọn category tại navbar
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

  // get slide image
  if (getSlide != null && getSlide >= 0 && getSlide <= 9) {
    slide.src = arraySlide[getSlide];
  } else {
    slide.src = arraySlide[0];
  }

  // xử lý filter product
  const filterProductPrice = document.getElementById("filterPrice");
  filterProductPrice.addEventListener("change", function () {
    updateDataLocalStorage("filterProductPrice", filterProductPrice.value);
    updateDataLocalStorage("currentPageProduct", 1);
    reload();
  });

  const buttonFilterSearch = document.querySelector(".filterButtonSearch");
  const filterProductSearch = document.getElementById("filterSearch");
  buttonFilterSearch.addEventListener("click", function () {
    updateDataLocalStorage("filterProductSearch", filterProductSearch.value);
    updateDataLocalStorage("currentPageProduct", 1);
    reload();
  });

  const filterProductCategory = document.getElementById("filterCategory");
  filterProductCategory.addEventListener("change", function () {
    updateDataLocalStorage(
      "filterProductCategory",
      filterProductCategory.value
    );
    updateDataLocalStorage("currentPageProduct", 1);
    reload();
  });

  const filterProductColor = document.getElementById("filterColor");

  filterProductColor.addEventListener("change", function () {
    updateDataLocalStorage("filterProductColor", filterProductColor.value);
    updateDataLocalStorage("currentPageProduct", 1);
    reload();
  });

  let listProducts = getDataLocalstorage("products")
    ? Object.values(getDataLocalstorage("products"))
    : [];

  if (valuePrice || valueSearch || valueCategory || valueColor) {
    if (valueSearch) {
      listProducts = listProducts.filter((product) =>
        product.name.toLowerCase().includes(valueSearch.toLowerCase())
      );
    }

    if (valuePrice) {
      switch (Number.parseInt(valuePrice)) {
        case 300000: {
          listProducts = listProducts.filter(
            (product) => product.price <= valuePrice
          );
          break;
        }
        case 1000000: {
          listProducts = listProducts.filter(
            (product) => product.price > 300000 && product.price <= 1000000
          );
          break;
        }
        case 2000000: {
          listProducts = listProducts.filter(
            (product) => product.price > 1000000 && product.price <= 2000000
          );
          break;
        }
        case 3000000: {
          listProducts = listProducts.filter(
            (product) => product.price > 2000000 && product.price <= 3000000
          );
          break;
        }
      }
    }

    if (valueCategory) {
      listProducts = listProducts.filter(
        (product) => product.category == valueCategory
      );
    }

    if (valueColor) {
      listProducts = listProducts.filter(
        (product) => product.color == valueColor
      );
    }
  }

  // phân trang
  let itemPerPage = 8;
  let totalPage = Math.ceil(listProducts.length / itemPerPage);

  let currentPageProduct = 1;
  if (getDataLocalstorage("currentPageProduct")) {
    currentPageProduct = getDataLocalstorage("currentPageProduct");
  } else {
    updateDataLocalStorage("currentPageProduct", 1);
  }
  let skip = (currentPageProduct - 1) * itemPerPage;
  let currentProducts =
    listProducts.length > itemPerPage
      ? listProducts.slice(skip, skip + itemPerPage)
      : [...listProducts];

  let paginationEnd = Math.ceil(currentPageProduct / 10) * 10;
  let tagPagination = document.querySelector(".pagination");
  let contentPagination = ` <button id="ltPagination">&lt;</button>`;
  for (let i = paginationEnd - 9; i <= paginationEnd; i++) {
    if (i == currentPageProduct) {
      contentPagination += `<button class="sub-pagination" style="background-color: cornflowerblue;">${i}</button>`;
    } else {
      contentPagination += `<button class="sub-pagination" title=${i}>${i}</button>`;
    }
    if (i == totalPage) {
      break;
    }
  }

  contentPagination += `<button id="gtPagination">&gt;</button>`;
  tagPagination.innerHTML = contentPagination;

  // xử lý sự kiện click vào từng trang của phân trang
  const ltPagination = document.getElementById("ltPagination");
  const gtPagination = document.getElementById("gtPagination");
  const subPaginations = document.querySelectorAll(".sub-pagination");

  gtPagination.addEventListener("click", function () {
    if (currentPageProduct + 10 <= totalPage) {
      currentPageProduct += 10;
      updateDataLocalStorage("currentPageProduct", currentPageProduct);
      reload();
    }
  });

  ltPagination.addEventListener("click", function () {
    if (currentPageProduct - 10 >= 1) {
      currentPageProduct -= 10;
      updateDataLocalStorage("currentPageProduct", currentPageProduct);
    }
  });

  for (let pagination of subPaginations) {
    pagination.addEventListener("click", function () {
      let value = pagination.getAttribute("title");
      updateDataLocalStorage("currentPageProduct", value);
      reload();
    });
  }

  // get information filter

  // get product data from filter

  if (currentProducts.length == 0) {
    tagResultProduct.innerHTML = ` <h3>Not found product</h3>`;
  } else {
    tagResultProduct.innerHTML = "";

    for (let product of currentProducts) {
      tagResultProduct.innerHTML += `
           <div class="product" id="${product.image2}">
        <img
          id="${product.id}"
          class="item"
          src="${product.image1}"
          alt="${product.name}"
        />
         <p>${product.name}</p>
        <p>${new Intl.NumberFormat("vi-VN", { style: "decimal" }).format(
          product.price
        )}VNĐ</p>
        <a href="../html/productDetail.html" class="buy-now" id=${
          product.id
        }>Mua ngay</a>
      </div>
        `;
    }
  }
  // FilterColor;
  // xử lý sự kiện click vào buy-now
  const buyNowVest = document.querySelectorAll(".buy-now");
  for (let buy of buyNowVest) {
    buy.addEventListener("click", function (e) {
      let id = e.target.getAttribute("id");
      updateDataLocalStorage("productDetail", id);
    });
  }

  let tagProducts = document.querySelectorAll(".product");
  for (let product of tagProducts) {
    let image2 = product.getAttribute("id");
    let tagImg = product.querySelector("img");
    let image1 = tagImg.src;
    product.addEventListener("mouseover", function () {
      setTimeout(function () {
        tagImg.src = image2;
      }, 300);
    });

    product.addEventListener("mouseout", function () {
      setTimeout(function () {
        tagImg.src = image1;
      }, 300);
    });
  }
}
reload();

// -----------------------------------------------------------------------section nhắn tin giữa khách và admin

function renderMessage() {
  let nameUser = getDataLocalstorage("nameUser") || "";
  let avatarUser = nameUser + "Avatar";
  let dataMessage = {};
  if (getDataLocalstorage("dataMessage")) {
    dataMessage = getDataLocalstorage("dataMessage");
  } else {
    updateDataLocalStorage("dataMessage", dataMessage);
  }
  let myMessage = dataMessage[nameUser] || [];
  let buttonMessage = document.getElementById("buttonMessage");
  let containerMessage = document.querySelector(".containerMessage");
  let formMessage = document.querySelector(".formMessage");
  let buttonMessageClose = document.getElementById("buttonMessageClose");
  let buttonSendMessage = document.getElementById("buttonSendMessage");
  let message = document.getElementById("message");
  buttonMessage.addEventListener("click", function () {
    if (!nameUser) {
      alert("Cần hãy đăng nhập trước nhé !");
      window.location.href = "../html/login.html";
    } else {
      formMessage.style.display = "block";
    }
  });

  // xử lý đóng mở hộp tin nhắn
  buttonMessageClose.addEventListener("click", function () {
    formMessage.style.display = "none";
  });

  // xử lý in ra tin nhắn
  let imageUser = getDataLocalstorage(avatarUser) || "";
  containerMessage.innerHTML = "";
  for (let mes of myMessage) {
    containerMessage.innerHTML += `<div><img src="${
      mes.id == 1 ? imageUser : "../image/iconAdmin.png"
    }" alt="avatar"><p>: ${mes.message}</p></div>`;
  }

  // xử lý button nhắn tin
  buttonSendMessage.addEventListener("click", function () {
    let newMessage = {
      id: 1,
      message: message.value,
      createdDate: new Date(),
      valueDate:
        `${new Date().getFullYear()}` +
        `${new Date().getMonth()}` +
        `${new Date().getDate()}` +
        `${new Date().getHours()}` +
        `${new Date().getMinutes()}` +
        `${new Date().getSeconds()}`,
      readStatus: 1,
    };
    myMessage.push(newMessage);
    dataMessage[nameUser] = myMessage;
    message.value = "";
    updateDataLocalStorage("dataMessage", dataMessage);
    renderMessage();
  });
}
renderMessage();
