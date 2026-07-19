import axios from "axios";

const API = axios.create({
  baseURL: "https://campaignpilot-ai.onrender.com/api",
});

export default API;