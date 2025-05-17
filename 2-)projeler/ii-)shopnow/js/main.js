import products from "./products.js";
import { renderProducts, uiElement } from "./ui.js";

// Menu butonuna  tıklanınca çalışacak fonksiyon
uiElement.mobileMenuBtn.addEventListener("click", () => {
  uiElement.nav.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});
