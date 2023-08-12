class Photo {
  albumId
  id
  title
  url
  thumbnailUrl

  constructor(obj) {
    this.albumId = obj.albumId;
    this.id = obj.id;
    this.title = obj.title;
    this.url = obj.url;
    this.thumbnailUrl = obj.thumbnailUrl;
  }
}

export default Photo;
