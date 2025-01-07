"use client";

import { useEffect, useState } from "react";

import "./globals.css";
// import "@/css/Degular.css"
import "@/css/Degular.css";
// import { Geist, Geist_Mono, Lato } from "next/font/google";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading process
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {loading ? <Loader /> : <div>{children}</div>}

        {/* <main className="h-fit"></main> */}
      </body>
    </html>
  );
}
