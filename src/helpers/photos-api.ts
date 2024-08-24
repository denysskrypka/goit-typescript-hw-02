import axios from "axios";

// Визначаємо тип для параметрів функції
type GetPhotosParams = {
  query: string;
  currentPage: number;
};

// Визначаємо тип для результату функції
interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
}

axios.defaults.baseURL = "https://api.unsplash.com";

export const getPhotos = async (
  query: string,
  currentPage: number
): Promise<Photo[]> => {
  const res = await axios.get("/search/photos", {
    params: {
      client_id: "HjCGXgY18QVarShgv2gPDZDfe387Ctdb9cYDEcjcXl4",
      page: currentPage,
      per_page: 10,
      query: query,
    },
  });
  return res.data.results;
};
