import landing1 from "@/assets/landing1.jpg";
import landing2 from "@/assets/landing2.jpg";
import where1 from "@/assets/landing-image-where-1.jpg";
import Header from "@/components/header";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useRef, useState } from "react";

import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  // DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarDays, Map, Users } from "lucide-react";

function Landing() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const triggerDialogRef = useRef<HTMLButtonElement>(null);

  const handleInputClick = () => {
    if (triggerDialogRef.current) {
      triggerDialogRef.current.click();
    }
  };

  return (
    <div className=" h-screen flex flex-col m-4 ">
      <Header />
      <div className=" flex-auto">
        <div className="my-4">
          <div className="flex justify-center">
            <img src={landing1} alt="" className="w-[420px] h-[320px]  z-10 rounded-xl" />
            {/* <div className=" bg-orange-500 w-[100%] absolute bottom-0 h-[40%] ml-8 "></div> */}
          </div>

          <div className="my-10">
            <p className=" text-center text-lg">Get your experience</p>
            <p className=" text-2xl text-center ">Feel the heart of Philippines Ecotourism</p>

            <p className=" my-4 text-center">
              Rediscover your soul and conscience as you explore the breathtaking beauty of life at
              our campsite. Immerse yourself in nature&apos;s wonders, and let us be your guide to
              an unforgettable experience. We are here to serve you and ensure that every moment is
              filled with happiness and satisfaction. Your joy is our mission, and your serenity is
              our promise. Join us and embrace the adventure that awaits.
            </p>
          </div>

          <div className="flex flex-col justify-center p-4 border border-solid border-red-500 rounded-xl">
            <div className="flex flex-col">
              <div className="flex">
                <Map className="my-auto mr-1" size={16} />
                <p className="text-sm mb-1">WHERE</p>
              </div>
              <Input placeholder="Location" />
              {/* <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
            </div>

            <div className="flex flex-col my-2">
              <div className="flex">
                <CalendarDays className="my-auto mr-1" size={16} />
                <p className="text-sm mb-1">DATES</p>
              </div>
              <div className="flex">
                <Input onClick={handleInputClick} />
                <Dialog>
                  <DialogTrigger ref={triggerDialogRef} hidden>
                    <CalendarDays size={16} />
                  </DialogTrigger>
                  <DialogContent>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border shadow"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className="flex">
                <Users className="my-auto mr-1" size={16} />
                <p className="text-sm mb-1">GUESS</p>
              </div>{" "}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup className="">
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <Button className="">SEARCH</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <p className="text-xl text-center">
          For over 20 Years we have been helping people Find the best place for healing
        </p>
        <div className="my-8">
          <div className="text-center my-4">
            <p className="text-2xl">1M++</p>
            <p>Helping People Find the best place for healing</p>
          </div>
          <div className="text-center my-4">
            <p className="text-2xl">20 Years</p>
            <p>Years of experience on camping rent</p>
          </div>
          <div className="text-center my-4">
            <p className="text-2xl">100++</p>
            <p>Number of best place for your healing</p>
          </div>
        </div>
      </div>

      <div>
        <img src={landing2} alt="" className="rounded-xl" />

        <div className="border p-4 my-4">
          <h1 className="text-2xl text-center">Who are we</h1>
          <div>
            <p className="text-sm my-4 text-center">
              YelpCampPH: Your Ultimate Guide to Campsites in the Philippines
            </p>
            <p className="my-4 text-sm text-center">
              Welcome to YelpCampPH, your one-stop destination for discovering the best camping
              spots across the beautiful archipelago of the Philippines. Whether you are a seasoned
              camper or a novice explorer, our platform is designed to provide you with all the
              information you need to make your camping experience unforgettable.
            </p>
            <p className="my-4 text-sm text-center">
              Our Mission At YelpCampPH, we aim to connect nature enthusiasts with the most amazing
              campsites the Philippines has to offer. We promote outdoor activities, environmental
              conservation, and a deeper appreciation of our islands' natural beauty.
            </p>
            <p className="my-4 text-sm text-center">
              Our Values We believe in fostering a community of outdoor enthusiasts who share their
              experiences and insights, making camping accessible and enjoyable for everyone. We are
              committed to promoting sustainable camping practices that preserve our campsites for
              future generations, and we encourage everyone to embrace the spirit of adventure.
            </p>
            <p className="my-4 text-sm text-center">
              Join Us Embark on your next adventure with YelpCampPH. Discover new places, meet
              fellow campers, and create unforgettable memories. Explore. Discover. Camp with
              YelpCampPH.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="my-4 text-2xl text-center">WHERE TO GO NOW</h1>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative ">
            <div className="relative">
              <img src={where1} alt="" className=" " />
            </div>
            <div className="h-[30px]"></div>
            <div className="  absolute bottom-0 mt-4 py-4 px-14 text-center  my-auto w-full ">
              <div className="bg-orange-500 h-[50px]">
                <p className="pt-1">Hidden Gems</p>
                <p className="text-xs">Site on the rise</p>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="relative">
              <img src={where1} alt="" className=" " />
            </div>
            <div className="h-[30px]"></div>
            <div className="  absolute bottom-0 mt-4 py-4 px-14 text-center  my-auto w-full ">
              <div className="bg-orange-500 h-[50px]">
                <p className="pt-1">Hidden Gems</p>
                <p className="text-xs">Site on the rise</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <img src={where1} alt="" className=" " />
            </div>
            <div className="h-[30px]"></div>
            <div className="  absolute bottom-0 mt-4 py-4 px-14 text-center  my-auto w-full ">
              <div className="bg-orange-500 h-[50px]">
                <p className="pt-1">Hidden Gems</p>
                <p className="text-xs">Site on the rise</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-xl my-4">Discover Top Sports Near You</h1>

        <div>
          <div>
            <img src={where1} alt="" />
            <h2 className="my-4">with campfire</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia hic,
              perspiciatis, eveniet vel dolores incidunt quasi pariatur ut deleniti omnis fugit
              nulla corporis dolor error porro. Reprehenderit, fuga numquam.
            </p>
          </div>

          <div className="">
            <div>
              <img src={where1} alt="" />
              <div>
                <h2 className="my-4">with campfire</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia hic,
                  perspiciatis, eveniet vel dolores incidunt quasi pariatur ut deleniti omnis fugit
                  nulla corporis dolor error porro. Reprehenderit, fuga numquam.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 my-4">
              <div>
                <img src={where1} alt="" />
                <div>
                  <h2 className="my-4">with campfire</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia hic,
                    perspiciatis, eveniet vel dolores incidunt quasi pariatur ut deleniti omnis
                    fugit nulla corporis dolor error porro. Reprehenderit, fuga numquam.
                  </p>
                </div>
              </div>{" "}
              <div>
                <img src={where1} alt="" />
                <div>
                  <h2 className="my-4">with campfire</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia hic,
                    perspiciatis, eveniet vel dolores incidunt quasi pariatur ut deleniti omnis
                    fugit nulla corporis dolor error porro. Reprehenderit, fuga numquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col">
            <h1 className="text-xl my-4">Inspired for Healing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis ducimus
              eveniet ad quos magni velit eius quaerat, architecto reprehenderit dignissimos
              mollitia dicta ratione repellat itaque nihil veritatis praesentium cum!
            </p>

            <Button>View All</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
