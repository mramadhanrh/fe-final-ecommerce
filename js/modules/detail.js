import apiRoutes from "../constants/apiRoutes";

const loadProductDetail = async () => {
  const query = window.location.search;
  const urlSearchParams = new URLSearchParams(query);

  const id = urlSearchParams.get("id");

  console.log({ id });

  const rawResponse = await fetch(apiRoutes.productsId(id));
  const response = await rawResponse.json();

  document.getElementById("product-title").innerText = response.data.name;
  document
    .getElementById("product-image")
    .setAttribute("src", response.data.image);
};

loadProductDetail();
