import axios from "axios";

const obj = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default obj;
