import landing1 from "@/assets/landing1.jpg";
import landing2 from "@/assets/landing2.jpg";
import where1 from "@/assets/landing-image-where-1.jpg";
import where2 from "@/assets/landing-image-where-2.jpg";
import where3 from "@/assets/landing-image-where-3.jpg";
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
import { useState } from "react";

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

function Landing() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className=" h-screen flex flex-col m-4 ">
      <Header />
      <div className=" flex-auto mt-4">
        <div className="my-8">
          <div className="flex justify-center">
            <img src={landing1} alt="" className="w-[420px] h-[320px] rounded-xl" />
          </div>

          <div className=" my-4">
            <p className="text-xl">Get your experience</p>
            <p className=" text-3xl">Feel the heart of Philippines Ecotourism</p>

            <p className=" my-4">
              Rediscover your soul and conscience as you explore the breathtaking beauty of life at
              our campsite. Immerse yourself in nature&apos;s wonders, and let us be your guide to
              an unforgettable experience. We are here to serve you and ensure that every moment is
              filled with happiness and satisfaction. Your joy is our mission, and your serenity is
              our promise. Join us and embrace the adventure that awaits.
            </p>
          </div>

          <div className="flex">
            <div>
              <p>WHERE TO?</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
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

            <div>
              <p>DATES</p>
              <Dialog>
                <DialogTrigger>
                  <p>DAte here</p>
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

            <div>
              <p>GUESS</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
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

      <div>
        <p>For over 20 Years we have been helping people Find the best place for healing</p>
        <div>
          <div>
            <p>1M++</p>
            <p>Helping People Find the best place for healing</p>
          </div>
          <div>
            <p>20 Years</p>
            <p>Years of experience on camping rent</p>
          </div>
          <div>
            <p>100++</p>
            <p>Number of best place for your healing</p>
          </div>
        </div>
      </div>

      <div>
        <img src={landing2} alt="" />

        <div>
          <h1>Who are we</h1>
          <p>
            Who Are We YelpCampPH: Your Ultimate Guide to Campsites in the Philippines Welcome to
            YelpCampPH, your one-stop destination for discovering the best camping spots across the
            beautiful archipelago of the Philippines. Whether you are a seasoned camper or a novice
            explorer, our platform is designed to provide you with all the information you need to
            make your camping experience unforgettable. Our Mission At YelpCampPH, we aim to connect
            nature enthusiasts with the most amazing campsites the Philippines has to offer. We
            promote outdoor activities, environmental conservation, and a deeper appreciation of our
            islands' natural beauty. Our Values We believe in fostering a community of outdoor
            enthusiasts who share their experiences and insights, making camping accessible and
            enjoyable for everyone. We are committed to promoting sustainable camping practices that
            preserve our campsites for future generations, and we encourage everyone to embrace the
            spirit of adventure. Join Us Embark on your next adventure with YelpCampPH. Discover new
            places, meet fellow campers, and create unforgettable memories. Explore. Discover. Camp
            with YelpCampPH.
          </p>
        </div>
      </div>

      <div>
        <h1>Where to go now</h1>

        <div>
          <div>
            <img src={where1} alt="" />
            <p>Hidden Gems</p>
          </div>
          <div>
            <img src={where2} alt="" />
            <p>Hidden Gems</p>
          </div>
          <div>
            <img src={where3} alt="" />
            <p>Hidden Gems</p>
          </div>
        </div>
      </div>

      <div>
        <h1>Discover Top Sports Near You</h1>

        <div>
          <div>
            <img src={where1} alt="" />
            <h2>with campfire</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia hic,
              perspiciatis, eveniet vel dolores incidunt quasi pariatur ut deleniti omnis fugit
              nulla corporis dolor error porro. Reprehenderit, fuga numquam.
            </p>
          </div>

          <div>
            <div>
              <img src={where1} alt="" />
              <div>
                <h2>with campfire</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia hic,
                  perspiciatis, eveniet vel dolores incidunt quasi pariatur ut deleniti omnis fugit
                  nulla corporis dolor error porro. Reprehenderit, fuga numquam.
                </p>
              </div>
            </div>
            <div>
              <img src={where1} alt="" />
              <div>
                <img src={where1} alt="" />
                <div>
                  <h2>with campfire</h2>
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
          <div>
            <h1>Inspired for Healing</h1>
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
