import axios from "axios";

const locationApi = axios.create({
  baseURL: "https://nominatim.openstreetmap.org",
  headers: {
    "Accept-Language": "fr",
  },
});

export const searchLocation = async (query) => {
  if (!query || query.length < 3) return [];

  const { data } = await locationApi.get("/search", {
    params: {
      q: query,
      format: "jsonv2",
      limit: 5,
    },
  });

  return data;
};