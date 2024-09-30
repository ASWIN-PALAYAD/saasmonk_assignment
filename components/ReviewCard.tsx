import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

interface ReviewCardProps {
  review: ReviewType;
}

const ReviewCard = ( {review} : ReviewCardProps) => {
  return (
    <div className="flex flex-col gap-5 p-3 border-2 border-slate-300 ">
      <div className="flex justify-between">
        <p>{review.review}</p>
        <p className="text-blue-600">{review.rating} / 10</p>
      </div>
      <div className="flex justify-between">
        <p className="italic">By {review.reviewer}</p>
        <div className="flex gap-3">
          <FaRegEdit
            size={20}
            className="cursor-pointer opacity-70 hover:scale-110"
          />
          <AiFillDelete
            size={20}
            className="cursor-pointer opacity-70 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
