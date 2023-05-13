"use client";
import Image from "next/image";
import Link from "next/link";

const sidebarLinks = ["/", "/offers", "/article-list", "/profile"];
const sidebarTranslate = ["Dashboard", "Offers", "Articles", "Profile"];
const sidebarIcons = [
  "/assets/icons/ico_dashboard.svg",
  "/assets/icons/ico_offers.svg",
  "/assets/icons/ico_article.svg",
  "/assets/icons/ico_profile.svg",
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link href="/" className="logo">
        LOGO
      </Link>
      <ul>
        {sidebarLinks.map((link, index) => (
          <li className="relative">
            <Link href={link} className="sidebar-link">
              <Image
                src={sidebarIcons[index]}
                alt={sidebarTranslate[index]}
                width="25"
                height="25"
                className="sidebar-icon"
              />
              {sidebarTranslate[index]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
