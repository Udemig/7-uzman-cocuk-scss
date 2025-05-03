import { uiElement } from "./ui.js";

// Menu butonuna  tıklanınca çalışacak fonksiyon
uiElement.mobileMenuBtn.addEventListener("click", () => {
  uiElement.nav.classList.toggle("active");
});
