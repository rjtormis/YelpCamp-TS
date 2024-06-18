import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

function Container({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <div
      className={`h-screen flex flex-col ${location.pathname !== "/dashboard" ? "mx-4" : "mx-2"} `}
    >
      {children}
    </div>
  );
}

export default Container;
