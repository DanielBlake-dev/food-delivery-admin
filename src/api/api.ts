import axios from "axios";

type LoginPayload = {
  username: string;
  password: string;
};

type RegistrationPayload = {
  username: string;
  firstName: string;
  lastName: string;
  role: string;
  password: string;
};

export type User = {
  _id?: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: "Admin" | "Courier";
};

const BASE_API_URL = "https://dev-food--delivery.herokuapp.com/";

const APIClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const adminAPI = {
  login: async (payload: LoginPayload) => {
    // const { data } = await APIClient.post("/login", payload);
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (user.username !== payload.username) {
      Promise.reject();
    }

    return user;
  },
  logout: async () => {
    // const { data } = await APIClient.post("/logout");
    localStorage.removeItem("user");

    // return data;
  },
  registration: async (payload: RegistrationPayload) => {
    // const { data } = await APIClient.post("/registration", payload);
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user.username === payload.username) {
      return Promise.reject();
    }

    localStorage.setItem("user", JSON.stringify(payload));
    // return data;
  },
  getMe: async () => {
    // const { data } = await APIClient.post<User>("/me");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    return user;
  },
};
