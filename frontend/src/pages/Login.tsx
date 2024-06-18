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

function Login() {
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Sign In</CardTitle>
                  <CardDescription className="text-center my-2">
                    Join our community to find and book unique camping experiences!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Username or email</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">Password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="signup">
              <Card className="bg-white bg-opacity-25">
                <CardHeader>
                  <CardTitle className="text-2xl text-center font-bold">Sign Up</CardTitle>
                  <CardDescription className="text-center my-2">
                    Join our community to find and book unique camping experiences!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Pedro Duarte" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" placeholder="@pedro" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Email</Label>
                    <Input id="username" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Password</Label>
                    <Input id="username" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Confirm Password</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <CardFooter className="flex">
                  <Button className="w-full">Sign up</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Container>
  );
}

export default Login;
