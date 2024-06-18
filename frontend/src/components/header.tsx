import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, Images, Menu, Album } from "lucide-react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Logo from "./logo";

import ThemeToggle from "./theme";

const links = [
  {
    icon: <Home />,
    title: "Home",
    to: "/",
  },
  {
    icon: <Images />,
    title: "Gallery",
    to: "/gallery",
  },
  {
    icon: <Album />,
    title: "Blog",
    to: "/blog",
  },
];

function Header() {
  const isDesktop = useMediaQuery("(min-width:960px)");
  const location = useLocation();
  // const [theme,setTheme] = useContext(ThemeContext);
  // console.log(theme);

  return (
    <header className="flex justify-between">
      {isDesktop ? (
        <>
          <div className="flex">
            <Logo />
            {!location.pathname.includes("/dashboard") ? (
              <NavigationMenu className="ml-4">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    {links.map((link, index) => (
                      <Link className="" key={index} to={link.to}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {link.title}
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        <>
          <Sheet>
            <SheetTrigger className="my-auto" asChild>
              <Button variant="outline">
                <Menu size={16} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <Logo type="mobile" />
                </SheetTitle>
                <SheetDescription>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        {links.map((link, index) => (
                          <Link key={index} to={link.to}>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                              <span className="mr-2">{link.icon}</span>
                              {link.title}
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Logo />
        </>
      )}

      <div className="flex gap-4 my-auto">
        {location.pathname !== "/login" && location.pathname !== "/dashboard" ? (
          <Link to="/login">
            <Button size="lg" className="lg:text-xl">
              Login
            </Button>
          </Link>
        ) : (
          ""
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
