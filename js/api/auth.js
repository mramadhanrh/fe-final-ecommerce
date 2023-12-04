import apiRoutes from "../constants/apiRoutes.js";

export const loadAuth = async (email, password) => {
  const response = await fetch(apiRoutes.auth, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  const responseJson = await response.json();
  console.log(responseJson);
};
