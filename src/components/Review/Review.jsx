import { getMovieReviews } from 'Services/movies-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

const Review = () => {
  const [review, setReview] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const reviewMovie = async () => {
      try {
        const response = await getMovieReviews(id);
        setReview(response.results);
        !response.results.length ? setIsError(true) : setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    reviewMovie();
  }, [id]);

  return (
    <div className="my-3">
      {isLoading && <ReactLoading type="spin" color="black" />}
      {review.length > 0 && (
        <ul>
          {review.map(({ author, id, content }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {isError && <p>We don`t have review for this movie</p>}
    </div>
  );
};

export default Review;
