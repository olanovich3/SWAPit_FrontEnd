import StarRating from './StarsRating';

const AverageRating = ({ ratings }) => {
  const sum = ratings.reduce((total, number) => total + number, 0);
  const average = sum / ratings.length;
  const rating = (average / 5) * 100;
  const ratingInFive = (rating * 5) / 100;
  const roundedAverage = Math.round(ratingInFive);
  return (
    <div>
      <StarRating rating={roundedAverage} />
    </div>
  );
};

export default AverageRating;
