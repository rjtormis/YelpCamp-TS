import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BarChart, Eye, Flame, Leaf, Map, Telescope } from "lucide-react";
import React from "react";

function NewCampground() {
  return (
    <div className="w-full">
      <div className="px-4 mx-2">
        <div className="flex">
          <Flame size="20" className="my-auto " />
          <div className="ml-2">
            <p className="my-auto flex font-bold text-lg">Camp name</p>
            <p className="text-xs">asdads</p>
          </div>
        </div>

        <div className="grid grid-cols-3 my-3 gap-4">
          <div className="col-span-2">
            <div>
              <img src="" alt="Image" className="w-full h-[600px] rounded-t-xl" />
            </div>
            <div className="flex my-4 gap-4">
              <div className=" w-[400px] h-[250px] ">
                <img src="" alt="" className="rounded-bl-xl" />
              </div>
              <div className=" w-[400px] h-[250px]">
                <img src="" alt="" className="" />
              </div>
              <div className=" w-[400px] h-[250px]">
                <img src="" alt="" className="" />
              </div>
              <div className=" w-[400px] h-[250px]">
                <img src="" alt="" className="rounded-br-xl" />
              </div>
            </div>

            <div className="mt-8 flex hover:cursor-pointer hover:underline underline-offset-4">
              <Eye size={14} className="my-auto mr-2" />
              <p className="text-sm">View Location</p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-lg font-bold">Listed by</h1>
              <div className="flex my-4 justify-between">
                <div className="flex my-auto">
                  <Avatar className="my-auto">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="ml-2 flex">
                    <div>
                      <p className="text-sm">Owner1</p>
                      <p className="text-xs">Cebu City</p>
                    </div>
                  </div>
                </div>

                {/* <div className="my-auto flex  gap-2">
                  <InboxDialog title="Message" to="Owner1" message="Send a message to Owner1" />
                  <Button size="sm">
                    <Star size={18} />
                  </Button>
                </div> */}
              </div>

              <div className="my-4">
                <div className=" my-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis quis
                  laudantium quam amet corporis saepe! Obcaecati sequi laudantium sunt debitis
                  similique perspiciatis architecto, aliquid expedita cumque maxime et! Autem.
                </div>

                <div className="flex justify-between my-2">
                  <h2 className="text-sm flex">
                    <BarChart size={18} className="mr-2 my-auto" /> Status
                  </h2>
                  <p className="text-sm">Available</p>
                </div>

                <div className="flex justify-between my-2">
                  <h2 className="text-sm flex">
                    <Map size={18} className="mr-2 my-auto" /> Location
                  </h2>
                  <p className="text-sm">Mountain View, CA</p>
                </div>

                <div className="flex justify-between my-2">
                  <div>
                    <h2 className="text-sm flex">
                      <Leaf size={16} className="mr-2 my-auto" /> Amenities
                    </h2>
                  </div>
                  <p>View</p>
                </div>

                <div className="flex justify-between my-2">
                  <div>
                    <h2 className="text-sm flex">
                      <Telescope size={16} className="mr-2 my-auto" /> Visit count
                    </h2>
                  </div>
                  <p>1000</p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <h2 className="text-sm flex">
                      <Flame size={16} className="mr-2 my-auto" /> Favorite count
                    </h2>
                  </div>
                  <p>1000</p>
                </div>
              </div>
            </div>

            <div>
              <div className="w-full my-4 flex justify-center ">
                <Button className="w-[70%] my-1" size="lg">
                  List
                </Button>
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

export default NewCampground;
