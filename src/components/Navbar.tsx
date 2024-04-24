import React from "react";
import Mainstackicon from "@/icons/Mainstackicon";
import Home from "@/icons/Home";
import Analytics from "@/icons/Analytics";
import Payment from "@/icons/Payment";
import Crm from "@/icons/Crm";
import Apps from "@/icons/Apps";
import Notification from "@/icons/Notification";
import Messgae from "@/icons/Messgae";
import Menu from "@/icons/Menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="  pt-[26px] px-12 w-screen">
      <div className="w-full bg-primary shadow h-[64px] rounded-[100px]">
        <div className="flex items-center pt-3 px-[36px] self-center justify-between">
          <Mainstackicon />
          <div className="flex flex-row gap-6 justify-center items-center">
            <span className="flex flex-row gap-2 cursor-pointer">
              <Home />
              <span className="font-degular text-[16px] font-semibold text-gray">
                Home
              </span>
            </span>
            <div className="flex flex-row gap-2 cursor-pointer">
              <Analytics />
              <span className="font-degular text-[16px] font-semibold text-gray">
                Analytics
              </span>
            </div>
            <div className="flex flex-row gap-2 cursor-pointer bg-black w-[112px] h-[40px] rounded-[100px] items-center">
              {/* <Image
                src="/payments.svg"
                alt=""
                height={20}
                width={20}
                className=""
              /> */}
              <span className="pl-2.5">
                <Payment />
              </span>
              <span className="font-degular text-[16px] font-semibold text-white">
                Revenue
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <Crm />
              <span className="font-degular text-[16px] font-semibold text-gray">
                CRM
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <Apps />
              <span className="font-degular text-[16px] font-semibold text-gray">
                Apps
              </span>
            </div>
          </div>

          <div className="flex flex-row cursor-pointer">
            <Notification />
            <Messgae />

            <span className="w-[81px] h-[41px] bg-graydark3 rounded-[100px] self-center flex flex-row items-center">
              <span className="pl-2">
                <span className="w-[32px] h-[32px] bg-graydark rounded-full flex items-center justify-center">
                  <span className="font-degular font-semibold text-[14px] text-primary items-center flex ">
                    OJ
                  </span>
                </span>
              </span>
              <span className="pl-2 cursor-pointer">
                <Menu />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
