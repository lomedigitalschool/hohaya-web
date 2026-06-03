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
      format: "geocodejson",
      addressdetails: 1,
      limit: 10,
    },
  });

  const locations = data.features.map((feature) => {
    const geo = feature.properties.geocoding;

    return {
      city: geo.city || geo.town || geo.village || geo.name,
      country: geo.country,
    };
  }).filter(
    (item) =>
      item.city &&
      item.city.toLowerCase().startsWith(query.toLowerCase())
  );

  return locations.filter(
    (location, index, self) =>
      index ===
      self.findIndex(
        (item) =>
          item.city === location.city &&
          item.country === location.country
      )
  );

  return data;
};