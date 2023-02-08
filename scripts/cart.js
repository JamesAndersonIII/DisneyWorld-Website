const maxValue = 10;
const tixPrice = 100;
const hotelPrice = 200;
const totalPrice = 0;
const total = document.getElementById("cartTotal");

magic_btn.addEventListener("click", () => {
  const counter = document.getElementById("magicTix");
  const pricing = document.getElementById("magicPrice");

  if (parseInt(counter.value) === maxValue) {
    alert("To purchase more than 10 tickets, please call group sales.");
  } else {
    counter.value = parseInt(counter.value) + 1;
    pricing.innerText = tixPrice * counter.value;
    getTotal();
  }

  const parkName = document.getElementById("magic");
  parkName.innerText = "Magic Kingdom Ticket(s)";
});

magicTix.addEventListener("change", () => {
  const counter = document.getElementById("magicTix");
  const pricing = document.getElementById("magicPrice");
  if (parseInt(counter.value) !== 0) {
    pricing.innerText = parseInt(counter.value) * tixPrice;
    const parkName = document.getElementById("magic");
    parkName.innerText = "Magic Kingdom Ticket(s)";
  } else {
    pricing.innerText = 0;
  }
  getTotal();
});

epcot_btn.addEventListener("click", () => {
  const counter = document.getElementById("epcotTix");
  const pricing = document.getElementById("epcotPrice");
  if (parseInt(counter.value) === maxValue) {
    alert("To purchase more than 10 tickets, please call group sales.");
  } else {
    counter.value = parseInt(counter.value) + 1;
    pricing.innerText = tixPrice * counter.value;
    getTotal();
  }

  const parkName = document.getElementById("epcot");
  parkName.innerText = "Epcot Ticket(s)";
});

epcotTix.addEventListener("change", () => {
  const counter = document.getElementById("epcotTix");
  const pricing = document.getElementById("epcotPrice");
  if (parseInt(counter.value) !== 0) {
    pricing.innerText = parseInt(counter.value) * tixPrice;
    const parkName = document.getElementById("epcot");
    parkName.innerText = "Epcot Ticket(s)";
  } else {
    pricing.innerText = 0;
  }
  getTotal();
});

studio_btn.addEventListener("click", () => {
  const counter = document.getElementById("studioTix");
  const pricing = document.getElementById("studioPrice");
  if (parseInt(counter.value) === maxValue) {
    alert("To purchase more than 10 tickets, please call group sales.");
  } else {
    counter.value = parseInt(counter.value) + 1;
    pricing.innerText = tixPrice * counter.value;
    getTotal();
  }

  const parkName = document.getElementById("studio");
  parkName.innerText = "Hollywood Studios Ticket(s)";
});

studioTix.addEventListener("change", () => {
  const counter = document.getElementById("studioTix");
  const pricing = document.getElementById("studioPrice");
  if (parseInt(counter.value) !== 0) {
    pricing.innerText = parseInt(counter.value) * tixPrice;
    const parkName = document.getElementById("studio");
    parkName.innerText = "Hollywood Studio Ticket(s)";
  } else {
    pricing.innerText = 0;
  }
  getTotal();
});

animal_btn.addEventListener("click", () => {
  const counter = document.getElementById("animalTix");
  const pricing = document.getElementById("animalPrice");
  if (parseInt(counter.value) === maxValue) {
    alert("To purchase more than 10 tickets, please call group sales.");
  } else {
    counter.value = parseInt(counter.value) + 1;
    pricing.innerText = tixPrice * counter.value;
    getTotal();
  }

  const parkName = document.getElementById("animal");
  parkName.innerText = "Animal Kingdom Ticket(s)";
});

animalTix.addEventListener("change", () => {
  const counter = document.getElementById("animalTix");
  const pricing = document.getElementById("animalPrice");
  if (parseInt(counter.value) !== 0) {
    pricing.innerText = parseInt(counter.value) * tixPrice;
    const parkName = document.getElementById("animal");
    parkName.innerText = "Animal Kingdom Ticket(s)";
  } else {
    pricing.innerText = 0;
  }
  getTotal();
});

// hotel stuff

animal_btn.addEventListener("click", () => {
  const counter = document.getElementById("animalTix");
  const pricing = document.getElementById("animalPrice");
  if (parseInt(counter.value) === maxValue) {
    alert("To purchase more than 10 tickets, please call group sales.");
  } else {
    counter.value = parseInt(counter.value) + 1;
    pricing.innerText = tixPrice * counter.value;
    getTotal();
  }

  const parkName = document.getElementById("animal");
  parkName.innerText = "Animal Kingdom Ticket(s)";
});

animalTix.addEventListener("change", () => {
  const counter = document.getElementById("animalTix");
  const pricing = document.getElementById("animalPrice");
  if (parseInt(counter.value) !== 0) {
    pricing.innerText = parseInt(counter.value) * tixPrice;
    const parkName = document.getElementById("animal");
    parkName.innerText = "Animal Kingdom Ticket(s)";
  } else {
    pricing.innerText = 0;
  }
  getTotal();
});

function getTotal() {
  const magicTotal = document.getElementById("magicPrice");
  const epcotTotal = document.getElementById("epcotPrice");
  const studioTotal = document.getElementById("studioPrice");
  const animalTotal = document.getElementById("animalPrice");

  total.innerText =
    totalPrice +
    parseInt(magicTotal.innerText) +
    parseInt(epcotTotal.innerText) +
    parseInt(studioTotal.innerText) +
    parseInt(animalTotal.innerText);
}
