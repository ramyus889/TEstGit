import { Skeleton } from "@nextui-org/react";
import { Suspense } from "react";

import ProdCom from "./(useComponents)/(components)/components/ProdCom";
import ResizeCom from "./(useComponents)/(components)/components/ResizeCom";

export default function About() {
  return (
    <div className="ms-20 mt-20 flex max-w-[300px] flex-col gap-5">
      <div className="">Product detail page</div>

      <Suspense fallback={<Skeleton className="h-12 w-full rounded-xl" />}>
        <ProdCom />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-12 w-full rounded-xl" />}>
        <ResizeCom />
      </Suspense>
    </div>
  );
}
