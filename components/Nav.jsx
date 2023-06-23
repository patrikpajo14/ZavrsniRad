"use client";

import Link from "next/link";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Avatar from "./Avatar";
import Button from "./Button";
import Image from "next/image";

const Nav = () => {
  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-col-reverse flex md:flex-row gap-3 flex-end md:items-center w-full mb-7 md:mb-16 pt-3">
      <div className="flex justify-between w-[100%] md:w-max">
        <button
          className="block md:hidden"
          onClick={() => {
            document.body.classList.toggle("no-scroll");
            document.body.classList.toggle("sidebar-open");
          }}
        >
          <Image
            src={"/assets/icons/ico_menu.svg"}
            width="25"
            height="25"
            alt="menu"
          />
        </button>
        {session?.user && (
          <div className="flex relative gap-3 items-center">
            <p>{session?.user?.name}</p>
            <Avatar
              user={session?.user}
              onClick={() => {
                setToggleDropdown(!toggleDropdown);
              }}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Button
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  fullWidth
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
