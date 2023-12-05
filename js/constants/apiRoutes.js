const baseApiUrl =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://be-final-ecommerce-production.up.railway.app";

const apiRoutes = {
  auth: `${baseApiUrl}/auth/login`,
  products: `${baseApiUrl}/products`,
  productsId: (id) => `${baseApiUrl}/products/${id}`,
};

export default apiRoutes;
