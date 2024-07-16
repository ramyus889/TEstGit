"use client";

import { Button } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import usePost from "../useComponents/usePostById";
import usePosts from "../useComponents/usePosts";

const isAuth = true;
export default function MPage() {
  const { data, isLoading } = usePosts(isAuth);
  const { post, isLoading: isLoadingPost } = usePost(2);

  const queryClient = useQueryClient();
  return (
    <div className=" flex flex-col gap-10">
      <Button
        onClick={() => queryClient.invalidateQueries({ queryKey: ["posts"] })}
      >
        Invalidate posts
      </Button>
      <div className="flex flex-col gap-2">
        {isLoading
          ? "Loading..."
          : data?.length
            ? data
                .slice(0, 5)
                .map((todo: any) => <div key={todo.id}>{todo.title}</div>)
            : "No data"}
      </div>
      <div className="flex flex-col gap-2">
        {isLoadingPost ? "Loading..." : <div key={post?.id}>{post?.title}</div>}
      </div>
      <div className="flex flex-col gap-2"></div>
    </div>
  );
}
