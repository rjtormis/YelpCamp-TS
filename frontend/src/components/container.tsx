import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "./ui/toaster";

function Container({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <div
      className={`h-screen flex flex-col  ${
        location.pathname.includes("/dashboard") ? "mx-0" : "mx-4"
      } `}
    >
      {children}
      <Toaster />
    </div>
  );
}

export default Container;
