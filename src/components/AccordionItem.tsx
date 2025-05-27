import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import Image from "next/image";
import chevron from "../../public/chevron-down.svg";

const AccordionItem = ({ header, ...rest }: any) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <div className="flex items-center font-bold ">
        {header}
        <Image
          className={`ml-auto transition-transform duration-200 ease-out${isEnter ? "rotate-180" : ""
            }`}
          src={chevron}
          alt="Chevron"
          width={24}
          height={24}
        />
      </div>
    )}
    className="border-b  w-full"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left hover:bg-primary hover:text-colorText.Primary ${isEnter ? "bg-secondary" : ""
        }`,
    }}
    contentProps={{
      className: "transition-height w-full duration-200 ease-out ",
    }}
    panelProps={{
      className: "p-4 text-black w-full bg-secondary",
      style: { backgroundColor: "#f7f7f7" },
    }}
  />
);

export default AccordionItem;
