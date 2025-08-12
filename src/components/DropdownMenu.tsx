import React, { useRef } from "react";
import CustomLink from "./CustomLink";
import { RiArrowDownDoubleLine } from "react-icons/ri";

interface DropdownItem {
  href: string;
  title: string;
}

interface Props {
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: DropdownItem[];
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
          className={`uppercase tracking-wide text-[13px] font-semibold transition-colors duration-300 text-black group-hover:text-secondary`}
        >
          {title}
        </p>
        <RiArrowDownDoubleLine
          className={`${open && "-rotate-180"} ease duration-300 text-xs text-black group-hover:text-secondary`}
        />
        <span className="h-[1px] inline-block bg-first absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0">
          &nbsp;
        </span>
      </div>
      {open && (
        <div
          className="absolute flex flex-col text-sm bg-white text-black max-w-56 bg-clip-padding py-3 px-5 top-[56px] shadow-xl gap-0 rounded-b-xl border border-black/10"
          ref={dropdownRef}
          onClick={() => setOpen(false)}
        >
          {data.map((item, key) => (
            <CustomLink
              href={item.href}
              title={item.title}
              key={key}
              className="border-b border-black/10 last:border-b-0 py-2"
              classNameText="text-black hover:text-secondary"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;