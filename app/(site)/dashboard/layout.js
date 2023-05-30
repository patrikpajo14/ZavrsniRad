import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard App For Creating Offers",
};

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <section className="container-fluid">
        <Nav />
        {children}
      </section>
    </>
  );
};

export default DashboardLayout;
