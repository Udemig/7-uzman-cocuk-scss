// UI Element
const uiElement = {
  mobileMenuBtn: document.querySelector(".mobile-menu-btn"),
  nav: document.querySelector("nav"),
  productWrapper: document.querySelector(".product-wrapper"),
};

// UI Functions

const renderProducts = (products) => {
  console.log(products);

  // Dışarıdan verilen products dizisini dön ve bu dizinin her elemanı için bir html oluştur
  products.forEach((product) => {
    // Her ürün için bir div oluştur
    const productCard = document.createElement("div");
    // Oluşturulan ürün kartına product-card classı ekle
    productCard.classList.add("product-card");

    // Oluşturulan,class atanan elemanın html'ini belirle
    productCard.innerHTML = `            <img
              src="${product.image}"
              alt="product-card-image"
            />

            <div class="info">
              <h2>${product.name}</h2>
              <h4>${product.category}</h4>
              <p>₺${product.price}</p>
              <button class="btn">Sepete Ekle</button>
            </div>`;

    // Oluşturulan,classı eklenen ve html'i belirlenen elamanı arayüzdeki productWrapper içerisine ekle
    uiElement.productWrapper.appendChild(productCard);
  });
};

export { uiElement, renderProducts };
