import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2EzYjY0MjMxNTA4MWJiYzQ2M2M5ZTM3MDFjZjBjMSIsInN1YiI6IjY1MGQ1NDhiNGRhM2Q0MDBhZGM5YmRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nU62_50m_doWHmLTl1C_4wDy4lksSMB6ATAqsD8akUI";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
