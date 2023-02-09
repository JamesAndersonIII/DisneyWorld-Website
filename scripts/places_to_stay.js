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
    case "https://i.ytimg.com/vi/QeqVTmpuwbc/maxresdefault.jpg":
      hotelDescription =
        "Disney's Art of Animation Resort bring animated favorites to a larger-than-life format, creating distinct environments as seen in some of our favorite Disney and Pixar films.";
      break;
    case "https://i.ytimg.com/vi/WJiGYB9K8hY/maxresdefault.jpg":
      hotelDescription =
        "At more than 200 acres, Disney's Caribbean Beach resort is the largest resort on Disney property. Its rooms are divided into five brightly colored villages representing different areas of the Caribbean; Trinidad, Martinique, Barbados, Aruba, and Jamaica.";
      break;
    case "https://i.ytimg.com/vi/1HTFBmoN1JE/maxresdefault.jpg":
      hotelDescription =
        "Retreat to this ultra-modern Disney Resort hotel and discover award-winning dining, spectacular views and dazzling pools.";
      break;
    case "https://i.ytimg.com/vi/TURk8PIyfR8/maxresdefault.jpg":
      hotelDescription =
        "Disney's Coronado Springs Resort is unique in that it is the only one of Disney's moderate category resorts to feature a convention center.";
      break;
    case "https://i.ytimg.com/vi/z9EYkBuXoTw/maxresdefault.jpg":
      hotelDescription =
        "Billed as Disney’s “flagship resort,” Disney’s Grand Floridian Resort and Spa is exquisite with its combination of Victorian style and modern day amenities.";
      break;
    case "https://i.ytimg.com/vi/ctD_x_bitSA/maxresdefault.jpg":
      hotelDescription =
        "Themed to reflect the style and culture of the South Pacific, the resort is divided into several ‘longhouses’ as well as the Great Ceremonial House, which serves as the resort's main reception area.";
      break;
    case "https://i.ytimg.com/vi/DF5dCssg7fQ/maxresdefault.jpg":
      hotelDescription =
        " As one of Disney's 'value' resorts, Pop Century has offerings similar to other resorts in its category in terms of room size and amenities, and general layout.";
      break;
    case "https://i.ytimg.com/vi/PKExq2nL8V8/maxresdefault.jpg":
      hotelDescription =
        "In its rustic splendor, Disney’s Wilderness Lodge celebrates turn-of-the century National Parks Service lodges that once were a destination in America’s great northwest.";
      break;
    case "https://i.ytimg.com/vi/7z9mhA4nGyg/maxresdefault.jpg":
      hotelDescription =
        " Unlike the casual atmosphere of its sister resort, the Beach Club, the Yacht Club has more of a quiet, understated elegance about it.";
      break;
    case "https://i.ytimg.com/vi/yxlz6FUe_94/maxresdefault.jpg":
      hotelDescription =
        "Nestled on 750 acres of pine and cypress forest, Disney’s Fort Wilderness Resort & Campground evokes the timeless beauty of the American frontier.";
      break;
    case "https://i.ytimg.com/vi/Vlta5apIJ9c/maxresdefault.jpg":
      hotelDescription =
        "Now open! Revel in the Victorian-style splendor of The Villas at Disney's Grand Floridian Resort & Spa while enjoying the comforts of home.";
      break;
    default:
      hotelDescription = "Please select a hotel from the dropdown menu.";
  }
  hotelImage.innerHTML = `
      <img src="${hotelImageUrl}" alt="Hotel Image">
      <p>${hotelDescription}</p>
    `;
});
