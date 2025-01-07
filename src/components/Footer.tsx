import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-12 bg-red  w-full flex  justify-start gap-5">
      <Link className="text-white " href="/">
        Home
      </Link>
      <Link className="text-white " href="/">
        Home
      </Link>
      <Link className="text-white " href="/">
        Home
      </Link>
    </div>
  );
};

export default Footer;
