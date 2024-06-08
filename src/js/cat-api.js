import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common['x-api-key'] =
  'live_ip9vENg772mOuhA0bbbqxSNGN3GBlOcVWbB4byHWlD8SQc140oCDL6lp4klQMs1d';

const fetchBreeds = () => axios.get(`${API_URL}/breeds`).then(res => res.data);

const fetchCatByBreed = breedId =>
  axios
    .get(`${API_URL}/images/search?breed_ids=${breedId}`)
    .then(res => res.data);

export { fetchBreeds, fetchCatByBreed };
