import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjViMmNhNGNiNmQ1ZjVkMDUzMTgwMGQ4MWNlMTYxMiIsIm5iZiI6MTczNjA3MDM2OC4wMTQwMDAyLCJzdWIiOiI2NzdhNTRlMGE2ZGVmMDExMWE3NDk1MjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5Ib225k6NVNFpT2INw7HjazEaRYjYWlHSdVMpgb3tdA";

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
