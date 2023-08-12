class Post {
  userId
  id
  title
  body

  constructor(obj) {
    this.userId = obj.userId;
    this.id = obj.id;
    this.title = obj.title;
    this.body = obj.body;
  }
}

export default Post;
