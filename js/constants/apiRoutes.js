const baseApiUrl =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "PATH_URL_API_RAILWAY";

const apiRoutes = {
  auth: `${baseApiUrl}/auth`,
  products: `${baseApiUrl}/products`,
};

export default apiRoutes;
