const navList = document.getElementById("navList");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

// Menyuni ochish
openBtn.addEventListener("click", () => {
  navList.classList.add("active");
});

// Menyuni yopish
closeBtn.addEventListener("click", () => {
  navList.classList.remove("active");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  // Sahifa 50px pastga tushganda 'sticky' klassini qo'shadi
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
