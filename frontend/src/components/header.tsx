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
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, Images, Menu, Album } from "lucide-react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Logo from "./logo";

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

  return (
    <header className="flex justify-between my-auto">
      {isDesktop ? (
        <>
          <div className="flex">
            <Logo />
            <NavigationMenu className="ml-4">
              <NavigationMenuList>
                <NavigationMenuItem>
                  {links.map((link, index) => (
                    <Link key={index} to={link.to}>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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

      <Button variant="outline" className="my-auto">
        Join now!
      </Button>
    </header>
  );
}

export default Header;
