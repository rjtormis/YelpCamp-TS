import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="h-screen flex flex-col mx-4">{children}</div>;
}

export default Container;
