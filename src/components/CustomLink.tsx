"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  title: string;
  className?: string;
  classNameText?: string;
  onClick?: () => void;
}

const CustomLink = ({
  href,
  title,
  className = "",
  classNameText = "",
  onClick,
}: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${className} relative group text-start`}
      onClick={onClick}
    >
      <p
        className={`${classNameText} ${pathname === href
          ? "text-colorDropdown"
          : "text-colorTextPrimary hover:text-colorDropdown duration-200"
          }`}
      >
        {title}
      </p>
    </Link>
  );
};

export default CustomLink;
