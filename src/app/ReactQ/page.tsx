"use client";

import UserMutation from "./components/UserMutation";
import UserQuery from "./components/UserQuery";

export default function MPage() {
  return (
    <div className="ms-20 mt-20  max-w-[400px] ">
      <UserQuery />
      <UserMutation />
    </div>
  );
}
