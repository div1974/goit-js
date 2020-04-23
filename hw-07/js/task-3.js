const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gal = document.querySelector("#gallery");
const allItems = images.map((el) => {
  const liItem = document.createElement("li");
  
  const imgItem = document.createElement("img");
  imgItem.src = el.url;
  imgItem.alt = el.alt;
  imgItem.setAttribute("style", "width:298px; height:198px");

  liItem.style.listStyle = "none";
  liItem.appendChild(imgItem);
  return liItem.outerHTML;
});

gal.setAttribute("style", "display:flex; justify-content:space-between");
 
gal.insertAdjacentHTML("afterbegin", allItems.join(''));






//width: 351px;
//height: 198px

//width: 297px;
//height: 198px;

// width: 298px;
// height: 198px;
