"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import BasicLineChart from "@/components/BasicLineChart";
import Info from "@/icons/Info";
import Expand from "@/icons/Expand";
import Download from "@/icons/Download";
import Transactions from "@/icons/Transactions";
import FailedTransaction from "@/icons/FailedTransaction";
import Close from "@/icons/Close";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const transactions = [
    {
      id: 1,
      productName: "Psychology of Money and 2 other products",
      customerName: "Roy Cash",
      amount: "USD 600",
      date: "Apr 03, 2022",
      success: true,
    },
    {
      id: 2,
      productName: "cash withdrawal",
      customerName: "successful",
      amount: "USD 300.33",
      date: "Apr 02, 2022",
      success: false,
    },
    {
      id: 3,
      productName: "Buy me a Coffee",
      customerName: "Jonathan smart",
      amount: "USD 800",
      date: "Apr 05, 2022",
      success: true,
    },
    {
      id: 4,
      productName: "cash withdrawal",
      customerName: "pending",
      amount: "USD 100",
      date: "Apr 02, 2022",
      success: false,
    },
    {
      id: 5,
      productName: "Buy me a Coffee",
      customerName: "Jonathan smart",
      amount: "USD 400",
      date: "Apr 02, 2022",
      success: true,
    },
    {
      id: 6,
      productName: "Buy me a Coffee",
      customerName: "Jonathan smart",
      amount: "USD 500",
      date: "Apr 03, 2022",
      success: true,
    },
    {
      id: 7,
      productName: "Buy me a Coffee",
      customerName: "Jonathan smart",
      amount: "USD 700",
      date: "Apr 04, 2022",
      success: true,
    },
  ];

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsNavbarFixed(scrollTop > 0); // Change this threshold as needed
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className=" h-screen w-screen flex flex-col lg:overflow-x-hidden">
        <div className={`fixed w-full z-30 ${isNavbarFixed ? "top-0" : ""}`}>
          <Navbar />
        </div>
        <div className="pt-[144px] px-[140px]  ">
          <div className="float-right flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="flex flex-row gap-[64px] ">
                <p className="font-degular font-medium text-[16px] text-gray">
                  Ledger Balance
                </p>
                <Info />
              </span>
              <p className="font-degular font-bold text-[28px]">USD 0.00</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="flex justify-between ">
                <p className="font-degular font-medium text-[16px] text-gray">
                  Total Payout
                </p>
                <Info />
              </span>
              <p className="font-degular font-bold text-[28px]">
                USD 55,080.00
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="flex justify-between ">
                <p className="font-degular font-medium text-[16px] text-gray">
                  Total Revenue
                </p>
                <Info />
              </span>
              <p className="font-degular font-bold text-[28px]">
                USD 175,580.00
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="flex justify-between ">
                <p className="font-degular font-medium text-[16px] text-gray">
                  Pending Payout
                </p>
                <Info />
              </span>
              <p className="font-degular font-bold text-[28px]">USD 0.00</p>
            </div>
          </div>
          <div className="float-left flex flex-col gap-3">
            <p className="font-degular font-medium text-gray text-[16px]">
              Available Balance
            </p>
            <div className="flex flex-row gap-[51px]">
              <p className="font-degular font-bold text-[36px] ">
                USD 120,500.00
              </p>
              <button className="w-[167px] h-[52px] bg-black rounded-[100px]">
                <span className="font-semibold text-[16px] text-primary">
                  Withdraw
                </span>
              </button>
            </div>
            <div>
              <BasicLineChart />
            </div>
          </div>
        </div>
        <div className="flex flex-col px-[140px] gap-2">
          <div className="  pt-[70px] flex justify-between">
            <div className="flex flex-col">
              <p className="font-degular font-bold text-[24px] text-black-2">
                24 Transactions
              </p>
              <p className="font-degular font-medium text-[16px] text-graydark">
                Your transactions for the last 7 days
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <CustomalModal />

              <span className="w-[107px] h-[48px] bg-graylight rounded-[100px] cursor-pointer">
                <span className="flex flex-row justify-center items-center gap-0.5 pt-3">
                  <p className="font-degular text-[16px] text-black font-semibold">
                    Export list
                  </p>
                  <Download />
                </span>
              </span>
            </div>
          </div>
          <div className="w-full border-graylight border-2 h-px " />
        </div>

        <div className=" ">
          {transactions.map((transaction) => (
            <div
              className="px-[140px] pt-9 flex justify-between "
              key={transaction.id}
            >
              <div className="flex flex-row gap-3">
                <span className="">
                  <div
                    className={`w-[48px] h-[48px] rounded-full flex justify-center items-center ${
                      transaction.success ? "bg-lightgreen" : "bg-lightred"
                    }`}
                  >
                    {transaction.success ? (
                      <Transactions />
                    ) : (
                      <FailedTransaction />
                    )}
                  </div>
                </span>
                <span className="flex flex-col gap-2">
                  <p className="font-degular text-[16px] font-medium text-black">
                    {transaction.productName}
                  </p>
                  <p className="font-degular text-[14px] font-medium text-gray-2">
                    {transaction.customerName}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-degular text-[16px] font-bold text-black">
                  {transaction.amount}
                </p>
                <p className="font-degular text-[14px] font-medium text-gray-2">
                  {transaction.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

const CustomalModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const today = new Date();
  const [startDate, setStartDate] = useState<Date | null>(today);
  const [endDate, setEndDate] = useState<Date | null>(today);
  const [showCard, setShowCard] = useState(false);
  const [checkboxes, setCheckboxes] = useState<{
    [key: string]: boolean;
  }>({
    storeTransaction: false,
    getTipped: false,
    withdrawals: false,
    chargebacks: false,
    cashbacks: false,
    referAndEarn: false,
  });
  const [showCards, setShowCards] = useState(false);
  const [checkboxess, setCheckboxess] = useState<{
    [key: string]: boolean;
  }>({
    successful: false,
    pending: false,
    failed: false,
  });
  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  const handleCheckboxChanges = (event: any) => {
    const { name, checked } = event.target;
    setCheckboxess({ ...checkboxess, [name]: checked });
  };
  const handleSave = () => {
    // Handle saving the date range state
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  const toggleCard = () => {
    setShowCard(!showCard);
  };
  const toggleCards = () => {
    setShowCards(!showCards);
  };

  // const handleCheckboxChange = (event) => {
  //   const { name, checked } = event.target;
  //   setCheckboxes({
  //     ...checkboxes,
  //     [name]: checked,
  //   });
  // };
  const checkedItems = Object.keys(checkboxes).filter((key) => checkboxes[key]);
  const checkedItemss = Object.keys(checkboxess).filter(
    (key) => checkboxess[key]
  );
  const expandIconClass = showCard ? "rotate-180" : "";
  const expandIconClasss = showCard ? "rotate-180" : "";
  return (
    <>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[456px] rounded-[20px] p-6 h-[600px]">
            {/* Your modal content here */}
            <div className="flex flex-col gap-[22.5px]">
              <div className="px-[17px] flex justify-between">
                <p className="font-degular font-bold text-black-2 text-[24px]">
                  Filter
                </p>
                <span className=" cursor-pointer" onClick={closeModal}>
                  <Close />
                </span>
              </div>

              <div className="flex justify-between gap-5">
                <span className="w-[80px] h-[36px] bg-primary rounded-[100px] border-graydark border-2 cursor-pointer">
                  <p className="text-center font-degular text-[14px] text-black-2 pt-1">
                    Today
                  </p>
                </span>
                <span className="w-[98px] h-[36px] bg-primary rounded-[100px] border-graydark border-2 cursor-pointer">
                  <p className="text-center font-degular text-[14px] text-black-2 pt-1">
                    Last 7 days
                  </p>
                </span>
                <span className="w-[99px] h-[36px] bg-primary rounded-[100px] border-graydark border-2 cursor-pointer">
                  <p className="text-center font-degular text-[14px] text-black-2 pt-1">
                    This month
                  </p>
                </span>
                <span className="w-[116px] h-[36px] bg-primary rounded-[100px] border-graydark border-2 cursor-pointer">
                  <p className="text-center font-degular text-[14px] text-black-2 whitespace-nowrap pt-1">
                    Last 3 months
                  </p>
                </span>
              </div>
              <div className="flex-col">
                <p className="font-degular font-semibold text-[16px] text-black-2">
                  Date Range
                </p>

                <div className="flex justify-between gap-3">
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Start Date"
                    className="w-[203px] h-[48px] bg-graylight rounded-[12px] pl-3 text-black-2 font-degular text-[14px] font-medium"
                  />
                  <DatePicker
                    selected={endDate}
                    onChange={(date: Date | null) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="End Date"
                    className="w-[203px] h-[48px] bg-graylight rounded-[12px] pl-3 text-black-2 font-degular text-[14px] font-medium"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-degular text-black-2 font-semibold text-[16px]">
                  Transaction type
                </label>
                <div className="w-full bg-graylight h-[48px] rounded-[12px]">
                  <span className="flex justify-start items-center px-4 pt-3 absolute">
                    {checkedItems.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </span>
                  <span
                    className={`flex justify-end px-4 cursor-pointer pt-4 ${expandIconClass}`}
                    onClick={toggleCard}
                  >
                    {" "}
                    <Expand />
                  </span>
                </div>
                {showCard && (
                  <div className="bg-white p-4 pt-2 rounded-lg h-[] w-[412px] shadow-lg flex flex-col ">
                    {/* Your card content here */}
                    <div className="flex flex-row gap-3">
                      <input
                        type="checkbox"
                        name="storeTransaction"
                        checked={checkboxes.storeTransaction}
                        onChange={handleCheckboxChange}
                      />{" "}
                      <p className="font-degular text-[16px] font-semibold text-black-2">
                        Store Transaction
                      </p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <input
                        type="checkbox"
                        name="getTipped"
                        checked={checkboxes.getTipped}
                        onChange={handleCheckboxChange}
                      />{" "}
                      <p className="font-degular text-[16px] font-semibold text-black-2">
                        Get Tipped
                      </p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <input
                        type="checkbox"
                        name="withdrawals"
                        checked={checkboxes.withdrawals}
                        onChange={handleCheckboxChange}
                      />{" "}
                      <p className="font-degular text-[16px] font-semibold text-black-2">
                        Withdrawals
                      </p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <input
                        type="checkbox"
                        name="chargebacks"
                        checked={checkboxes.chargebacks}
                        onChange={handleCheckboxChange}
                      />{" "}
                      <p className="font-degular text-[16px] font-semibold text-black-2">
                        Charge backs
                      </p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <input
                        type="checkbox"
                        name="cashbacks"
                        checked={checkboxes.cashbacks}
                        onChange={handleCheckboxChange}
                      />{" "}
                      <p className="font-degular text-[16px] font-semibold text-black-2">
                        Cash Backs
                      </p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <input
                        className="bg-black"
                        type="checkbox"
                        name="referAndEarn"
                        checked={checkboxes.referAndEarn}
                        onChange={handleCheckboxChange}
                      />{" "}
                      <p className="font-degular text-[16px] font-semibold text-black-2">
                        Refer & Earn
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <label className="font-degular text-black-2 font-semibold text-[16px]">
                  Transaction status
                </label>
                <div className="w-full bg-graylight h-[48px] rounded-[12px]">
                  <span className="flex justify-start items-center px-4 pt-3 absolute">
                    {checkedItemss.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </span>
                  <span
                    className={`flex justify-end px-4 cursor-pointer pt-4 ${expandIconClasss}`}
                    onClick={toggleCards}
                  >
                    {" "}
                    <Expand />
                  </span>
                </div>
                {showCards && (
                  <div className="bg-white p-4 pt-2 rounded-lg h-[] w-[412px] shadow-lg flex flex-col ">
                    {/* Your card content here */}
                    <div className="flex flex-row gap-3">
                      <input
                        type="checkbox"
                        name="successful"
                        checked={checkboxess.succesful}
                        onChange={handleCheckboxChanges}
                      />{" "}
                      <p className="font-degular text-[16px] font-semibold text-black-2">
                        succesful
                      </p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <input
                        type="checkbox"
                        name="pending"
                        checked={checkboxess.pending}
                        onChange={handleCheckboxChange}
                      />{" "}
                      <p className="font-degular text-[16px] font-semibold text-black-2">
                        pending
                      </p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <input
                        type="checkbox"
                        name="failed"
                        checked={checkboxess.failed}
                        onChange={handleCheckboxChanges}
                      />{" "}
                      <p className="font-degular text-[16px] font-semibold text-black-2">
                        failed
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="w-[107px] h-[48px] bg-graylight rounded-[100px]"
        onClick={openModal}
      >
        <div className="flex flex-row justify-center items-center gap-2 pt-3 cursor-pointer">
          <p className="font-degular text-[16px] text-black font-semibold">
            Filter
          </p>
          <Expand />
        </div>
      </div>
    </>
  );
};
