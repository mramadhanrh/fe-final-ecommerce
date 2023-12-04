import { loadProducts } from "../api/products.js";

const redirectToDetail = (id) => {
  console.log({ id });
};

const setProductsData = async () => {
  const products = await loadProducts();
  console.log({ products });
  const containerUI = document.getElementById("product-container");

  products.data.forEach((item, idx) => {
    containerUI.innerHTML += `
      <div class="product-card" onclick={redirectToDetail(${idx})}>
        <img
          class="product-image"
          src="${item.image || "https://via.placeholder.com/300"}"
          alt="${item.name}-image"
        />
        <div class="product-info">
          <div class="product-title">${item.name}</div>
          <div class="product-price">$${item.price.toLocaleString()}</div>
        </div>
      </div>
    `;
  });
};

setProductsData();
