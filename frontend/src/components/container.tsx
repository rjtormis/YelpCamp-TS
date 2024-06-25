import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

function Container({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <div
      className={`h-screen flex flex-col overflow-hidden ${
        location.pathname.includes("/dashboard") ? "mx-0" : "mx-4"
      } `}
    >
      {children}
    </div>
  );
}

export default Container;
