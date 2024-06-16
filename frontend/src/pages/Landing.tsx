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
import { ArrowRight, CalendarDays, Map, Users } from "lucide-react";
import Footer from "@/components/footer";
import Container from "@/components/container";

function Landing() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const triggerDialogRef = useRef<HTMLButtonElement>(null);

  const handleInputClick = () => {
    if (triggerDialogRef.current) {
      triggerDialogRef.current.click();
    }
  };

  return (
    <Container>
      <Header />
      <div className="">
        <div className="my-4  flex flex-col xl:flex-row relative ">
          <div className="flex justify-center p-4 xl:order-2 ">
            <img
              src={landing1}
              alt=""
              className="w-[420px] h-[320px] xl:w-[2000px] xl:h-full z-10 rounded-lg"
            />
          </div>

          <div className="my-10">
            <div className="p-4">
              <p className=" text-center text-primary md:text-lg xl:text-xl xl:text-left 2xl:text-3xl">
                Get your experience
              </p>
              <p className=" text-xl text-center font-bold md:text-2xl xl:text-7xl xl:text-left 2xl:text-9xl">
                Feel the heart of <span className="text-primary">PHILIPPINES</span> Ecotourism
              </p>
            </div>

            <p className="my-4 text-center text-muted-foreground p-4 md:text-lg xl:w-[90%]  xl:text-justify 2xl:text-2xl">
              Rediscover your soul and conscience as you explore the breathtaking beauty of life at
              our campsite. Immerse yourself in nature&apos;s wonders, and let us be your guide to
              an unforgettable experience.
            </p>

            <div className="p-4">
              <div className="grid grid-cols-1  p-3 border border-solid border-primary rounded-lg xl:grid-cols-4  xl:gap-2">
                <div className="flex flex-col my-2">
                  <div className="flex mb-1">
                    <Map className="my-auto mr-1" size={16} />
                    <p className="text-sm mb-1 font-bold">WHERE</p>
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
                  <div className="flex mb-1">
                    <CalendarDays className="my-auto mr-1" size={16} />
                    <p className="text-sm mb-1 font-bold">DATES</p>
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

                <div className="flex flex-col my-2">
                  <div className="flex mb-1">
                    <Users className="my-auto mr-1" size={16} />
                    <p className="text-sm mb-1 font-bold">GUESS</p>
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

                <Button className=" h-full">SEARCH</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4  lg:flex-row ">
        <p className="text-xl my-auto text-center font-bold md:text-3xl lg:text-left 2xl:text-5xl 2xl:w-[50%]">
          For over 20 Years we have been helping people Find the best place for healing
        </p>
        <div className="my-3 flex flex-col lg:flex-row gap-8">
          <div className="text-center my-8 mx-1">
            <p className="text-2xl text-primary font-bold md:text-3xl lg:text-4xl mb-2">1M++</p>
            <p className="md:text-lg text-pretty">Helping People Find the best place for healing</p>
          </div>
          <div className="text-center my-8 ">
            <p className="text-2xl text-primary font-bold md:text-3xl lg:text-4xl mb-2">20 Years</p>
            <p className="md:text- lg:text-xl">Years of experience on camping rent</p>
          </div>
          <div className="text-center my-8 mb-2">
            <p className="text-2xl text-primary font-bold md:text-3xl lg:text-4xl mb-2">100++</p>
            <p className="md:text-lg text-pretty">Number of best place for your healing</p>
          </div>
        </div>
      </div>

      <div className="p-4 xl:flex xl:gap-4 my-4">
        <img src={landing2} alt="" className="rounded-xl xl:w-full xl:h-full m-auto" />

        <div className=" p-4 my-4 bg-primary flex flex-col rounded-xl 2xl:my-0">
          <h1 className="text-2xl text-center md:text-3xl">Who Are We</h1>
          <div>
            <p className="text-sm my-4 text-center md:text-lg">
              YelpCampPH: Your Ultimate Guide to Campsites in the Philippines
            </p>
            <p className="my-4 text-sm text-center  lg:text-lg">
              Welcome to YelpCampPH, your one-stop destination for discovering the best camping
              spots across the beautiful archipelago of the Philippines. Whether you are a seasoned
              camper or a novice explorer, our platform is designed to provide you with all the
              information you need to make your camping experience unforgettable.
            </p>
            <p className="my-4 text-sm text-center  lg:text-lg">
              Our Mission At YelpCampPH, we aim to connect nature enthusiasts with the most amazing
              campsites the Philippines has to offer. We promote outdoor activities, environmental
              conservation, and a deeper appreciation of our islands' natural beauty.
            </p>
            <p className="my-4 text-sm text-center lg:text-lg ">
              Our Values We believe in fostering a community of outdoor enthusiasts who share their
              experiences and insights, making camping accessible and enjoyable for everyone. We are
              committed to promoting sustainable camping practices that preserve our campsites for
              future generations, and we encourage everyone to embrace the spirit of adventure.
            </p>
            <p className="my-4 text-sm text-center lg:text-lg ">
              Join Us Embark on your next adventure with YelpCampPH. Discover new places, meet
              fellow campers, and create unforgettable memories. Explore. Discover. Camp with
              YelpCampPH.
            </p>
          </div>
          <div className="w-full flex justify-center">
            <Button size="lg" className="bg-white text-primary">
              Partner Now
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h1 className="my-4 text-2xl text-center font-bold xl:text-4xl 2xl:text-5xl">
          Where to Go <span className="text-primary">Now?</span>
        </h1>

        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="relative md:text-xl ">
            <div className="relative">
              <img src={where1} alt="" className=" rounded-lg w-full  lg:h-[400px] my-auto" />
            </div>
            <div className="h-[60px]"></div>
            <div className="absolute bottom-0 mt-4 py-4 px-14 text-center  my-auto w-full ">
              <div className="bg-orange-500 h-[60px] p-1">
                <p className="pt-[0.5px] font-bold">Hidden Gems</p>
                <p className="text-xs md:text-sm">Site on the rise</p>
              </div>
            </div>
          </div>

          <div className="relative md:text-xl ">
            <div className="relative">
              <img src={where1} alt="" className=" rounded-lg w-full  lg:h-[400px]" />
            </div>
            <div className="h-[60px]"></div>
            <div className="absolute bottom-0 mt-4 py-4 px-14 text-center  my-auto w-full ">
              <div className="bg-orange-500 h-[60px] p-1">
                <p className="pt-[0.5px] font-bold">Hidden Gems</p>
                <p className="text-xs md:text-sm">Site on the rise</p>
              </div>
            </div>
          </div>

          <div className="relative md:text-xl ">
            <div className="relative">
              <img src={where1} alt="" className=" rounded-lg w-full  lg:h-[400px]" />
            </div>
            <div className="h-[60px]"></div>
            <div className="absolute bottom-0 mt-4 py-4 px-14 text-center  my-auto w-full ">
              <div className="bg-orange-500 h-[60px] p-1">
                <p className="pt-[0.5px] font-bold">Hidden Gems</p>
                <p className="text-xs md:text-sm">Site on the rise</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 p-4 ">
        <h1 className="text-2xl my-4 text-center font-bold lg:text-left xl:text-4xl 2xl:text-5xl">
          Discover <span className="text-primary">Top Sports</span> Near You
        </h1>

        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
          <div>
            <img src={where1} alt="" className=" rounded-lg" />
            <div className="my-4">
              <h2 className="mb-2 font-bold text-xl md:text-2xl">with campfire</h2>
              <p className="text-sm md:text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia hic,
                perspiciatis, eveniet vel dolores incidunt quasi pariatur ut deleniti omnis fugit
                nulla corporis dolor error porro. Reprehenderit, fuga numquam.
              </p>
            </div>
            <Button size="lg" variant="outline" className="flex justify-center my-auto">
              <span className="mr-1">Read More</span>
              <ArrowRight className="mt-[2px]" size={16} />
            </Button>
          </div>

          <div className="">
            <div>
              <img src={where1} alt="" className=" rounded-lg" />
              <div className="my-4">
                <h2 className="mb-2 font-bold text-xl md:text-2xl">with campfire</h2>
                <p className="text-sm md:text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia hic,
                  perspiciatis, eveniet vel dolores incidunt quasi pariatur ut deleniti omnis fugit
                  nulla corporis dolor error porro. Reprehenderit, fuga numquam.
                </p>
              </div>
              <Button size="lg" variant="outline" className="flex justify-center my-auto">
                <span className="mr-1">Read More</span>
                <ArrowRight className="mt-[2px]" size={16} />
              </Button>
            </div>
            <div className="flex flex-col gap-4 my-4">
              <div>
                <img src={where1} alt="" className=" rounded-lg" />
                <div className="my-4">
                  <h2 className="mb-2 font-bold text-xl md:text-2xl">with campfire</h2>
                  <p className="text-sm md:text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia hic,
                    perspiciatis, eveniet vel dolores incidunt quasi pariatur ut deleniti omnis
                    fugit nulla corporis dolor error porro. Reprehenderit, fuga numquam.
                  </p>
                </div>
                <Button size="lg" variant="outline" className="flex justify-center my-auto">
                  <span className="mr-1">Read More</span>
                  <ArrowRight className="mt-[2px]" size={16} />
                </Button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col my-4">
          <div className="my-4">
            <h1 className="text-2xl my-4 text-center font-bold xl:text-4xl 2xl:text-5xl">
              <span className=" text-primary">Inspired</span> for Healing
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis ducimus
              eveniet ad quos magni velit eius quaerat, architecto reprehenderit dignissimos
              mollitia dicta ratione repellat itaque nihil veritatis praesentium cum!
            </p>
          </div>

          <Button variant="outline">View All</Button>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default Landing;
