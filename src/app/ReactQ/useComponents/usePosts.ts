import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { postService } from "../post.service";
import { IPost } from "../post.types";

const initialData: {
  data: IPost[];
} = {
  data: [
    {
      userId: 0,
      id: 0,
      title: "Initial title",
      body: "Initial body",
    },
  ],
};

export default function usePosts(isEnabled: boolean) {
  const { data, isError, isSuccess, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: postService.getPosts,
    select: (data) => data.data,
    enabled: isEnabled,
    initialData,
  });

  useEffect(() => {
    if (isSuccess) console.log("Data fetched successfully");
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) console.log("Data fetched successfully");
  }, [isError]);

  return { data, isLoading, isError, isSuccess };
}
