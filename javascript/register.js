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

function getDataLocalstorage(nameData) {
  return JSON.parse(localStorage.getItem(nameData));
}

function updateDataLocalStorage(nameData, newData) {
  localStorage.setItem(nameData, JSON.stringify(newData));
}

class User {
  constructor(
    id,
    username,
    password,
    gender,
    birthday,
    phoneNumber,
    email,
    status
  ) {
    (this.id = id),
      (this.username = username),
      (this.password = password),
      (this.gender = gender),
      (this.birthday = birthday),
      (this.phoneNumber = phoneNumber),
      (this.email = email),
      (this.status = status);
  }
}

let username = document.getElementById("username");
let password = document.getElementById("password");
let rePassword = document.getElementById("rePassword");
let gender = "";
let listRadio = document.getElementsByName("gender");

let birthday = document.getElementById("birthday");
let phoneNumber = document.getElementById("phoneNumber");
let email = document.getElementById("email");
const buttonRegister = document.getElementById("buttonRegister");
let listUsers = getDataLocalstorage("listUsers")
  ? getDataLocalstorage("listUsers")
  : [];
let regexPhone = "/^0[35789][0-9]{8}$/";
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
buttonRegister.addEventListener("click", function () {
  let check = 1;
  let id = listUsers.length == 0 ? 1 : listUsers[listUsers.length - 1].id + 1;
  for (let radio of listRadio) {
    if (radio.checked) {
      gender = radio.value;
      break;
    }
  }
  if (
    !username.value ||
    password.value.length < 8 ||
    rePassword.value.length < 8 ||
    !gender ||
    !birthday.value ||
    phoneNumber.value.length != 10 ||
    email.value.length < 10
  ) {
    if (!username.value) {
      alert("Username invalid !");
    } else if (password.value.length < 8) {
      alert("Password invalid !");
    } else if (rePassword.value.length < 8) {
      alert("Repassword invalid !");
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
    if (password.value != rePassword.value) {
      check = 3;
    } else {
      for (let user of listUsers) {
        if (user.username == username.value && user.email == email.value) {
          check = 4;
          break;
        }
      }

      if (check == 1) {
        let check = listUsers.findIndex(
          (user) => user.username == username.value
        );
        if (check != -1) {
          alert("Account already exists");
        } else {
          let user = new User(
            id,
            username.value,
            hashCode(password.value),
            gender,
            birthday.value,
            phoneNumber.value,
            email.value,
            1
          );
          listUsers.push(user);
          updateDataLocalStorage("listUsers", listUsers);
          alert("Register successfully");
          window.location.href = "../html/login.html";
        }
      } else if (check == 2) {
        alert("Please do not leave any fields blank !");
      } else if (check == 3) {
        alert("password and rePassword not match !");
      } else {
        alert("Account already exists");
      }
    }
  }
});
