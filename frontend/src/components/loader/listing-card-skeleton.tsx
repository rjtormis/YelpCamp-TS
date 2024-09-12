import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Skeleton } from "../ui/skeleton";

function ListingCardSkeleton() {
  return (
    <Card className="border-none ">
      <CardHeader className="p-0">
        <CardTitle className="text-2xl text-center">
          <div className="relative">
            <div className="">
              <Skeleton className="w-full h-[200px] bg-zinc-700 rounded-t-lg" />
            </div>
          </div>
        </CardTitle>
        <CardDescription className="flex justify-between px-4">
          <Skeleton className="w-[50%] h-[16px]  bg-zinc-700 my-1" />
          <Skeleton className="w-[15%] h-[16px]  bg-zinc-700 my-1" />
        </CardDescription>
      </CardHeader>
      <CardContent className=" my-4 px-4 py-0">
        <div>
          <div className="flex my-2">
            <Skeleton className="w-[5%]  bg-zinc-700  mr-2" />
            <Skeleton className="w-[35%] h-[18px]  bg-zinc-700" />
          </div>
          <div className="flex my-2">
            <Skeleton className="w-[5%]  bg-zinc-700  mr-2" />
            <Skeleton className="w-[35%] h-[18px]  bg-zinc-700" />
          </div>

          <div className="flex">
            <Skeleton className="w-[5%]  bg-zinc-700  mr-2" />
            <Skeleton className="w-[35%] h-[18px]  bg-zinc-700" />
          </div>
        </div>
        <div className="my-4 flex justify-between">
          <Skeleton className="w-[35%] h-[16px]  bg-zinc-700" />
          <div className="flex gap-2">
            <Skeleton className="w-[16px] h-[16px]  bg-zinc-700 " />
            <Skeleton className="w-[16px] h-[16px]  bg-zinc-700 " />
            <Skeleton className="w-[16px] h-[16px]  bg-zinc-700 " />
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 py-2 justify-between mt-4">
        <div className="flex">
          <div>
            <Skeleton className="w-[40px] h-[40px] rounded-full  bg-zinc-700 " />
          </div>
          <div className="ml-2 m-auto">
            <Skeleton className="w-[100px] h-[12px] my-1  bg-zinc-700 " />
            <Skeleton className="w-[40px] h-[12px]  bg-zinc-700 " />
          </div>
        </div>
        <div>
          <Skeleton className="w-[16px] h-[20px]  bg-zinc-700 " />
        </div>
      </CardFooter>
    </Card>
  );
}

export default ListingCardSkeleton;
