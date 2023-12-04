import { loadAuth } from "../api/auth.js";

const handleFormSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const { email, password } = Object.fromEntries(formData);

  await loadAuth(email, password);

  window.location.href = "/products";
};

const setRegisterFormSubmit = () => {
  const form = document.getElementById("login-form");
  form.addEventListener("submit", handleFormSubmit);
};

setRegisterFormSubmit();
