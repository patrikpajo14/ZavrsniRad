import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Sidebar from "@components/Sidebar";
import "@styles/globals.css";

export const metadata = {
  title: "Dashboard App",
  description: "Dashboard Ap For Creating Offers",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="main">
            <Sidebar />
            <section className="container">
              <Nav />
              {children}
            </section>
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
