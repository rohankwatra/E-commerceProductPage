// VARIABLES AND SELECTORS
const ImagePreview = document.querySelectorAll(".img-preview");
const mainImage = document.querySelector(".main-img");
const plusBtn = document.querySelector(".plus-btn");
const qtyNumber = document.querySelector(".qty-number input");
const minusBtn = document.querySelector(".minus-btn");
const cartIcon = document.querySelector(".right-nav svg");
const cartCard = document.querySelector(".cart-card");
const addToCartBtn = document.querySelector(".add-cart");
const delIcon = document.querySelector(".del");
const emptyCart = document.querySelector(".empty");
const cartItem = document.querySelector(".cart-items");
const backdrop = document.querySelector(".backdrop");
const shoesNo = document.querySelector("#shoes-no");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const smallImage = document.querySelectorAll(".small-img");
const closeSvg = document.querySelector(".close-btn");
const imageDisplay = document.querySelector(".image-display");
const sliderMainImg = document.querySelector(".slider-main-img");
const menuIcon = document.querySelector("#menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileMenuBackdrop = document.querySelector(".mobile-menu__backdrop");
const mainNextBtn = document.querySelector(".main-next-btn");
const mainPrevBtn = document.querySelector(".main-prev-btn");
const sectionMainImg = document.querySelector(".section-main-img");

let index = 0;

// EVENT LISTENERS

// SMALL PICTURES IN THE MAIN SECTION
ImagePreview.forEach((img, index) => {
  img.addEventListener("click", () => {
    applyImage(index);
  });
});

// PLUS AND MINUS BUTTON IN THE COUNTER AND CART CLASS IN THE TEXT SECTION
plusBtn.addEventListener("click", increment);
minusBtn.addEventListener("click", decrement);

// CART ICON IN THE NAVBAR
cartIcon.addEventListener("click", openCart);

// ADD TO CART BUTTON IN THE TEXT SECTION
addToCartBtn.addEventListener("click", updateCart);

// DEL ICON IN THE CART ITEMS CLASS IN THE RIGHT NAV
delIcon.addEventListener("click", () => {
  cartItem.style.display = "none";
  emptyCart.style.display = "flex";
  qtyNumber.value = "1";
  shoesNo.innerText = "0";
});

// DIV IN WHICH MAINNEXT AND MAINPREV BUTTON IS ADDED
mainImage.addEventListener("click", () => {
  imageDisplay.style.display = "flex";
});

// BUTTONS IN THE POPUP SECTION
nextBtn.addEventListener("click", nextPhoto);
prevBtn.addEventListener("click", prevPhoto);

// BUTTONS IN THE MAIN SECTION
mainNextBtn.addEventListener("click", mainNextPhoto);
mainPrevBtn.addEventListener("click", mainPrevPhoto);

// CROSS BUTTON IN THE POPUP SECTION
closeSvg.addEventListener("click", () => {
  imageDisplay.style.display = "none";
});

// MENU ICON IN THE TOP LEFT CORNER
menuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  mobileMenu.style.display = "flex";
});

// CLOSE BUTTON IN THE MOBILE NAVBAR
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  mobileMenu.style.display = "none";
});

mobileMenuBackdrop.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  mobileMenu.style.display = "none";
});

// FUNCTIONS

// TO APPLY IMAGE FROM THUMBNAIL IN THE MAIN IMAGE SECTION
function applyImage(index) {
  // GETTING THE DATA-IMG ATTRIBUTE VALUE FROM ALL THUMBNAIL IMAGES
  const imgIndex = ImagePreview[index].getAttribute("data-img");

  ImagePreview.forEach((img, index) => {
    if (imgIndex == index) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });

  sectionMainImg.src = `/images/image-product-${index + 1}.jpg`;
}

// TO INCREMENT THE NUMBER FROM PLUS BUTTON
function increment() {
  qtyNumber.stepUp();
}

// TO DECREMENT THE NUMBER FROM MINUS BUTTON
function decrement() {
  qtyNumber.stepDown();
}

// TO OPEN THE CART
function openCart() {
  cartCard.parentElement.classList.toggle("active");
}

// TO UPDATE THE CART
function updateCart() {
  const qtyValue = qtyNumber.value;
  const orderPc = document.querySelector(".order-info");
  const number = 125.0 * qtyValue;
  const totalPrice = number.toFixed(2);
  shoesNo.innerText = qtyValue;
  orderPc.children[1].innerHTML = `<p>$125.00 x ${qtyValue} <strong>$ ${totalPrice}</strong>`;
  emptyCart.style.display = "none";
  cartItem.style.display = "block";
}

// CART CARD BACKDROP
backdrop.addEventListener("click", () => {
  if (cartCard.parentElement.classList.contains("active")) {
    cartCard.parentElement.classList.remove("active");
  }
});

// UPDATE PHOTO IN THE POPUP SECTION
function updatePhotoOnMove(index) {
  sliderMainImg.src = ` /images/image-product-${index + 1}.jpg`;
}

//UPDATE PHOTO IN THE MAIN SECTION
function updateMainPhotoOnMove(index) {
  sectionMainImg.src = ` /images/image-product-${index + 1}.jpg`;
}

// FUNCTIONS FOR THE POPUP SECTION IMAGE
function nextPhoto() {
  index += 1;
  if (index === 4) {
    index = 0;
  }

  smallImage.forEach((img, idx) => {
    if (idx === index) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
  updatePhotoOnMove(index);
}

function prevPhoto() {
  if (index === 0) {
    index = 3;
  } else {
    index -= 1;
  }
  smallImage.forEach((img, idx) => {
    if (idx === index) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
  updatePhotoOnMove(index);
}

// FUNCTIONS FOR THE MAIN SECTION IMAGE
function mainNextPhoto(e) {
  // The stopPropagation() method prevents propagation of the same event from being called.
  e.stopPropagation();
  index += 1;
  if (index === 4) {
    index = 0;
  }
  updateMainPhotoOnMove(index);
}

function mainPrevPhoto(e) {
  e.stopPropagation();
  if (index === 0) {
    index = 3;
  } else {
    index -= 1;
  }
  updateMainPhotoOnMove(index);
}
