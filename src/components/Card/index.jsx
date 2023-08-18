import { Image } from "../Image";

export function Card({ card }) {
  const { cover, title, body } = card;
  return (
    <div className="post">
      <Image src={cover}/>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
