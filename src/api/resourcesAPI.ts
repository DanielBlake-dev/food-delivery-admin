import axios from "axios";

export enum DeliveryStatus {
  Delivering = "Delivering",
  Completed = "Completed",
  Failure = "Failure",
  Waiting = "Waiting",
}

export type Indredient = {
  _id: string;
  name: string;
};

export type Dish = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  ingredients: Indredient[];
};

export type CreateDish = {
  name: string;
  price: number;
  ingredients: string[];
};

export type CreateFood = {
  name: string;
};

export type ChangeOrderStatus = {
  id: string;
  status: string;
};

const BASE_API_URL = "https://dev-food--delivery.herokuapp.com/";

const APIClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const resourcesAPI = {
  getDishes: async () => {
    const { data } = await APIClient.get<Dish[]>("/dishes");
    return data;
  },
  getFood: async () => {
    const { data } = await APIClient.get<Indredient[]>("/food");
    return data;
  },
  createDish: async (payload: CreateDish) => {
    const { data } = await APIClient.post("/dishes/create", payload);
    return data;
  },
  createFood: async (payload: CreateFood) => {
    const { data } = await APIClient.post("/food/add", payload);
    return data;
  },
  getOrders: async () => {
    const { data } = await APIClient.get("/orders/");
    return { orders: data.orders, statuses: data.statuses };
  },
  getOrdersByStatus: async (status: DeliveryStatus) => {
    const { data } = await APIClient.post("/orders/search/", {
      filters: {
        status,
      },
    });

    return data;
  },
  setOrderStatus: async ({ id, status }: ChangeOrderStatus) => {
    const { data } = await APIClient.put(
      `/orders/status/${id}?status=${status}`
    );

    return data;
  },
  upload: async (file: FormData) => {
    const { data } = await APIClient.post("/uploads", { file });
    return data;
  },
};
