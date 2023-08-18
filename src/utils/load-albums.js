import Photo from '../models/Photo';
import Album from '../models/Album';


export async function loadAlbums() {
  const url = 'https://jsonplaceholder.typicode.com';
  const albumsRequest = fetch(url.concat('/albums'));
  const photosRequest = fetch(url.concat('/photos'));

  const [albumsResponse, photosResponse] = await Promise.all([albumsRequest, photosRequest]);

  const albumsJson = await albumsResponse.json();
  const photoJson = await photosResponse.json();

  const albumsObj = albumsJson.map((obj) => new Album(obj));
  const photosObj = photoJson.map((obj) => new Photo(obj));

  const photosGroup = photosObj.reduce((result, photo) => groupPhotos(result, photo), {});
  const albumsGroup = albumsObj.map((album) => {return {id: album.id, title: album.title, urls: photosGroup[album.id]}});

  return albumsGroup;
}


function groupPhotos(result, photo) {
  if (!result[photo.albumId]) {
    result[photo.albumId] = [{title: photo.title, url: photo.url}]
  } 
  else if (result[photo.albumId].length < 7) {
    result[photo.albumId].push({title: photo.title, url: photo.url})
  }
  return result
}
