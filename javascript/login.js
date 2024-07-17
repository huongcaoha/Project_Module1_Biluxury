function getDataLocalstorage(nameData) {
  return JSON.parse(localStorage.getItem(nameData));
}

function updateDataLocalStorage(nameData, newData) {
  localStorage.setItem(nameData, JSON.stringify(newData));
}
// hàm hash code
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

let admin = "huongcaoha";
if (getDataLocalstorage("admin")) {
  admin = getDataLocalstorage("admin");
}

let passwordAdmin = localStorage.getItem("passwordAdmin")
  ? localStorage.getItem("passwordAdmin")
  : hashCode("123456789");

let username = document.getElementById("username");
let password = document.getElementById("password");
const buttonLogin = document.getElementById("buttonLogin");
const listUsers = getDataLocalstorage("listUsers")
  ? getDataLocalstorage("listUsers")
  : [];

buttonLogin.addEventListener("click", function () {
  console.log(passwordAdmin == hashCode(password.value).toString());
  if (!username.value || !password.value) {
    alert("username and password blank");
  } else {
    let check = 1;

    if (
      admin == username.value &&
      passwordAdmin == hashCode(password.value).toString()
    ) {
      check = 3;
    } else {
      for (let user of listUsers) {
        if (
          user.username == username.value &&
          user.password == hashCode(password.value) &&
          user.status == 1
        ) {
          check = 2;
          break;
        }
      }
    }

    if (check == 3) {
      updateDataLocalStorage("admin", admin);
      window.location.href = "../html/admin.html";
    } else if (check == 2) {
      window.location.href = "../html/main.html";
    } else {
      alert("username and password not found !");
    }
  }
});
