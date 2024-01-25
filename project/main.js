const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "UltralightX",
    price: 199,
    colors: [
      {
        code: "#d4af37",
        img: "./img/gold.png",
      },
      {
        code: "rgb(42, 102, 122)",
        img: "./img/blue.png",
      },
      {
        code: "black",
        img: "./img/blue.png",
      },
    ],
  },
  {
    id: 2,
    title: "STARLIGHT-12",
    price: 149,
    colors: [
      {
        code: "#d4af37",
        img: "./img/blackgold.png",
      },
      {
        code: "white",
        img: "./img/white.png",
      },
      {
        code: "red",
        img: "./img/red.png",
      },
    ],
  },
  {
    id: 3,
    title: "STARLIGHT-12 PRO TENZ",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/sttenz.png",
      },
      {
        code: "black",
        img: "./img/sttenz.png",
      },
      {
        code: "black",
        img: "./img/sttenz.png",
      },
    ],
  },
  {
    id: 4,
    title: "THE LAST LEGEND",
    price: 129,
    colors: [
      {
        code: "lightgray",
        img: "./img/lastlegendsell.jpg",
      },
      {
        code: "black",
        img: "./img/lastlegendsell.jpg",
      },
      {
        code: "black",
        img: "./img/lastlegendsell.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    
    choosenProduct = products[index];

    
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});