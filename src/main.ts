// import { KEY } from "./secret"

const KEY = import.meta.env.VITE_API_KEY

async function getCats() {

  const BASE_URL = "https://api.thecatapi.com";
  const ENDPOINT = "v1/images/search";
  const QUERYSTR = `limit=2&api_key=${KEY}`;

  const url = `${BASE_URL}/${ENDPOINT}?${QUERYSTR}`

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch(error) {
    return error;
  }
}

async function showCats() {

  const cats = await getCats();

  console.log(KEY);
  console.log(cats);

  for (let cat of cats) {
    const img = document.createElement('img');
    img.src = cat.url;
    document.body.appendChild(img);
  }

}

// getCats();
showCats();