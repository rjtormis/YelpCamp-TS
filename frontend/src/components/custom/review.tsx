import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, StarHalf } from "lucide-react";

interface ReviewItemProps {
  rating: number;
  image: string | null;
  name: string;
  review: string;
}
function ReviewItem({ rating, image, name, review }: ReviewItemProps) {
  const fallback = name.split(" ")[0].charAt(0) + name.split(" ")[1].charAt(0) || "";

  const filledStar = Math.floor(rating);
  const unfilledStar = 5 - filledStar;
  return (
    <div className="my-2">
      <div className="flex my-2">
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
      </div>
      <p className="my-2">{review}</p>

      <div className="flex justify-end">
        <Avatar className="my-auto w-[24px] h-[24px] mr-2">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>{" "}
        {name}
      </div>
    </div>
  );
}

export default ReviewItem;
