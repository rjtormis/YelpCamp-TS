import { Skeleton } from "../ui/skeleton";

function CampgroundSkeleton() {
  return (
    <div className="w-full">
      <div className="px-4 mx-2">
        <div className="flex">
          <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />

          <div className="ml-2">
            <p className="my-auto flex font-bold text-lg">Camp name</p>
            <p className="text-xs">asdads</p>
          </div>
        </div>

        <div className="grid grid-cols-3 my-3 gap-4">
          <div className="col-span-2">
            <div>
              <Skeleton className="w-full h-[600px] bg-zinc-700 rounded-t-xl" />
            </div>
            <div className="flex my-4 gap-4">
              <div className=" w-[400px] h-[250px] ">
                <Skeleton className=" bg-zinc-700 rounded-bl-xl" />
              </div>
              <div className=" w-[400px] h-[250px]">
                <Skeleton className=" bg-zinc-700" />
              </div>
              <div className=" w-[400px] h-[250px]">
                <Skeleton className=" bg-zinc-700" />
              </div>
              <div className=" w-[400px] h-[250px]">
                <Skeleton className=" bg-zinc-700 rounded-bl-xl" />
              </div>
            </div>

            <div className="mt-8 flex hover:cursor-pointer hover:underline underline-offset-4">
              <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
              <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-lg font-bold">Listed by</h1>
              <div className="flex my-4 justify-between">
                <div className="flex my-auto">
                  {/* <Avatar className="my-auto">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar> */}

                  <div className="ml-2 flex">
                    <div>
                      <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
                      <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
                    </div>
                  </div>
                </div>

                <div className="my-auto flex  gap-2">
                  <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
                </div>
              </div>

              <div className="my-4">
                <div className=" my-4 text-sm">
                  <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
                </div>

                <div className="flex justify-between my-2">
                  <h2 className="text-sm flex">
                    <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
                  </h2>
                  <p className="text-sm">Available</p>
                </div>

                <div className="flex justify-between my-2">
                  <h2 className="text-sm flex">
                    <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
                  </h2>
                  <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
                </div>

                <div className="flex justify-between my-2">
                  <div>
                    <h2 className="text-sm flex">
                      <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
                    </h2>
                  </div>
                  <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
                </div>

                <div className="flex justify-between my-2">
                  <div>
                    <h2 className="text-sm flex">
                      <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
                    </h2>
                  </div>
                  <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
                </div>

                <div className="flex justify-between">
                  <div>
                    <h2 className="text-sm flex">
                      <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
                    </h2>
                  </div>
                  <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
                </div>
              </div>

              <div>
                <h2 className="my-2 font-bold text-lg">Reviews</h2>

                <ul>
                  <li>
                    <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="w-full my-4 flex justify-center ">
                <Skeleton className="w-[20px] h-[200px] bg-zinc-700 rounded-t-lg" />
              </div>

              {/* <div className="text-center text-sm">
            <p>Already visited this campsite? Leave a review</p>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampgroundSkeleton;
