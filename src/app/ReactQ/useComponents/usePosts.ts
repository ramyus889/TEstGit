import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { IPost } from "../post.types";

const getData = async () => {
  return axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
};

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
    queryFn: getData,
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
