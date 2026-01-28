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
