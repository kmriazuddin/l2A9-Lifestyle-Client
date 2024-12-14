/* eslint-disable @typescript-eslint/no-explicit-any */
import { newFollow, removeFollow } from "@/services/followerService";
import { useMutation } from "@tanstack/react-query";

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
