import { Carousel } from "../Carousel";


export function Album({ album }) {
  const { id, urls, title } = album;
  return (
    <div className="album">
      <Carousel albumId={id} urls={urls}/>
      <h4>{title}</h4>
    </div>
  );
}
