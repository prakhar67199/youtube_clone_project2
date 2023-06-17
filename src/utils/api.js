import axios from "axios";


const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: {hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key':'777a3e588dmshfa41f4b838f734ep1d4d2djsn555472b71c26',  
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  
// process.env.REACT_APP_YOUTUBE_API_KEY,
 export const fetchDataFromApi = async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }
  