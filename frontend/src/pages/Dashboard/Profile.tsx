import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  CircleX,
  Crown,
  Flag,
  List,
  MailIcon,
  MessageCircle,
  Settings,
  ShieldCheck,
  Telescope,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import ListingCard from "@/components/listing-card";
import { StarFilledIcon } from "@radix-ui/react-icons";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Profile() {
  return (
    <div className="w-full">
      <div className="px-4 mx-2 relative flex flex-col ">
        <div className="">
          <p className="my-auto flex font-bold">
            <ShieldCheck size="16" className="my-auto mr-2" />
            Account Settings
          </p>
          <p className="text-xs">Real-time information and activities of your account.</p>
        </div>
        <div className="mt-4 overflow-auto">
          {/* <div>
            <ul className="flex flex-col gap-2">
              <li>
                <Button>My Profile</Button>
              </li>
              <li>
                <Button>My Profile</Button>
              </li>
            </ul>
          </div> */}
          <div>
            {/* <h3 className="font-semibold">My Profile</h3> */}
            <div className="mt-2 flex justify-between">
              <div className="flex ">
                {" "}
                <Avatar className="h-[60px] w-[60px]">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="text-lg"> Rafiqur Rahman</p>
                  <p className="text-xs ">Cebu City</p>
                  <p className="text-xs">Joined date: January 12 2024</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Dialog>
                  <DialogTrigger>
                    {" "}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button size="sm">
                            <MailIcon size={16} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p>Send a message</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        {" "}
                        <p className="my-auto flex font-bold">
                          <MessageCircle size="16" className="my-auto mr-2" />
                          Inbox
                        </p>
                      </DialogTitle>
                      <DialogDescription>
                        <div className="grid w-full items-center gap-1.5 my-2">
                          <Label htmlFor="email">To:</Label>
                          <Input id="email" className="w-full" />
                        </div>
                        <div className="my-4">
                          <Textarea placeholder="Reply to william" />
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button>Send</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger>
                    {" "}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button size="sm">
                                  <CircleX size={16} />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent side="right">
                                <p>Block user</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <div className="flex ">
                          <CircleX size={16} className="my-auto mr-2" />
                          <span>Block user</span>
                        </div>
                      </DialogTitle>
                      <DialogDescription>
                        This will temporarily block usernames account and prevent you from seeing
                        future listing from this user.
                      </DialogDescription>
                      <DialogFooter>
                        <Button>Block</Button>
                      </DialogFooter>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger>
                    {" "}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button size="sm">
                            <Settings size={16} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p>Dashboard</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently delete your account and
                        remove your data from our servers.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div>
              <p className="text-sm my-4 italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quod placeat nobis,
                eum assumenda aliquid, ducimus deserunt porro eius eveniet laborum cumque est
                debitis dolorum quaerat, accusamus asperiores qui. Vel.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 my-4">
              <div className="border border-solid p-4 text-center rounded-xl">
                <Telescope className="m-auto" /> <p>Visited Campsite</p>
                <p className="">89</p>
              </div>
              <div className="border border-solid p-4 text-center rounded-xl">
                <List className="m-auto" /> <p>Listed Campsite</p>
                <p className="">89</p>
              </div>
              <div className="border border-solid p-4 text-center rounded-xl">
                <Crown className="m-auto" /> <p>Favorite Campsite</p>
                <p className="">89</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 m-auto">
              <div>
                <h2>Recently Viewed Campsite</h2>
                <div>
                  <ListingCard />
                </div>
              </div>
              <div>
                <h2>Recently Reviewed</h2>
                <div className="mt-2">
                  <div className="">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm">AJ Corporation</p>
                        <p className="text-xs">Ownedby</p>
                        <p className="text-xs">Ownedby</p>
                      </div>
                      <span className="flex">
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                      </span>
                    </div>
                    <div className="my-2">
                      <p className="text-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eveniet nemo,
                        aperiam dolor fugiat nobis vel expedita ducimus, quas veniam porro laborum
                        harum rem! Eveniet facere corporis illum velit eaque.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4 flex hover:underline hover:cursor-pointer">
              <Flag className="w-[16px] h-[16px] my-auto mr-2" />
              <span className="text-sm">Report this account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
