"use client";

import NewUserQuery from "./components/NewUserQuery";

export default function MPage() {
  return (
    <div className="mx-20 my-20 flex flex-col gap-5 ">
      {/* <UserQuery />
      <UserMutation /> */}
      <NewUserQuery />
    </div>
  );
}
