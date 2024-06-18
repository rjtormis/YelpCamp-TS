import Container from "@/components/container";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default DashboardLayout;
