import apiFetch from "./apiFetch";
// import { tokenKey } from "../config";

function sessionLogin(credentials) {
  return apiFetch("/login", { body: credentials });
}

export default sessionLogin;
