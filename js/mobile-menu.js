(() => {
  const refs = {
    openMenulBtn: document.querySelector("[data-menu-button]"),
    closeMenuBtn: document.querySelector("[data-menu-button-close]"),
    mobileMenu: document.querySelector("[data-menu]"),
  };

  refs.openMenulBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
     document.body.classList.toggle("overflow-hidden");
     refs.mobileMenu.classList.toggle("is-open");
  }
})();

// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");

//   menuBtnRef.addEventListener("click", () => {
//     // const expanded =
//     //   menuBtnRef.getAttribute("aria-expanded") === "true" || "false";
    
//     menuBtnRef.classList.toggle("is-open");
//     // menuBtnRef.setAttribute("aria-expanded", !expanded)

//     mobileMenuRef.classList.toggle("is-open");

//   })
// })();