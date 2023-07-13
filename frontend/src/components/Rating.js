export default function Rating(props) {
  const { rating, numReviews } = props;

  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? "icon-star"
              : rating >= 0.5
              ? "icon-star-half-empty"
              : "far fa-star"
          }
        />
      </span>

      <span>
        <i
          className={
            rating >= 2
              ? "icon-star"
              : rating >= 1.5
              ? "icon-star-half-empty"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? "icon-star"
              : rating >= 2.5
              ? "icon-star-half-empty"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? "icon-star"
              : rating >= 3.5
              ? "icon-star-half-empty"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? "icon-star"
              : rating >= 4.5
              ? "icon-star-half-empty"
              : "far fa-star"
          }
        />
      </span>

      <span> {numReviews} reviews</span>
    </div>
  );
}
