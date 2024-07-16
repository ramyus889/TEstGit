"use client";

import { Button } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IPost } from "../post.types";

export default function MPage() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["add post"],
    mutationFn: async (newPost: Omit<IPost, "id">) =>
      axios.post("https://jsonplaceholder.typicode.com/posts", newPost),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  return (
    <div className=" flex flex-col gap-10">
      <Button
        onClick={() => {
          mutate({ title: "New title", body: "New body", userId: 1 });
        }}
        disabled={isPending}
      >
        {isPending ? "Loading..." : "Create"}
      </Button>
    </div>
  );
}
