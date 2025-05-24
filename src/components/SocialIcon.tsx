import React from "react";

interface Props {
  href: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SocialIcon = ({ href, title, children, className }: Props) => {
  return (
    <a
      target="_BLANK"
      href={href}
      className={`flex justify-center items-center gap-1 `}
    >
      {children}
      <p className={`hidden text-sm md:flex ${className}`}>{title}</p>
    </a>
  );
};

export default SocialIcon;
