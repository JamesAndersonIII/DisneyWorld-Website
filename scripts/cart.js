const maxValue = 10;
const tixPrice = 100;
const total = document.getElementById("cartTotal");
const maxTix = "To purchase more than 10 tickets, please call group sales.";

// Magic Kingdom
// add to cart button
magic_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const counter = document.getElementById("magicTix");
  const pricing = document.getElementById("magicPrice");

  if (parseInt(counter.value) === maxValue) {
    alert(maxTix);
  } else {
    counter.value = parseInt(counter.value) + 1;
    pricing.innerText = tixPrice * counter.value;
    getTotal();
    resetBtns();
  }
});

// number text box
magicTix.addEventListener("keydown", (keyPress) => {
  const counter = document.getElementById("magicTix");
  const pricing = document.getElementById("magicPrice");
  if (keyPress.key === "Enter") {
    if (parseInt(counter.value) > maxValue) {
      alert(maxTix);
      counter.value = 0;
      pricing.innerText = 0;
    }
  }
});

magicTix.addEventListener("change", () => {
  const pricing = document.getElementById("magicPrice");
  const counter = document.getElementById("magicTix");
  if (parseInt(counter.value) !== 0) {
    pricing.innerText = parseInt(counter.value) * tixPrice;
  } else {
    pricing.innerText = 0;
  }
  getTotal();
  resetBtns();
});

// Epcot
// add to cart button
epcot_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const counter = document.getElementById("epcotTix");
  const pricing = document.getElementById("epcotPrice");
  if (parseInt(counter.value) === maxValue) {
    alert(maxTix);
  } else {
    counter.value = parseInt(counter.value) + 1;
    pricing.innerText = tixPrice * counter.value;
    getTotal();
    resetBtns();
  }
});

// number text box
epcotTix.addEventListener("keydown", (keyPress) => {
  const counter = document.getElementById("epcotTix");
  const pricing = document.getElementById("epcotPrice");
  if (keyPress.key === "Enter") {
    if (parseInt(counter.value) > maxValue) {
      alert(maxTix);
      counter.value = 0;
      pricing.innerText = 0;
    }
  }
});

epcotTix.addEventListener("change", () => {
  const pricing = document.getElementById("epcotPrice");
  const counter = document.getElementById("epcotTix");
  if (parseInt(counter.value) !== 0) {
    pricing.innerText = parseInt(counter.value) * tixPrice;
  } else {
    pricing.innerText = 0;
  }
  getTotal();
  resetBtns();
});

// Hollywood Studios
// add to cart button
studio_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const counter = document.getElementById("studioTix");
  const pricing = document.getElementById("studioPrice");
  if (parseInt(counter.value) === maxValue) {
    alert(maxTix);
  } else {
    counter.value = parseInt(counter.value) + 1;
    pricing.innerText = tixPrice * counter.value;
    getTotal();
    resetBtns();
  }
});

// number text box
studioTix.addEventListener("keydown", (keyPress) => {
  const counter = document.getElementById("studioTix");
  const pricing = document.getElementById("studioPrice");
  if (keyPress.key === "Enter") {
    if (parseInt(counter.value) > maxValue) {
      alert(maxTix);
      counter.value = 0;
      pricing.innerText = 0;
    }
  }
});

studioTix.addEventListener("change", () => {
  const counter = document.getElementById("studioTix");
  const pricing = document.getElementById("studioPrice");
  if (parseInt(counter.value) !== 0) {
    pricing.innerText = parseInt(counter.value) * tixPrice;
  } else {
    pricing.innerText = 0;
  }
  getTotal();
  resetBtns();
});

// Animal Kingdom
// add to cart button
animal_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const counter = document.getElementById("animalTix");
  const pricing = document.getElementById("animalPrice");
  if (parseInt(counter.value) === maxValue) {
    alert(maxTix);
  } else {
    counter.value = parseInt(counter.value) + 1;
    pricing.innerText = tixPrice * counter.value;
    getTotal();
    resetBtns();
  }
});

// number text box
animalTix.addEventListener("keydown", (keyPress) => {
  const counter = document.getElementById("animalTix");
  const pricing = document.getElementById("animalPrice");
  if (keyPress.key === "Enter") {
    if (parseInt(counter.value) > maxValue) {
      alert(maxTix);
      counter.value = 0;
      pricing.innerText = 0;
    }
  }
});

animalTix.addEventListener("change", () => {
  const counter = document.getElementById("animalTix");
  const pricing = document.getElementById("animalPrice");
  if (parseInt(counter.value) !== 0) {
    pricing.innerText = parseInt(counter.value) * tixPrice;
  } else {
    pricing.innerText = 0;
  }
  getTotal();
  resetBtns();
});

function getTotal() {
  const magicTotal = document.getElementById("magicPrice");
  const epcotTotal = document.getElementById("epcotPrice");
  const studioTotal = document.getElementById("studioPrice");
  const animalTotal = document.getElementById("animalPrice");

  total.innerText =
    parseInt(magicTotal.innerText) +
    parseInt(epcotTotal.innerText) +
    parseInt(studioTotal.innerText) +
    parseInt(animalTotal.innerText);
}

// reset buttons
function resetBtns() {
  magicResetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const quant = document.getElementById("magicTix");
    const price = document.getElementById("magicPrice");
    quant.value = 0;
    price.innerText = "0";
    getTotal();
  });

  epcotResetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const quant = document.getElementById("epcotTix");
    const price = document.getElementById("epcotPrice");
    quant.value = 0;
    price.innerText = "0";
    getTotal();
  });

  studioResetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const quant = document.getElementById("studioTix");
    const price = document.getElementById("studioPrice");
    quant.value = 0;
    price.innerText = "0";
    getTotal();
  });

  animalResetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const quant = document.getElementById("animalTix");
    const price = document.getElementById("animalPrice");
    quant.value = 0;
    price.innerText = "0";
    getTotal();
  });
}

cartResetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const quantMagic = document.getElementById("magicTix");
  const priceMagic = document.getElementById("magicPrice");
  const quantEpcot = document.getElementById("epcotTix");
  const priceEpcot = document.getElementById("epcotPrice");
  const quantStudio = document.getElementById("studioTix");
  const priceStudio = document.getElementById("studioPrice");
  const quantAnimal = document.getElementById("animalTix");
  const priceAnimal = document.getElementById("animalPrice");
  quantMagic.value = 0;
  priceMagic.innerText = "0";
  quantEpcot.value = 0;
  priceEpcot.innerText = "0";
  quantStudio.value = 0;
  priceStudio.innerText = "0";
  quantAnimal.value = 0;
  priceAnimal.innerText = "0";
  getTotal();
});
