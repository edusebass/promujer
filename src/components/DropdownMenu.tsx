import React, { useRef } from "react";
import CustomLink from "./CustomLink";
import { RiArrowDownDoubleLine } from "react-icons/ri";

interface Props {
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
}

const DropdownMenu = ({ title, open, setOpen, data }: Props) => {
  const dropdownRef = useRef(null);
  const mainRef = useRef(null);

  if (typeof window !== "undefined") {
    window.addEventListener("click", (e) => {
      if (e.target !== dropdownRef.current && e.target !== mainRef.current) {
        setOpen(false);
      }
    });
  }

  return (
    <div className="hover:cursor-pointer text-first my-4">
      <div className="flex justify-center items-center gap-2 relative group">
        <p
          onClick={() => setOpen(!open)}
          ref={mainRef}
          className={`transition-colors duration-300 ${
            open ? "text-orange" : ""
          }`}
        >
          {title}
        </p>
        <RiArrowDownDoubleLine
          className={`${open && "-rotate-180"} ease duration-300`}
        />
        <span className="h-[1px] inline-block bg-first absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0">
          &nbsp;
        </span>
      </div>
      {open && (
        <div
          className="absolute flex flex-col text-sm bg-blue max-w-40 bg-clip-padding backdrop-filter backdrop-blur-md  py-3 px-5 top-[55px] shadow-sm gap-4 rounded-b-lg border-b-2 border-r-2 border-solid border-blue/20"
          ref={dropdownRef}
          onClick={() => setOpen(false)}
        >
          {data.map((item: any, key: number) => (
            <>
              <CustomLink
                href={item.href}
                title={item.title}
                key={key}
                className="border-b border-white"
                classNameText="text-white hover:text-black"
              />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
