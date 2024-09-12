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
  UserRoundCog,
} from "lucide-react";

import { Formik, Form, Field, FieldProps } from "formik";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import ListingCard from "@/components/listing-card";

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
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { FormikSignup } from "@/interfaces/formik";
import { signUpSchema } from "@/schema/schema";
import ReviewItemProfile from "@/components/custom/review-item";

function Profile() {
  const user = useSelector((state: RootState) => state.auth.user);

  const initialProfileValues: FormikSignup = {
    name: user.name,
    emailAddress: user.emailAddress,
    password: "",
    confirmPassword: "",
    provider: user.provider,
    username: user.username,
  };

  const handleUpdateProfile = async () => {};

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
                  <p className="text-lg"> {user.name}</p>
                  <p className="text-xs ">{user.location}</p>
                  <p className="text-xs">Joined date: {user.createdAt}</p>
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
                      <DialogTitle>
                        <div className="flex">
                          <UserRoundCog size={16} className="mr-2" /> Update Profile
                        </div>
                      </DialogTitle>
                      <DialogDescription>
                        <Formik
                          initialValues={initialProfileValues}
                          onSubmit={handleUpdateProfile}
                          validationSchema={signUpSchema}
                        >
                          {({ isValid, values }) => {
                            const isFieldEmpty = Object.values(values).some(
                              (value) => value.trim() === ""
                            );
                            return (
                              <Form className="p-2">
                                <div className="">
                                  <Field name="name">
                                    {({ field, meta }: FieldProps) => (
                                      <div className="space-y-1 mb-4">
                                        <Label htmlFor="name">
                                          Name
                                          {meta.touched && meta.error ? (
                                            <span className="text-red-500 ml-1">{meta.error}</span>
                                          ) : null}
                                        </Label>
                                        <Input id="name" placeholder="Pedro Duarte" {...field} />
                                      </div>
                                    )}
                                  </Field>

                                  <Field name="username">
                                    {({ field, meta }: FieldProps) => (
                                      <div className="space-y-1 mb-4">
                                        <Label htmlFor="username">
                                          Username
                                          {meta.touched && meta.error ? (
                                            <span className="text-red-500 ml-1">{meta.error}</span>
                                          ) : null}
                                        </Label>
                                        <Input
                                          id="username"
                                          type="username"
                                          placeholder="@pedro"
                                          {...field}
                                        />
                                      </div>
                                    )}
                                  </Field>
                                </div>

                                <Field name="emailAddress">
                                  {({ field, meta }: FieldProps) => (
                                    <div className="space-y-1 mb-4">
                                      <Label htmlFor="emailAddress">
                                        Email
                                        {meta.touched && meta.error ? (
                                          <span className="text-red-500 ml-1">{meta.error}</span>
                                        ) : null}
                                      </Label>
                                      <Input id="emailAddress" type="email" {...field} />
                                    </div>
                                  )}
                                </Field>

                                <Field name="password">
                                  {({ field, meta }: FieldProps) => (
                                    <div className="space-y-1 mb-4">
                                      <Label htmlFor="password">
                                        Password
                                        {meta.touched && meta.error ? (
                                          <span className="text-red-500 ml-1">{meta.error}</span>
                                        ) : null}
                                      </Label>
                                      <Input id="password" type="password" {...field} />
                                    </div>
                                  )}
                                </Field>

                                <Field name="confirmPassword">
                                  {({ field, meta }: FieldProps) => (
                                    <div className="space-y-1 mb-4">
                                      <Label htmlFor="confirmPassword">
                                        Confirm Password
                                        {meta.touched && meta.error ? (
                                          <span className="text-red-500 ml-1">{meta.error}</span>
                                        ) : null}
                                      </Label>
                                      <Input id="confirmPassword" type="password" {...field} />
                                    </div>
                                  )}
                                </Field>
                                <Button
                                  className={`w-full ${
                                    isFieldEmpty || !isValid
                                      ? "pointer-events-none opacity-[70%] hover:cursor-not-allowed"
                                      : ""
                                  } `}
                                >
                                  Sign up
                                </Button>
                              </Form>
                            );
                          }}
                        </Formik>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div>
              <p className="text-sm my-4 italic">{user.biography}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 my-4">
              <div className="border border-solid p-4 text-center rounded-xl">
                <Telescope className="m-auto" /> <p>Visited Campsite</p>
                <p className="">{user.visitedCampsites.length}</p>
              </div>
              <div className="border border-solid p-4 text-center rounded-xl">
                <List className="m-auto" /> <p>Listed Campsite</p>
                <p className="">{user.campgrounds.length}</p>
              </div>
              <div className="border border-solid p-4 text-center rounded-xl">
                <Crown className="m-auto" /> <p>Favorite Campsite</p>
                <p className="">{user.favoriteCampsites.length}</p>
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
                  {user.reviews.length >= 1 ? (
                    <ReviewItemProfile name="test" date="test" rating={4.5} review="lorem?" />
                  ) : (
                    <div>No reviews</div>
                  )}
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
