function getDataLocalstorage(nameData) {
  return JSON.parse(localStorage.getItem(nameData));
}

function updateDataLocalStorage(nameData, newData) {
  localStorage.setItem(nameData, JSON.stringify(newData));
}

//lấy dữ liệu product hiện tại để show ra
function loadProduct(css) {
  // hiển thị icon giỏ hàng và số lượng sản phẩm trong giỏ hàng
  const nameUserCart = getDataLocalstorage("nameUser") + "Carts";
  let carts = getDataLocalstorage(nameUserCart) || [];
  let totalProductCarts = carts.reduce(
    (pre, current) => (pre += current.quantity),
    0
  );
  let iconCart = document.getElementById("carts");
  iconCart.innerHTML = ` <a href="../html/carts.html"><i class="fa-solid fa-cart-shopping" style="color : black"></i><span id="numberCarts">${totalProductCarts}</span></a>`;

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
        <h3>5.0 <b style="color: rgb(247, 247, 30)">★★★★★</b> | Đã bán: 7355</h3>
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
        <button id="add" idProduct=${product.id}>Thêm vào giỏ hàng
              <div class="sub-image">
      <img src="${product.image1}" alt="sub-image">
    </div>
        </button>
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

  // xử lý sự kiện nút bấm tăng giame sản phẩm
  const buttonUp = document.getElementById("up");
  const buttonDown = document.getElementById("down");
  let buttonQuantity = document.getElementById("quantity");
  buttonUp.addEventListener("click", function () {
    if (buttonQuantity.value < 99) {
      let tmp = Number.parseInt(buttonQuantity.value) + 1;
      buttonQuantity.value = tmp;
    }
  });
  buttonDown.addEventListener("click", function () {
    if (buttonQuantity.value >= 1) {
      buttonQuantity.value = Number.parseInt(buttonQuantity.value - 1);
    }
  });

  // ------------------------------xử lý sự kiện add to cart

  //thêm class xử lý hình ảnh addtocart
  let subImage = document.querySelector(".sub-image");
  subImage.classList.add(css);

  // xóa class xử lý hình ảnh addtocart
  setTimeout(function () {
    subImage.classList.remove(css);
  }, 1500);

  const buttonAdd = document.getElementById("add");
  const statusLogin = getDataLocalstorage("statusLogin") || 0;
  // let carts = getDataLocalstorage(nameUserCart) || [];
  buttonAdd.addEventListener("click", function () {
    let id = buttonAdd.getAttribute("idProduct");
    const listProducts = getDataLocalstorage("products") || [];
    let indexProduct = listProducts.findIndex((product) => product.id == id);
    let inventory = listProducts[index].inventory || 0;
    let indexCart = carts.findIndex((product) => product.id == id);
    if (statusLogin == 1) {
      if (indexCart >= 0) {
        carts[indexCart].quantity = Number.parseInt(carts[indexCart].quantity);
        if (
          Number.parseInt(carts[indexCart].quantity) +
            Number.parseInt(buttonQuantity.value) >
          inventory
        ) {
          alert("Số sản phẩm bạn mua vượt quá giới hạn !");
        } else {
          carts[indexCart].quantity = carts[indexCart].quantity =
            Number.parseInt(carts[indexCart].quantity) +
            Number.parseInt(buttonQuantity.value);
          // listProducts[indexProduct].inventory -= buttonQuantity.value;
          // updateDataLocalStorage("products", listProducts);
          updateDataLocalStorage(nameUserCart, carts);
          alert("Đã thêm sản phẩm vào giỏ hàng !");
          loadProduct("addToCarts");
        }
      } else {
        if (buttonQuantity.value > inventory) {
          alert("Số sản phẩm bạn mua vượt quá giới hạn !");
        } else {
          let productSize = getDataLocalstorage("productSize") || 41;
          let newProduct = {
            ...listProducts[indexProduct],
            quantity: Number.parseInt(buttonQuantity.value),
            size: productSize,
          };
          carts.push(newProduct);
          // listProducts[indexProduct].inventory -= buttonQuantity.value;
          // updateDataLocalStorage("products", listProducts);
          updateDataLocalStorage(nameUserCart, carts);
          alert("Đã thêm sản phẩm vào giỏ hàng !");
          loadProduct("addToCarts");
        }
      }
    } else {
      alert("Bạn hãy đăng nhập trước nhé !");
      updateDataLocalStorage("history", "../html/productDetail.html");
      window.location.href = "../html/login.html";
    }
  });

  let containerComment = document.querySelector(".containerComment");
  containerComment.innerHTML = `<h1>Đánh giá </h1>`;
  let listComment = product.comment || [];
  for (let comment of listComment) {
    containerComment.innerHTML += `<div class="comment">
         <img src="${comment.image}" alt="avatar">
        <h3>${comment.username} : </h3>
        <p>${comment.comment}</p>
        <p><sub>${comment.createdDate}</sub></p>
      </div>`;
  }
}

loadProduct();

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
