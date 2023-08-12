class Card {
  userId
  id
  title
  body
  cover

  constructor(obj, cover) {
    this.userId = obj.userId;
    this.id = obj.id;
    this.title = obj.title;
    this.body = obj.body;
    this.cover = cover;
  }
}

export default Card;
