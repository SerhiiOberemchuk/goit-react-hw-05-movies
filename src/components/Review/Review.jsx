import { getMovieReviews } from 'components/Services/movies-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const [review, setReview] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const reviewMovie = async () => {
      try {
        const response = await getMovieReviews(id);
        setReview(response.results);
      } catch (error) {
        alert(error);
      }
    };
    reviewMovie();
  }, [id]);

  return (
    <div className="my-3">
      {review.length > 0 ? (
        <ul>
          {review.map(({ author, id, content }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have review for this movie</p>
      )}
    </div>
  );
};

export default Review;
