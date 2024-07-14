let list = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  //add color to div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  //remove active class from all list
  list.forEach((li) => {
    li.classList.remove("active");
  });
  //add active class to current color
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

list.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    //remove active item from list
    list.forEach((li) => {
      li.classList.remove("active");
    });
    //add active Class to current element
    e.currentTarget.classList.add("active");
    //add current color to localStorage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    //change div background color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
