import apiRoutes from "../constants/apiRoutes.js";

export const loadProducts = async () => {
  const response = await fetch(apiRoutes.products, {
    method: "GET",
  });
  const responseJson = await response.json();

  return responseJson;
};
