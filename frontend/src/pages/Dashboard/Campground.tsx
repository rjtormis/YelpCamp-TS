import { BarChart, Eye, Flame, Leaf, Map } from "lucide-react";

import image1 from "@/assets/landing-image-where-1.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function Campground() {
  return (
    <div className="w-full">
      <div className="px-4 mx-2">
        <div className="">
          <p className="my-auto flex font-bold">
            <Flame size="16" className="my-auto mr-2" />
            Camp name
          </p>
          <p className="text-xs"></p>
        </div>

        <div className="grid grid-cols-3 my-3 gap-4">
          <div className="col-span-2">
            <div>
              <img src={image1} alt="" className="w-full h-[480px] rounded-xl" />
            </div>
            <div className="flex my-4 justify-between">
              <img src={image1} alt="" className="w-[250px] h-[120px] rounded-xl" />
              <img src={image1} alt="" className="w-[250px] h-[120px] rounded-xl" />
              <img src={image1} alt="" className="w-[250px] h-[120px] rounded-xl" />
              <img src={image1} alt="" className="w-[250px] h-[120px] rounded-xl" />
            </div>

            <div className="flex hover:cursor-pointer hover:underline underline-offset-4">
              <Eye size={14} className="my-auto mr-2" />
              <p className="text-sm">View Location</p>
            </div>
          </div>
          <div>
            <h1>Listed by</h1>
            <div className="flex my-4">
              <div>
                <Avatar className="my-auto">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-2">
                <p className="text-sm">Owner1</p>
                <p className="text-xs">Cebu City</p>
              </div>
            </div>

            <div className="my-4">
              <div className="px-4 my-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis quis
                laudantium quam amet corporis saepe! Obcaecati sequi laudantium sunt debitis
                similique perspiciatis architecto, aliquid expedita cumque maxime et! Autem.
              </div>

              <div className="flex justify-between">
                <h2 className="text-sm flex">
                  <BarChart size={16} className="mr-2 my-auto" /> Status
                </h2>
                <p className="text-sm">Available</p>
              </div>

              <div className="flex justify-between">
                <h2 className="text-sm flex">
                  <Map size={16} className="mr-2 my-auto" /> Location
                </h2>
                <p className="text-sm">Mountain View, CA</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-sm flex">
                    <Leaf size={16} className="mr-2 my-auto" /> Amenities
                  </h2>
                </div>
                <ul>
                  <li>Hiking</li>
                  <li>Hiking</li>
                  <li>Hiking</li>
                  <li>Hiking</li>
                </ul>
              </div>

              <div className="w-full my-4">
                <Button className="w-full my-1" size="lg">
                  Book
                </Button>
                <Button className="w-full my-1" size="lg">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campground;
