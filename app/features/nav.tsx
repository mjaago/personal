"use client";

import { Button } from "app/components/Button";
import { Heading } from "app/components/Heading";
import clsx from "clsx";
import { TITLE_MARGIN } from "./simplepagelayout";
import Image from "next/image";
import me from "../media/me.jpg";
import { Dropdown } from "app/components/Dropdown";
import { Icon } from "app/components/Icon";
import { CloseButton } from "@headlessui/react";

const navItems = {
  "/about": {
    name: "about",
  },
  "/projects": {
    name: "projects",
  },
};

const socialIconStyle = "h-6 w-6";
export function Navbar() {
  return (
    <div className="flex h-full w-min min-w-72 flex-col items-center border border-black bg-white px-8 py-4 shadow-xl">
      <Heading.Page className={TITLE_MARGIN} underline>
        Marten Jaago
      </Heading.Page>
      <NavbarContent />
    </div>
  );
}

const chevronStyles =
  "h-6 w-6 text-zinc-500 transition-transform ease-in-out group-data-[open]:rotate-180";
export function MobileNavbar() {
  return (
    <div>
      <Dropdown
        value={
          <div className="flex w-full items-center justify-between px-4">
            <Icon.ChevronDown className={chevronStyles} />
            <Heading.Page underline>Marten Jaago</Heading.Page>
            <Icon.ChevronDown className={chevronStyles} />
          </div>
        }
      >
        <div className="flex flex-col items-center justify-between px-6 py-6">
          <NavbarContent />
        </div>
      </Dropdown>
    </div>
  );
}

function NavbarContent() {
  return (
    <div className="flex flex-col items-center justify-between sm:h-full">
      <div className="flex flex-col gap-4" id="nav">
        <Image
          src={me}
          alt="Me"
          className={clsx("h-auto border border-black")}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <p className="w-fit italic sm:text-nowrap">
          a little rough around the edges
        </p>
        <div className="flex flex-col gap-3">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <CloseButton as={Button} key={path} href={path}>
                {name}
              </CloseButton>
            );
          })}
        </div>
      </div>
      <div className="mt-8 flex gap-2 sm:mt-0">
        <Button
          className="h-10 w-10"
          href="https://www.linkedin.com/in/marten-jaago/"
        >
          <LinkedIn className={socialIconStyle}></LinkedIn>
        </Button>
        <Button className="h-10 w-10" href="https://github.com/mjaago">
          <Github className={socialIconStyle}></Github>
        </Button>
        <Button
          className="h-10 w-10"
          href="mailto:martenjaago@gmail.com?subject=Let's%20work%20together&body=Hey!%20I'd%20like%20to%20work%20with%20you."
        >
          <Icon.Mail className={socialIconStyle} />
        </Button>
      </div>
    </div>
  );
}

function LinkedIn({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="26"
      height="26"
      viewBox="0 0 192 192"
      className={className}
    >
      {
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
        >
          <path d="M0,192v-192h192v192z" fill="none"></path>
          <g fill="#000">
            <g id="surface1">
              <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
            </g>
          </g>
        </g>
      }
    </svg>
  );
}

function Github({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={className}
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
  );
}
