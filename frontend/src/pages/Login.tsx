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
// import { useState } from "react";

function Login() {
  // const [loading, setLoading] = useState<boolean>(false);

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

  const handleSignUp = () => {
    // setLoading(false);
  };

  const handleSignIn = () => {};

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

                            <Field name="password">
                              {({ field, meta }: FieldProps) => (
                                <div className="space-y-1">
                                  <Label htmlFor="password">
                                    Username
                                    {meta.touched && meta.error ? (
                                      <span className="text-red-500 ml-1">{meta.error}</span>
                                    ) : null}
                                  </Label>
                                  <Input
                                    id="password"
                                    type="password"
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
                                <Input id="emailAddress" {...field} />
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
                                <Input id="password" {...field} />
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
                                <Input id="confirmPassword" {...field} />
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
        </div>
      </div>
    </Container>
  );
}

export default Login;
