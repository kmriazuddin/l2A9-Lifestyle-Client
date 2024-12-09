"use client";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const AverageRating = ({
  rating,
  width,
}: {
  rating: number;
  width: number;
}) => {
  return <Rating style={{ maxWidth: width }} value={rating} readOnly />;
};

export default AverageRating;
