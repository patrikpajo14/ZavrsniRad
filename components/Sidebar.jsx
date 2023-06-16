"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = ["/", "offers", "article-list", "administration"];
const sidebarTranslate = ["Dashboard", "Offers", "Articles", "Administration"];
const sidebarIcons = [
  "/assets/icons/ico_dashboard.svg",
  "/assets/icons/ico_offers.svg",
  "/assets/icons/ico_article.svg",
  "/assets/icons/ico_profile.svg",
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="sidebar">
      <div className="inner">
        <div className="flex-between px-[17px] py-[5px] md:p-0">
          <Link href="/" className="logo">
            LOGO
          </Link>
          <button
            className="block md:hidden"
            onClick={() => {
              document.body.classList.remove("no-scroll");
              document.body.classList.remove("sidebar-open");
            }}
          >
            <Image
              src={"/assets/icons/ico_close.svg"}
              width="25"
              height="25"
              alt="menu"
            />
          </button>
        </div>
        <ul>
          {sidebarLinks.map((link, index) => {
            const isActive = pathname.endsWith(link);
            return (
              <li className="relative" key={index}>
                <Link
                  href={`/dashboard/${link}`}
                  className={isActive ? "sidebar-link active" : "sidebar-link"}
                >
                  <Image
                    src={sidebarIcons[index]}
                    alt={sidebarTranslate[index]}
                    width="25"
                    height="25"
                    className={"sidebar-icon"}
                  />
                  {sidebarTranslate[index]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
