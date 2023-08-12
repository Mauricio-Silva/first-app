class Album {
  userId
  id
  title

  constructor(obj) {
    this.userId = obj.userId;
    this.id = obj.id;
    this.title = obj.title;
  }
}

export default Album;
