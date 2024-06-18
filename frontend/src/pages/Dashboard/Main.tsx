import Container from "@/components/container";
import Header from "@/components/header";
import { AlignJustify, LayoutDashboard, LogOut, Users } from "lucide-react";

function Main() {
  return (
    <Container>
      <Header />
      <div className="h-full w-full flex">
        <div>
          <ul className="p-4">
            <li className="">
              <LayoutDashboard />
            </li>
            <li className="">
              <Users />
            </li>
            <li>
              <AlignJustify />
            </li>
            <li>
              <LogOut />
            </li>
          </ul>
        </div>
        <div className="w-full">Q2</div>
      </div>
    </Container>
  );
}

export default Main;
