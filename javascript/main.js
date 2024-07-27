function getDataLocalstorage(nameData) {
  return JSON.parse(localStorage.getItem(nameData));
}

function updateDataLocalStorage(nameData, newData) {
  localStorage.setItem(nameData, JSON.stringify(newData));
}

let category = [
  "vest",
  "vest",
  "threeHoles",
  "longSleeveShirt",
  "patternedShirt",
  "polo",
  "longPolo",
  "koreanMen",
  "jacket",
  "feltset",
];

//xử lý click chọn category
let categoryProduct = 1;
let slide = 1;

let listTagCategorySlide = document.querySelectorAll(".categorySlide");
listTagCategorySlide.forEach((tag) =>
  tag.addEventListener("click", function (e) {
    categoryProduct = e.target.getAttribute("title");
    slide = e.target.getAttribute("title");
    updateDataLocalStorage("filterProductCategory", categoryProduct);
    updateDataLocalStorage("slide", slide);
    updateDataLocalStorage(
      "filterProductCategory",
      category[Number.parseInt(slide)]
    );
    updateDataLocalStorage("filterProductColor", "");
    updateDataLocalStorage("filterProductPrice", "");
    updateDataLocalStorage("filterProductSearch", "");
    updateDataLocalStorage("currentPageProduct", 1);
    updateDataLocalStorage("categoryProduct", categoryProduct);
    updateDataLocalStorage("slide", slide);
  })
);

let categoryJson = JSON.stringify(category);
localStorage.setItem("category", categoryJson);

let listProduct = [
  {
    id: 1,
    category: "vest",
    name: "Bộ Vest Biluxury 7AVBC301DEN + Quần Âu 7QAVC301DEN",
    price: 2449000,
    image1: "../image/products/vest_image1.webp",
    image2: "../image/products/vest_image1_1.webp",
    color: "black",
    inventory: 99,
  },

  {
    id: 2,
    category: "vest",
    name: "Bộ Vest Biluxury 7AVBB308TTS + Quần Âu 7QAVB308TTS",
    price: 2139000,
    image1: "../image/products/vest_image2.webp",
    image2: "../image/products/vest_image2_1.jpg",
    color: "purple",
    inventory: 99,
  },

  {
    id: 3,
    category: "vest",
    name: "Bộ Vest Biluxury 7AVBB308GHS + Quần Âu 7QAVB308GHS",
    price: 2139000,
    image1: "../image/products/vest_image3.webp",
    image2: "../image/products/vest_image3_1.webp",
    color: "gray",
    inventory: 99,
  },

  {
    id: 4,
    category: "vest",
    name: "Bộ Vest Biluxury 7AVBC302TTT + Quần Âu 7QAVC302TTT",
    price: 2389000,
    image1: "../image/products/vest_image4.webp",
    image2: "../image/products/vest_image4_1.webp",
    color: "purple",
    inventory: 99,
  },

  {
    id: 5,
    category: "vest",
    name: "Bộ Vest Biluxury 7AVBH307TTT + Quần Âu 7QAVH307TTT",
    price: 2349000,
    image1: "../image/products/vest_image5.webp",
    image2: "../image/products/vest_image5_1.webp",
    color: "purple",
    inventory: 99,
  },

  {
    id: 6,
    category: "vest",
    name: "Bộ Vest Biluxury 7AVBC305TTT + Quần Âu 7QAVC305TTT",
    price: 2449000,
    image1: "../image/products/vest_image6.webp",
    image2: "../image/products/vest_image6_1.jpg",
    color: "purple",
    inventory: 99,
  },

  {
    id: 7,
    category: "vest",
    name: "Bộ Vest Biluxury 6AVBC205GHS + Quần Âu 6QAVC205GHS",
    price: 2488000,
    image1: "../image/products/vest_image7.webp",
    image2: "../image/products/vest_image7_1.webp",
    color: "gray",
    inventory: 99,
  },

  {
    id: 8,
    category: "vest",
    name: "Bộ Vest nam 6AVBB003GHS + Quần 6QAVB003GHS",
    price: 2339000,
    image1: "../image/products/vest_image8.webp",
    image2: "../image/products/vest_image8_1.webp",
    color: "gray",
    inventory: 99,
  },

  {
    id: 9,
    category: "vest",
    name: "Bộ Vest Nam Biluxury 6AVBB002DEN + Quần Âu 6QAVB002DEN",
    price: 2299000,
    image1: "../image/products/vest_image9.webp",
    image2: "../image/products/vest_image9_1.webp",
    color: "black",
    inventory: 99,
  },

  {
    id: 10,
    category: "vest",
    name: "Áo vest nam Biluxury 6AVBC204GHS",
    price: 1799000,
    image1: "../image/products/vest_image10.webp",
    image2: "../image/products/vest_image10_1.jpg",
    color: "gray",
    inventory: 99,
  },

  {
    id: 11,
    category: "threeHoles",
    name: "Áo Ba Lỗ Đen Cơ Bản Co Giãn 8ABLB002DEN",
    price: 175000,
    image1: "../image/products/threeHoles_image1.webp",
    image2: "../image/products/threeHoles_image1_1.webp",
    color: "black",
    inventory: 99,
  },

  {
    id: 12,
    category: "threeHoles",
    name: "[Mua 1 Tặng 1] Áo Ba Lỗ Trắng Cơ Bản Co Giãn 8ABLB002TRK",
    price: 175000,
    image1: "../image/products/threeHoles_image2.webp",
    image2: "../image/products/threeHoles_image2_1.webp",
    color: "white",
    inventory: 99,
  },

  {
    id: 13,
    category: "threeHoles",
    name: "[Mua 1 Tặng 1] Áo Ba Lỗ Đen Cơ Bản Co Giãn 8ABLB001DEN",
    price: 175000,
    image1: "../image/products/threeHoles_image3.webp",
    image2: "../image/products/threeHoles_image3_1.webp",
    color: "black",
    inventory: 99,
  },

  {
    id: 14,
    category: "threeHoles",
    name: "[Mua 1 Tặng 1] Áo Ba Lỗ Trắng Cơ Bản Co Giãn 8ABLB001TRK",
    price: 175000,
    image1: "../image/products/threeHoles_image4.webp",
    image2: "../image/products/threeHoles_image4_1.webp",
    color: "white",
    inventory: 99,
  },

  {
    id: 15,
    category: "longSleeveShirt",
    name: "Áo Sơ Mi Trắng Dài Tay Knit Nhật Kháng Khuẩn Tốt 7SMDB303TRK",
    price: 885000,
    image1: "../image/products/longSleeveShirt_image1.webp",
    image2: "../image/products/longSleeveShirt_image1_1.webp",
    color: "white",
    inventory: 99,
  },

  {
    id: 16,
    category: "longSleeveShirt",
    name: "Áo Sơ Mi Trắng Dài Tay Knit Nhật Kháng Khuẩn Tốt 7SMDB302TRK",
    price: 885000,
    image1: "../image/products/longSleeveShirt_image2.webp",
    image2: "../image/products/longSleeveShirt_image2_1.webp",
    color: "white",
    inventory: 99,
  },

  {
    id: 17,
    category: "longSleeveShirt",
    name: "[Giảm 50%] Áo Sơ Mi Xanh Dài Tay Từ Sợi Tre Kháng Khuẩn Tốt 7SMDH311XNH",
    price: 299000,
    image1: "../image/products/longSleeveShirt_image3.webp",
    image2: "../image/products/longSleeveShirt_image3_1.webp",
    color: "blue",
    inventory: 99,
  },

  {
    id: 18,
    category: "longSleeveShirt",
    name: "Áo Sơ Mi Trắng Dài Tay Họa Tiết Chìm Từ Sợi Sồi Thấm Hút Mồ Hôi 7SMDH302TRK",
    price: 559000,
    image1: "../image/products/longSleeveShirt_image4.webp",
    image2: "../image/products/longSleeveShirt_image4_1.webp",
    color: "white",
    inventory: 99,
  },

  {
    id: 19,
    category: "longSleeveShirt",
    name: "[TẶNG T-SHIRT] Áo Sơ Mi Xanh Dài Tay Từ Sợi Sồi Kháng Khuẩn Tốt 7SMDC306XAH",
    price: 545000,
    image1: "../image/products/longSleeveShirt_image5.webp",
    image2: "../image/products/longSleeveShirt_image5_1.webp",
    color: "blue",
    inventory: 99,
  },

  {
    id: 20,
    category: "longSleeveShirt",
    name: "Áo Sơ Mi Xanh Dài Tay Knit Nhật Thân Thiện Với Da 8SMDH421XNH",
    price: 799000,
    image1: "../image/products/longSleeveShirt_image6.webp",
    image2: "../image/products/longSleeveShirt_image6_1.webp",
    color: "blue",
    inventory: 99,
  },

  {
    id: 21,
    category: "longSleeveShirt",
    name: "Áo Sơ Mi Trắng Dài Tay Từ Sợi Tre Kháng Khuẩn Tốt 7SMDB301TRK",
    price: 579000,
    image1: "../image/products/longSleeveShirt_image7.webp",
    image2: "../image/products/longSleeveShirt_image7_1.webp",
    color: "white",
    inventory: 99,
  },

  {
    id: 22,
    category: "longSleeveShirt",
    name: "Áo Sơ Mi Xanh Dài Tay Hoạ Tiết Kẻ Sọc Bền Màu, Dễ Làm Sạch 7SMDT330XAH",
    price: 695000,
    image1: "../image/products/longSleeveShirt_image8.webp",
    image2: "../image/products/longSleeveShirt_image8_1.webp",
    color: "blue",
    inventory: 99,
  },

  {
    id: 23,
    category: "longSleeveShirt",
    name: "Áo Sơ Mi Tím than Tối Dài Tay Từ Sợi Tre Chống Tia UV 7SMDH317TTT",
    price: 569000,
    image1: "../image/products/longSleeveShirt_image9.webp",
    image2: "../image/products/longSleeveShirt_image9_1.webp",
    color: "purple",
    inventory: 99,
  },

  {
    id: 24,
    category: "longSleeveShirt",
    name: "Áo Sơ Mi Xanh Dài Tay Gracell Kháng Khuẩn 8SMDH429XNH",
    price: 799000,
    image1: "../image/products/longSleeveShirt_image10.webp",
    image2: "../image/products/longSleeveShirt_image10_1.webp",
    color: "blue",
    inventory: 99,
  },

  {
    id: 25,
    category: "patternedShirt",
    name: "Áo Sơ Mi Xanh Ngắn Tay Từ Sợi Tre Chống Tia UV 8SMCB427XAH",
    price: 429000,
    image1: "../image/products/patternedShirt_image1.webp",
    image2: "../image/products/patternedShirt_image1_1.webp",
    color: "blue",
    inventory: 99,
  },

  {
    id: 26,
    category: "patternedShirt",
    name: "Áo Sơ Mi Xanh Ngắn Tay Từ Sợi Tre Chống Tia UV 8SMCB426XAH",
    price: 429000,
    image1: "../image/products/patternedShirt_image2.webp",
    image2: "../image/products/patternedShirt_image2_1.jpg",
    color: "blue",
    inventory: 99,
  },

  {
    id: 27,
    category: "patternedShirt",
    name: "Áo Sơ Mi Xanh Ngắn Tay Từ Sợi Tre Chống Tia UV 7SMCC003XNG",
    price: 495000,
    image1: "../image/products/patternedShirt_image3.webp",
    image2: "../image/products/patternedShirt_image3_1.webp",
    color: "blue",
    inventory: 99,
  },

  {
    id: 28,
    category: "patternedShirt",
    name: "Áo Sơ Mi Xanh Ngắn Tay Kháng Khuẩn Tốt 8SMCB001XNH",
    price: 489000,
    image1: "../image/products/patternedShirt_image4.webp",
    image2: "../image/products/patternedShirt_image4_1.jpg",
    color: "blue",
    inventory: 99,
  },

  {
    id: 29,
    category: "patternedShirt",
    name: "Áo Sơ Mi Xanh Ngắn Tay Kháng Khuẩn Tốt 7SMCB001XDM",
    price: 439000,
    image1: "../image/products/patternedShirt_image5.webp",
    image2: "../image/products/patternedShirt_image5_1.jpg",
    color: "blue",
    inventory: 99,
  },

  {
    id: 30,
    category: "patternedShirt",
    name: "Áo Sơ Mi Xanh Ngắn Tay Kháng Khuẩn Tốt 7SMCB001XAH",
    price: 439000,
    image1: "../image/products/patternedShirt_image6.webp",
    image2: "../image/products/patternedShirt_image6_1.webp",
    color: "blue",
    inventory: 99,
  },

  {
    id: 31,
    category: "patternedShirt",
    name: "Áo Sơ Mi Trắng Ngắn Tay Knit Nhật Thân Thiện Với Da 8SMCH406TRK",
    price: 495000,
    image1: "../image/products/patternedShirt_image7.webp",
    image2: "../image/products/patternedShirt_image7_1.webp",
    color: "white",
    inventory: 99,
  },

  {
    id: 32,
    category: "patternedShirt",
    name: "Áo Sơ Mi Tím Than Tối Ngắn Tay Knit Nhật Thân Thiện Với Da 8SMCH423TTT",
    price: 699000,
    image1: "../image/products/patternedShirt_image8.jpg",
    image2: "../image/products/patternedShirt_image8_1.webp",
    color: "purple",
    inventory: 99,
  },

  {
    id: 33,
    category: "polo",
    name: "Áo Polo Xanh Cơ Bản Không Đường May Bền Màu 8APCB405XCV",
    price: 650000,
    image1: "../image/products/polo_image1.webp",
    image2: "../image/products/polo_image1_1.webp",
    color: "blue",
    inventory: 99,
  },

  {
    id: 34,
    category: "polo",
    name: "Áo Polo Vàng Bò Cơ Bản Không Đường May Bền Màu 8APCB405VAB",
    price: 650000,
    image1: "../image/products/polo_image2.webp",
    image2: "../image/products/polo_image2_1.webp",
    color: "brown",
    inventory: 99,
  },

  {
    id: 35,
    category: "polo",
    name: "Áo Polo Đen Cơ Bản Phối Viền Cổ Bền Màu 8APCT450DEN",
    price: 395000,
    image1: "../image/products/polo_image3.webp",
    image2: "../image/products/polo_image3_1.webp",
    color: "black",
    inventory: 99,
  },

  {
    id: 36,
    category: "polo",
    name: "Áo Polo Ghi Sáng Cơ Bản Phối Màu Viền Cổ Vải Recycle Chống Nhăn 8APCT404GHS",
    price: 395000,
    image1: "../image/products/polo_image4.webp",
    image2: "../image/products/polo_image4_1.webp",
    color: "gray",
    inventory: 99,
  },

  {
    id: 37,
    category: "polo",
    name: "[Giảm 33%] Áo Polo Hồng Đậm Họa Tiết Kẻ Ngang Vải Recycle Bền Màu 8APCT458HOD",
    price: 289000,
    image1: "../image/products/polo_image5.webp",
    image2: "../image/products/polo_image5_1.webp",
    color: "pink",
    inventory: 99,
  },

  {
    id: 38,
    category: "polo",
    name: "Áo Polo Trắng Hoạ Tiết Kẻ Sọc Vải Recycle Dễ Làm Sạch 8APCH414TRK",
    price: 429000,
    image1: "../image/products/polo_image6.webp",
    image2: "../image/products/polo_image6_1.webp",
    color: "white",
    inventory: 99,
  },

  {
    id: 39,
    category: "polo",
    name: "Áo Polo Hồng Cơ Bản Phối Viền Cổ Vải Recycle Thân Thiện Với Da 8APCT467HOG",
    price: 395000,
    image1: "../image/products/polo_image7.webp",
    image2: "../image/products/polo_image7_1.webp",
    color: "pink",
    inventory: 99,
  },

  {
    id: 40,
    category: "polo",
    name: "Áo Polo Nâu Cơ Bản Vải Recycle Thân Thiện Với Da 8APCB460NAU",
    price: 369000,
    image1: "../image/products/polo_image8.webp",
    image2: "../image/products/polo_image8_1.webp",
    color: "brown",
    inventory: 99,
  },

  {
    id: 41,
    category: "polo",
    name: "Áo Polo Trắng Cơ Bản Không Đường May Chống Nhăn 8APCT401TRK",
    price: 650000,
    image1: "../image/products/polo_image9.webp",
    image2: "../image/products/polo_image9_1.webp",
    color: "white",
    inventory: 99,
  },

  {
    id: 42,
    category: "polo",
    name: "Áo Polo Trắng Cơ Bản Không Đường May Chống Nhăn 8APCB431TRK",
    price: 585000,
    image1: "../image/products/polo_image10.webp",
    image2: "../image/products/polo_image10_1.webp",
    color: "white",
    inventory: 99,
  },

  {
    id: 43,
    category: "longPolo",
    name: "Áo Polo Dài Tay Nam 6APDT002DEN",
    price: 495000,
    image1: "../image/products/longPolo_image1.jpg",
    image2: "../image/products/longPolo_image1_1.webp",
    color: "black",
    inventory: 99,
  },

  {
    id: 44,
    category: "koreanMen",
    name: "Áo Sơ Mi Trắng Dài Tay Knit Nhật Kháng Khuẩn Tốt 7SMDB303TRK",
    price: 885000,
    image1: "../image/products/koreanMen_image1.webp",
    image2: "../image/products/koreanMen_image1_1.webp",
    color: "white",
    inventory: 99,
  },

  {
    id: 45,
    category: "koreanMen",
    name: "Áo Sơ Mi Trắng Dài Tay Knit Nhật Kháng Khuẩn Tốt 7SMDB302TRK",
    price: 885000,
    image1: "../image/products/koreanMen_image2.webp",
    image2: "../image/products/koreanMen_image2_1.webp",
    color: "white",
    inventory: 99,
  },

  {
    id: 46,
    category: "koreanMen",
    name: "Áo Sơ Mi Xanh Dài Tay Knit Nhật Thân Thiện Với Da 8SMDH421XNH",
    price: 799000,
    image1: "../image/products/koreanMen_image3.webp",
    image2: "../image/products/koreanMen_image3_1.jpg",
    color: "blue",
    inventory: 99,
  },

  {
    id: 47,
    category: "koreanMen",
    name: "Áo Sơ Mi Xanh Dài Tay Knit Nhật Thân Thiện Với Da 8SMDH420XNH",
    price: 799000,
    image1: "../image/products/koreanMen_image4.webp",
    image2: "../image/products/koreanMen_image4_1.webp",
    color: "blue",
    inventory: 99,
  },

  {
    id: 48,
    category: "koreanMen",
    name: "Áo Sơ Mi Xanh Dài Tay Gracell Kháng Khuẩn 8SMDH429XNH",
    price: 799000,
    image1: "../image/products/koreanMen_image5.webp",
    image2: "../image/products/koreanMen_image5_1.webp",
    color: "blue",
    inventory: 99,
  },

  {
    id: 49,
    category: "koreanMen",
    name: "Áo Sơ Mi Trắng Ngắn Tay Knit Nhật Kháng Khuẩn Tốt 7SMCB302TRK",
    price: 755000,
    image1: "../image/products/koreanMen_image6.webp",
    image2: "../image/products/koreanMen_image6_1.webp",
    color: "white",
    inventory: 99,
  },

  {
    id: 50,
    category: "koreanMen",
    name: "Áo Sơ Mi Tím Than Tối Ngắn Tay Knit Nhật Thân Thiện Với Da 8SMCH423TTT",
    price: 699000,
    image1: "../image/products/koreanMen_image7.jpg",
    image2: "../image/products/koreanMen_image7_1.webp",
    color: "purple",
    inventory: 99,
  },

  {
    id: 51,
    category: "koreanMen",
    name: "Áo Sơ Mi Xanh Dài Tay Hoạ Tiết Kẻ Sọc Bền Màu, Dễ Làm Sạch 7SMDT330XAH",
    price: 695000,
    image1: "../image/products/koreanMen_image8.webp",
    image2: "../image/products/koreanMen_image8_1.webp",
    color: "blue",
    inventory: 99,
  },

  {
    id: 52,
    category: "koreanMen",
    name: "Áo Sơ Mi Xanh Dài Tay Từ Sợi Tre Kháng Khuẩn Tốt 6SMDC001XNH",
    price: 635000,
    image1: "../image/products/koreanMen_image9.webp",
    image2: "../image/products/koreanMen_image9_1.jpg",
    color: "blue",
    inventory: 99,
  },

  {
    id: 53,
    category: "koreanMen",
    name: "Áo Sơ Mi Tím Than Tối Dài Tay Từ Sợi Tre Kháng Khuẩn Tốt 6SMDC002TTT",
    price: 635000,
    image1: "../image/products/koreanMen_image10.webp",
    image2: "../image/products/koreanMen_image10_1.jpg",
    color: "purple",
    inventory: 99,
  },
];

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

//------------------

// display list product vest
if (!localStorage.getItem("products")) {
  let productJson = JSON.stringify(listProduct);
  localStorage.setItem("products", productJson);
}

const tagVestProduct = document.querySelector(".vestProduct");
let listVestJson = localStorage.getItem("products");
let listVest = JSON.parse(listVestJson).filter(
  (product) => product.category == "vest"
);
let productVest = [];
for (let product of listVest) {
  productVest.push(`
         <div class="vest-item">
            <div class="item">
              <img
              id="${product.id}"
              class="itemVest"
              image2="${product.image2}"
              src="${product.image1}"
              alt="${product.name}"
            </div>

    <a href="../html/productDetail.html" class="buy-now" id="${product.id}">Mua ngay</a>
  </div>
    `);
}

function displayPolo() {
  tagVestProduct.innerHTML = "";
  for (let i = 0; i <= productVest.length - 2; i++) {
    let tmp = productVest[i];
    productVest[i] = productVest[i + 1];
    productVest[i + 1] = tmp;
  }
  for (let i = 0; i < 4; i++) {
    tagVestProduct.innerHTML += productVest[i];
  }
  // xử lý sự kiện hover vào product vest item
  const listItemVests = document.querySelectorAll(".itemVest");
  for (let item of listItemVests) {
    item.addEventListener("mouseover", function () {
      let image2 = item.getAttribute("image2");
      setTimeout(function () {
        item.src = image2;
      }, 200);
    });

    item.addEventListener("mouseout", function () {
      let id = item.getAttribute("id");
      let index = listVest.findIndex((vest) => vest.id == id);
      let image1 = listVest[index].image1;
      setTimeout(function () {
        item.src = image1;
      }, 200);
    });
  }

  // xử lý sự kiện click vào buy-now
  const buyNowVest = document.querySelectorAll(".buy-now");
  for (let buy of buyNowVest) {
    buy.addEventListener("click", function (e) {
      console.log("huongcaoha");
      let id = e.target.getAttribute("id");
      updateDataLocalStorage("productDetail", id);
    });
  }
}
let setIntervalPolo;
function runCategoryPolo() {
  setIntervalPolo = setInterval(displayPolo, 3000);
}

function stopCategoryPolo() {
  clearInterval(setIntervalPolo);
}
runCategoryPolo();

let tagListTotalProduct = document.querySelector(".listTotalProduct");
let totalProductJson = localStorage.getItem("products");
let totalProducts = JSON.parse(totalProductJson);
let productThreeHoles = totalProducts
  .filter((product) => product.category == "threeHoles")
  .slice(0, 4);
let productLongSleeveShirt = totalProducts
  .filter((product) => product.category == "longSleeveShirt")
  .slice(0, 4);
let productPatternedShirt = totalProducts
  .filter((product) => product.category == "patternedShirt")
  .slice(0, 4);
let productPolo = totalProducts
  .filter((product) => product.category == "polo")
  .slice(0, 4);
let productLongPolo = totalProducts
  .filter((product) => product.category == "longPolo")
  .slice(0, 4);
let productKoreanMen = totalProducts
  .filter((product) => product.category == "koreanMen")
  .slice(0, 4);
let productJacket = totalProducts
  .filter((product) => product.category == "jacket")
  .slice(0, 4);
let productFeltset = totalProducts
  .filter((product) => product.category == "feltset")
  .slice(0, 4);
let newListProducts = productLongSleeveShirt.concat(
  // productThreeHoles,
  productPatternedShirt,
  productPolo,
  // productLongPolo,
  productKoreanMen,
  productJacket,
  productFeltset
);

for (let product of newListProducts) {
  tagListTotalProduct.innerHTML += `
         <div class="item-product" id="${product.image2}">
            <div class="item">
                <img
                id="${product.id}"
                src="${product.image1}"
                alt="${product.name}"
                />
                <a href="../html/productDetail.html" class="buy-now" id="${
                  product.id
                }">Mua ngay</a>
            </div>
              <p>${product.name}</p>
               <p>${new Intl.NumberFormat("vi-VN", { style: "decimal" }).format(
                 product.price
               )}VNĐ</p>
            
          </div>
    `;
}

// xử lý sự kiện click vào buy-now
const buyNows = document.querySelectorAll(".buy-now");
for (let buy of buyNows) {
  buy.addEventListener("click", function () {
    let id = buy.getAttribute("id");
    updateDataLocalStorage("productDetail", id);
  });
}

//------------------------------------

let listItems = tagListTotalProduct.querySelectorAll(".item-product");
for (let item of listItems) {
  let image2 = item.getAttribute("id");
  let img = item.querySelector("img");
  let image1 = img.src;
  item.addEventListener("mouseover", function () {
    setTimeout(() => {
      img.src = image2;
    }, 200); // Delay 0.5 giây
  });

  item.addEventListener("mouseout", function () {
    setTimeout(() => {
      img.src = image1;
    }, 200);
  });
}

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

// xử lý filter product
const filterProductPrice = document.getElementById("filterPrice");
filterProductPrice.addEventListener("change", function () {
  updateDataLocalStorage("filterProductPrice", filterProductPrice.value);
  window.location.href = "../html/product.html";
});

const buttonFilterSearch = document.querySelector(".filterButtonSearch");
const filterProductSearch = document.getElementById("filterSearch");
buttonFilterSearch.addEventListener("click", function () {
  updateDataLocalStorage("filterProductSearch", filterProductSearch.value);
  window.location.href = "../html/product.html";
});

const filterProductCategory = document.getElementById("filterCategory");
filterProductCategory.addEventListener("change", function () {
  updateDataLocalStorage("filterProductCategory", filterProductCategory.value);
  window.location.href = "../html/product.html";
});

const filterProductColor = document.getElementById("filterColor");
filterProductColor.addEventListener("change", function () {
  updateDataLocalStorage("filterProductColor", filterProductColor.value);
  window.location.href = "../html/product.html";
});

// sử lý sự kiện xem thêm
let seeMore = document.getElementById("seeMore");
seeMore.addEventListener("click", function () {
  updateDataLocalStorage("filterProductCategory", "vest");
});

// section nhắn tin giữa khách và admin

function renderMessage() {
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
    };
    myMessage.push(newMessage);
    dataMessage[nameUser] = myMessage;
    message.value = "";
    updateDataLocalStorage("dataMessage", dataMessage);
    renderMessage();
  });
}
renderMessage();
