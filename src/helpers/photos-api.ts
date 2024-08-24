import axios from "axios";

type GetPhotosParams = {
  query: string;
  currentPage: number;
};

export const getPhotos = async (
  query: string,
  currentPage: number
): Promise<any[]> => {
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
