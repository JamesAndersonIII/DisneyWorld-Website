const hotelSelect = document.getElementById("hotel-select");
const hotelImage = document.getElementById("hotel-image");

hotelSelect.addEventListener("change", function () {
  const hotelImageUrl = hotelSelect.value;
  let hotelDescription = "";
  switch (hotelSelect.value) {
    case "https://i.ytimg.com/vi/i0s6FSE-BUI/maxresdefault.jpg":
      hotelDescription =
        "Disney's All-Star Movies Resort is a budget-friendly resort themed after some of Disney's classic animated films.";
      break;
    case "https://i.ytimg.com/vi/yCeOpoPcOC0/maxresdefault.jpg":
      hotelDescription =
        "Disney's Animal Kingdom Lodge is a deluxe resort inspired by African wildlife and culture.";
      break;
    // add cases for the rest of the options
    default:
      hotelDescription = "Please select a hotel from the dropdown menu.";
  }
  hotelImage.innerHTML = `
      <img src="${hotelImageUrl}" alt="Hotel Image">
      <p>${hotelDescription}</p>
    `;
});
