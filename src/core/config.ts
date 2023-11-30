import axios from "axios";

export const setInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return { instance };
};

// export default instance;
