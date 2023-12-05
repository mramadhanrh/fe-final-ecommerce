import { loadProductById } from "../api/products.js";

const setProductDetail = async () => {
  const query = window.location.search;
  const urlSearchParams = new URLSearchParams(query);

  const id = urlSearchParams.get("id");
  const response = await loadProductById(id);

  document.getElementById("product-title").innerText = response.data.name;
  document.getElementById("product-description").innerText =
    response.data.description;
  document.getElementById("product-price").innerText = response.data.price;
  document
    .getElementById("product-image")
    .setAttribute("src", response.data.image);
};

setProductDetail();
