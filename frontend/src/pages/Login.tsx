import Container from "@/components/container";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormikSignin, FormikSignup } from "@/interfaces/formik";
import { signInSchema, signUpSchema } from "@/schema/schema";
import { Formik, Form, Field, FieldProps } from "formik";
import { SocialIcon } from "react-social-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
// import { ToastAction } from "@/components/ui/toast";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { ServerError } from "@/interfaces/axios";
import { useDispatch } from "react-redux";
import { authenticate } from "@/state/auth/authSlice";
// import { useState } from "react";

function Login() {
  const { toast } = useToast();
  const currentDate = new Date().toLocaleString().replace(",", "");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const initialSignUpValue: FormikSignup = {
    name: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    provider: "EMAIL",
    username: "",
  };

  const initialSignInValue: FormikSignin = {
    usernameOrEmail: "",
    password: "",
  };

  const handleSignUp = async (state: FormikSignup) => {
    try {
      const data = await axios.post("http://localhost:3000/users", state);
      if (data.status === 200) {
        toast({
          title: "Success!",
          description: `Welcome to YelpCampPH! Your account was successfully created on ${currentDate}. Start exploring and booking amazing campsites today!`,
        });
        navigate("/dashboard");
      }
    } catch (e) {
      const error = e as AxiosError<ServerError>;
      const { status, message } = error.response!.data;
      if (status === 409) {
        toast({
          title: "Oops!",
          variant: "destructive",
          description: `${message}`,
        });
      }
    }

    // setLoading(false);
  };

  const handleSocialFacebook = async () => {
    window.location.href = "http://localhost:3000/auth/facebook";
  };

  const handleSocialGoogle = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  const handleSignIn = async (state: FormikSignin) => {
    try {
      const data = await axios.post("http://localhost:3000/auth", state);
      const { user, access_token, refresh_token } = data.data;
      dispatch(
        authenticate({
          user: user,
          access_token,
          refresh_token,
        })
      );
      navigate("/dashboard");
    } catch (e) {
      const error = e as AxiosError<ServerError>;
      const { status, message } = error.response!.data;
      if (status === 404) {
        toast({
          title: "Oops!",
          variant: "destructive",
          description: `${message}`,
        });
      }
    }
  };

  return (
    <Container>
      <Header />
      <div className="h-full flex justify-center bg-login">
        <div className=" m-auto">
          <Tabs defaultValue="signup" className="w-[350px] md:w-[500px]">
            <TabsList className="border border-solid  grid w-full grid-cols-2 bg-white bg-opacity-65">
              <TabsTrigger className="data-[state=active]:bg-primary" value="signup">
                Sign Up
              </TabsTrigger>
              <TabsTrigger className="data-[state=active]:bg-primary" value="signin">
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <Formik
                initialValues={initialSignInValue}
                onSubmit={handleSignIn}
                validationSchema={signInSchema}
              >
                {({ isValid, values }) => {
                  const isFieldEmpty = Object.values(values).some((value) => value.trim() === "");

                  return (
                    <Form>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
                          <CardDescription className="text-center my-2">
                            Join our community to find and book unique camping experiences!
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <Field name="usernameOrEmail">
                            {({ field, meta }: FieldProps) => (
                              <div className="space-y-1">
                                <div className="space-y-1">
                                  <Label htmlFor="usernameOrEmail">
                                    Username or email{" "}
                                    {meta.touched && meta.error ? (
                                      <span className="text-red-500 ml-1">{meta.error}</span>
                                    ) : null}
                                  </Label>
                                  <Input id="usernameOrEmail" type="st ring" {...field} />
                                </div>
                              </div>
                            )}
                          </Field>

                          <Field name="password">
                            {({ field, meta }: FieldProps) => (
                              <div className="space-y-1">
                                <div className="space-y-1">
                                  <Label htmlFor="password">
                                    Password{" "}
                                    {meta.touched && meta.error ? (
                                      <span className="text-red-500 ml-1">{meta.error}</span>
                                    ) : null}
                                  </Label>
                                  <Input id="password" type="password" {...field} />
                                </div>
                              </div>
                            )}
                          </Field>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className={`w-full ${
                              isFieldEmpty || !isValid
                                ? "pointer-events-none opacity-[70%] hover:cursor-not-allowed"
                                : ""
                            } `}
                          >
                            Sign up
                          </Button>
                        </CardFooter>
                      </Card>
                    </Form>
                  );
                }}
              </Formik>
            </TabsContent>
            <TabsContent value="signup">
              <Formik
                initialValues={initialSignUpValue}
                onSubmit={handleSignUp}
                validationSchema={signUpSchema}
              >
                {({ isValid, values }) => {
                  const isFieldEmpty = Object.values(values).some((value) => value.trim() === "");
                  return (
                    <Form>
                      <Card className="">
                        <CardHeader>
                          <CardTitle className="text-2xl text-center font-bold">Sign Up</CardTitle>
                          <CardDescription className="text-center my-2">
                            Join our community to find and book unique camping experiences!
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <Field name="name">
                              {({ field, meta }: FieldProps) => (
                                <div className="space-y-1">
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
                                <div className="space-y-1">
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
                              <div className="space-y-1">
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
                              <div className="space-y-1">
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
                              <div className="space-y-1">
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
                        </CardContent>
                        <CardFooter className="flex">
                          <Button
                            className={`w-full ${
                              isFieldEmpty || !isValid
                                ? "pointer-events-none opacity-[70%] hover:cursor-not-allowed"
                                : ""
                            } `}
                          >
                            Sign up
                          </Button>
                        </CardFooter>
                      </Card>
                    </Form>
                  );
                }}
              </Formik>
            </TabsContent>
          </Tabs>
          <div className="p-4 flex justify-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SocialIcon
                    network="facebook"
                    className="hover:cursor-pointer"
                    onClick={handleSocialFacebook}
                  />
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Login via Facebook</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SocialIcon
                    network="google"
                    className="hover:cursor-pointer"
                    onClick={handleSocialGoogle}
                  />
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Login Via Google</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
