// function hashcode passwword
function hashCode(str) {
  let hash = 0,
    i,
    chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

// function xử lý trạng thái đơn hàng
function handleStatus(status, order) {
  console.log(status);
  switch (Number.parseInt(status)) {
    case 1: {
      return `<td>
              <button class="orderButtonCancel" title="${order.id}">Cancel</button>
               <button class="orderButtonDetail" title="${order.id}">Detail</button>
              </td>`;
    }
    case 2: {
      return `<td>
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
        ${
          order.comment == 1
            ? ` <button class="orderButtonComment" title="${order.id}">Comment</button>`
            : ""
        }
              </td>`;
    }

    case 0: {
      return `<td>
       <button class="orderButtonDetail" title="${order.id}">Detail</button>
              </td>`;
    }
  }
}

//--------------------------
function getDataLocalstorage(nameData) {
  return JSON.parse(localStorage.getItem(nameData));
}

function updateDataLocalStorage(nameData, newData) {
  localStorage.setItem(nameData, JSON.stringify(newData));
}

// in ra tên user
const nameUser1 = getDataLocalstorage("nameUser");
let avatarUser = nameUser1 + "Avatar";
let tagUser = document.getElementById("user");
let image1 = "";
if (getDataLocalstorage(avatarUser)) {
  image1 = getDataLocalstorage(avatarUser);
} else {
  updateDataLocalStorage(avatarUser, image1);
}
if (getDataLocalstorage("nameUser")) {
  tagUser.innerHTML = `<a href="../html/profile.html">${
    getDataLocalstorage(avatarUser) != ""
      ? ` <img src="${image1}" alt="avatar" />`
      : `<i class="fa-solid fa-user"></i>`
  }</i>${nameUser1}</a>`;
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
let listOrders = getDataLocalstorage("listOrders") || [];
// hiển thị icon giỏ hàng và số lượng sản phẩm trong giỏ hàng
const nameUserCart = getDataLocalstorage("nameUser") + "Carts";
let carts = getDataLocalstorage(nameUserCart) || [];

let totalProductCarts = carts.reduce(
  (pre, current) => (pre += current.quantity),
  0
);
let iconCart = document.getElementById("carts");
iconCart.innerHTML = ` <a href="../html/carts.html"><i class="fa-solid fa-cart-shopping" style="color : black"></i><span id="numberCarts">${totalProductCarts}</span></a>`;

// xử lý in ra lịch sử đơn hàng
let tbodyOders = document.getElementById("tbodyOrders");
let nameUser = getDataLocalstorage("nameUser") || "";
let listUsers = getDataLocalstorage("listUsers") || [];
let idUser =
  listUsers[listUsers.findIndex((user) => user.username == nameUser)].id;
if (getDataLocalstorage("listOrders")) {
  listOrders = getDataLocalstorage("listOrders");
}
newOders = listOrders.filter((order) => order.idUser == idUser);
let contentTable = "";
for (let order of newOders) {
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
tbodyOders.innerHTML = contentTable;

// xử lý in ra thông tin user
let user = listUsers[listUsers.findIndex((user) => user.username == nameUser)];
let inforProfile = document.querySelector(".inforProfile");
inforProfile.innerHTML = ` <label for="username"><i class="fa-solid fa-user"></i></label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="  Username"
              required
              class="input"
              value="${user.username}"
              readonly
            />
            <br />

             <label for="password"><i class="fa-solid fa-lock"></i></label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="  Password"
          required
          class="input"
          value="${user.password}"
        />
        <br />
           
            <label for="gender"><i class="fa-solid fa-venus-mars"></i></label>
    
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              class="radio"
              ${user.gender == "male" ? "checked" : ""}
            />
            <label for="male">Male</label>
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              class="radio"
               ${user.gender == "female" ? "checked" : ""}
            />
            <label for="female">Female</label>
            <input
              type="radio"
              name="gender"
              value="other"
              id="other"
              class="radio"
               ${user.gender == "other" ? "checked" : ""}
            />
            <label for="other">Other</label>
            <br />
            <label for="birthday"><i class="fa-solid fa-cake-candles"></i></label>
            <input type="date" name="birthday" id="birthday" class="input" value="${
              user.birthday
            }"/>
            <br />
            <label for="phonenumber"><i class="fa-solid fa-phone"></i></label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              required
              class="input"
              value="${user.phoneNumber}"
            />
            <br />
            <label for="email"><i class="fa-solid fa-envelope"></i></label>
            <input type="email" name="email" id="email" required class="input" value="${
              user.email
            }" />
            <br />
            <button id="buttonEdit">Sửa</button>
            
          </div>`;

// xử lý sửa thông tin cá nhân người dùng
let indexUser = listUsers.findIndex((user) => user.username == nameUser);
let username = document.getElementById("username");
let genders = document.getElementsByName("gender");
let password = document.getElementById("password");
let gender = "";
for (let gen of genders) {
  if (gen.checked) {
    gender = gen.value;
  }
}
let birthday = document.getElementById("birthday");
let phoneNumber = document.getElementById("phoneNumber");
let email = document.getElementById("email");
let buttonEdit = document.getElementById("buttonEdit");
buttonEdit.addEventListener("click", function () {
  if (
    !username.value ||
    password.value.length < 8 ||
    !gender ||
    !birthday.value ||
    phoneNumber.value.length != 10 ||
    email.value.length < 10
  ) {
    if (!username.value) {
      alert("Username invalid !");
    } else if (password.value.length < 8) {
      alert("Password invalid !");
    } else if (!gender) {
      alert("Gender invalid !");
    } else if (!birthday.value) {
      alert("Birthday invalid !");
    } else if (phoneNumber.value.length != 10) {
      alert("Phone number invalid !");
    } else if (email.value.length < 10) {
      alert("Email invalid !");
    }
  } else {
    let check = confirm("Bạn muốn sửa lại thông tin chứ ?");
    if (check) {
      listUsers[indexUser].gender = gender;
      listUsers[indexUser].birthday = birthday.value;
      listUsers[indexUser].phoneNumber = phoneNumber.value;
      listUsers[indexUser].email = email.value;
      listUsers[indexUser].password = hashCode(password.value);
      updateDataLocalStorage("listUsers", listUsers);
      alert("Sửa thông tin thành công !");
      window.location.reload();
    }
  }
});
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

// xử lý nút chọn thay đổi ảnh
let changeImage = document.getElementById("changeImage");
let tagImage = document.getElementById("inputImage");
changeImage.addEventListener("click", function () {
  tagImage.click();
  tagImage.addEventListener("change", function () {
    if (tagImage.files && tagImage.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        updateDataLocalStorage(avatarUser, e.target.result);
        alert("Đổi ảnh đại diện thành công");
      };
      reader.readAsDataURL(tagImage.files[0]);

      window.location.reload();
    }
  });
});

// xử lý hiển thị avatar
let avatar = document.querySelector(".avatar");
let image = "";
if (getDataLocalstorage(avatarUser)) {
  image = getDataLocalstorage(avatarUser);
} else {
  updateDataLocalStorage(avatarUser, image);
}

avatar.innerHTML = getDataLocalstorage(avatarUser)
  ? ` <img src="${image}" alt="avatar" />`
  : `<i class="fa-solid fa-user"></i>`;

// chuyển trạng thái đã xác nhận sang đang giao hàng
let orderButtonDelivereds = document.querySelectorAll(".orderButtonDelivered");
for (let btn of orderButtonDelivereds) {
  btn.addEventListener("click", function () {
    let idOrder = btn.getAttribute("title");
    let indexOrder = listOrders.findIndex((element) => element.id == idOrder);
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

// chuyển trạng thái đã xác nhận sang hủy đơn hàng
let orderButtonCancels = document.querySelectorAll(".orderButtonCancel");
for (let btn of orderButtonCancels) {
  btn.addEventListener("click", function () {
    let idOrder = btn.getAttribute("title");
    let indexOrder = listOrders.findIndex((element) => element.id == idOrder);
    let check = confirm("Bạn muốn hủy đơn hàng này chứ ?");
    if (check) {
      listOrders[indexOrder].status = 0;
      updateDataLocalStorage("listOrders", listOrders);
      window.location.reload();
    }
  });
}

// xử lý button comment
let listProduct = getDataLocalstorage("products") || [];
let comment = document.getElementById("comment");
let buttonComment = document.getElementById("buttonComment");
let containerComment = document.querySelector(".containerComment");
let buttonCommentCancel = document.getElementById("buttonCommentCancel");
let orderButtonComments = document.querySelectorAll(".orderButtonComment");
let idOrder = 0;
let indexOrder = -1;
let order = {};
for (let btn of orderButtonComments) {
  btn.addEventListener("click", function () {
    containerComment.style.display = "block";
    idOrder = btn.getAttribute("title");
    indexOrder = listOrders.findIndex((element) => element.id == idOrder);
    order = listOrders[indexOrder];
    console.log(idOrder);
  });
}

buttonCommentCancel.addEventListener("click", function () {
  containerComment.style.display = "none";
});

buttonComment.addEventListener("click", function () {
  for (let product of order.products) {
    let indexProduct = listProduct.findIndex((pro) => pro.id == product.id);
    let listComment = listProduct.comment || [];
    let objectComment = {
      username: nameUser,
      image: image1,
      comment: comment.value,
      createdDate: new Date(),
    };
    listComment.push(objectComment);
    listProduct[indexProduct].comment = listComment;
    listOrders[indexOrder].comment = 0;
    updateDataLocalStorage("listOrders", listOrders);
    updateDataLocalStorage("products", listProduct);
    alert("Đánh giá thành công !");
    window.location.reload();
  }
});
