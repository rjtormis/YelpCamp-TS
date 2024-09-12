import React from "react";
import { Skeleton } from "../ui/skeleton";

function InboxItemSkeleton() {
  return (
    <div className={`border border-solid p-3 rounded-xl my-3`}>
      <section className="flex justify-between">
        <div className="flex">
          <Skeleton className="w-[16px] h-[16px]  bg-zinc-700 my-1 mr-2" />
          <Skeleton className="w-[100px] h-[16px]  bg-zinc-700 my-1" />
        </div>
        <Skeleton className="w-[16px] h-[16px]  bg-zinc-700 my-1" />
      </section>
      <Skeleton className="w-[100px] h-[16px]  bg-zinc-700 my-1" />
      <Skeleton className="w-[500px] h-[16px]  bg-zinc-700 my-1" />
    </div>
  );
}

export default InboxItemSkeleton;
