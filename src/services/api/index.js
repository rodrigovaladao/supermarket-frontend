import axios from "axios";
import { SAVE_USERNAME_PATH } from "../constants";

export const api = axios.create({
  baseURL: "https://supermarketlist-api.herokuapp.com/",
  headers: {
    userName: localStorage.getItem(SAVE_USERNAME_PATH) || "",
  },
});
