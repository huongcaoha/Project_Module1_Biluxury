function getDataLocalstorage(nameData) {
  return JSON.parse(localStorage.getItem(nameData));
}

function updateDataLocalStorage(nameData, newData) {
  localStorage.setItem(nameData, JSON.stringify(newData));
}

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

// xử lý button login
if (document.getElementById("buttonLogin")) {
  let buttonLogin = document.getElementById("buttonLogin");
  buttonLogin.addEventListener("click", function () {
    updateDataLocalStorage("nameUser", "");
    updateDataLocalStorage("statusLogin", 0);
    window.location.href = "../html/login.html";
  });
}
