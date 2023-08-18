import Post from '../models/Post';
import Card from '../models/Card';
import Photo from '../models/Photo';


export async function loadCards() {
  const url = 'https://jsonplaceholder.typicode.com';
  const postsResponse = fetch(url.concat('/posts'));
  const photosResponse = fetch(url.concat('/photos'));

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  const postsObj = postsJson.map((obj) => new Post(obj))
  const photosObj = photosJson.map((obj) => new Photo(obj))

  const cards = postsObj.map((obj, index) => new Card(obj, photosObj[index].url))

  return cards;
}
