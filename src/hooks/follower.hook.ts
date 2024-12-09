/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { newFollow, removeFollow } from "../service/followerService";

export const useFollowShop = () => {
  return useMutation<any, Error, string, unknown>({
    mutationFn: async (id: string) => await newFollow(id),
  });
};

export const useUnfollowShop = () => {
  return useMutation<any, Error, string, unknown>({
    mutationFn: async (id: string) => await removeFollow(id),
  });
};
