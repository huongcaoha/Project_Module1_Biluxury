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
  let status = ["", "ordered", "delivering", "success"];
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
             <td>${order.status == 1 ? "Đã đặt" : "Đã giao"}</td>
            ${
              order.status == 1
                ? `<td>
             
              <button class="orderButtonDetail" title="${order.id}">Detail</button>
            </td>`
                : `<td> 
                 <button class="orderButtonDelete" title="${order.id}">Delete</button>
                <button class="orderButtonDetail" title="${order.id}">Detail</button>
                </td>`
            }
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
  let check = confirm("Bạn muốn sửa lại thông tin chứ ?");
  if (check) {
    listUsers[indexUser].gender = gender;
    listUsers[indexUser].birthday = birthday.value;
    listUsers[indexUser].phoneNumber = phoneNumber.value;
    listUsers[indexUser].email = email.value;
    updateDataLocalStorage("listUsers", listUsers);
    alert("Sửa thông tin thành công !");
    window.location.reload();
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
