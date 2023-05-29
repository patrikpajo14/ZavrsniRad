import { Inter } from "next/font/google";
import Provider from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ToasterContext />
          <main className="main">{children}</main>
        </Provider>
      </body>
    </html>
  );
}