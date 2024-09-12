import { Star, StarHalf } from "lucide-react";

interface ReviewItemProfileInterface {
  name: string;
  date: string;
  rating: number;
  review: string;
}

function ReviewItemProfile({ name, date, rating, review }: ReviewItemProfileInterface) {
  const filledStar = Math.floor(rating);
  const unfilledStar = 5 - filledStar;

  return (
    <div className="">
      <div className="flex justify-between">
        <div>
          <p className="text-sm">{name}</p>
          <p className="text-xs">{date}</p>
        </div>
        <span className="flex">
          {Array(filledStar)
            .fill(0)
            .map((_, index) => {
              return <Star key={index} size={14} />;
            })}

          {Array(unfilledStar)
            .fill(0)
            .map((_, index) => {
              return <StarHalf key={index} size={14} />;
            })}
        </span>
      </div>
      <div className="my-2">
        <p className="text-sm">{review}</p>
      </div>
    </div>
  );
}

export default ReviewItemProfile;
