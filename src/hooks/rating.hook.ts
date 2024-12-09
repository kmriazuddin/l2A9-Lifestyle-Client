/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { IApiResponse } from "../interface/apiResponse.interface";
import { IReview } from "../interface/review.interface";
import { queryClient } from "../providers/Providers";
import {
  addReview,
  getReviewByShop,
  replyReview,
} from "../service/ratingService";

export const useAddRating = () => {
  return useMutation<any, Error, FieldValues, unknown>({
    mutationFn: async (data: any) => await addReview(data),
  });
};
export const useReplyRating = () => {
  return useMutation<any, Error, { id: string; vendorReply: string }, unknown>({
    mutationFn: async (data) => replyReview(data), // Aligned the data type
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-rating-by-shop"] });
    },
  });
};

export const useGetReviewByShop = (page: number) => {
  return useQuery<IApiResponse<IReview[]>>({
    queryKey: ["get-rating-by-shop", page],
    queryFn: async () => await getReviewByShop(page),
  });
};
