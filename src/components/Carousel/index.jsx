export function Carousel({ albumId, urls }) {
  const carouselId = `carouselPhotos${albumId}`;
  const carouselTargetId = `#${carouselId}`;
  const length = urls.length;
  const size = Array(length).fill(0).map((el, i) => el + i);
  return (
    <div id={carouselId} className="carousel slide">
      <div className="carousel-indicators">
        {size.map((el, i) => {
          if (i === 0) {
            return (
              <button key={el} type="button" data-bs-target={carouselTargetId} data-bs-slide-to={el} aria-label={`Slide ${el+1}`} className="active" aria-current="true"></button>
            )
          } else {
            return (
              <button key={el} type="button" data-bs-target={carouselTargetId} data-bs-slide-to={el} aria-label={`Slide ${el+1}`}></button>
            )
          }
        })}
      </div>
      <div className="carousel-inner">
        {urls.map((el, i) => {
          let baseClass = 'carousel-item';
          if (i === 0) {
            baseClass = baseClass.concat(' active');
          }
          return (
            <div key={el.url} className={baseClass}>
              <img src={el.url} className="d-block w-100" alt={`img-${albumId}-${i}`}/>
              <div className="carousel-caption d-none d-md-block">
                <p>{el.title}</p>
              </div>
            </div>
          )
        })}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target={carouselTargetId} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={carouselTargetId} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
