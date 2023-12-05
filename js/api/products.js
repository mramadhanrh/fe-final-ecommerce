import apiRoutes from "../constants/apiRoutes.js";

export const loadProducts = async () => {
  const response = await fetch(apiRoutes.products, {
    method: "GET",
    headers: {
      // Ini yang akan menjadi authorization token ke backend ya
      "x-access-token": localStorage.getItem("accessToken"),
    },
  });
  const responseJson = await response.json();

  return responseJson;
};

export const loadProductById = async (id) => {
  const response = await fetch(apiRoutes.productsId(id), {
    method: "GET",
    headers: {
      // Ini yang akan menjadi authorization token ke backend ya
      "x-access-token": localStorage.getItem("accessToken"),
    },
  });
  const responseJson = await response.json();

  return responseJson;
};
