import React from "react";

type Props = {};
const Notification = (props: Props) => {
  return (
    <>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="20" fill="white" />
        <mask
          id="mask0_9901_1232"
          maskUnits="userSpaceOnUse"
          x="10"
          y="10"
          width="20"
          height="20"
        >
          <rect x="10" y="10" width="20" height="20" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0_9901_1232)">
          <path
            d="M14.375 25.7371C14.1979 25.7371 14.0495 25.6772 13.9297 25.5574C13.8099 25.4375 13.75 25.289 13.75 25.1119C13.75 24.9347 13.8099 24.7863 13.9297 24.6666C14.0495 24.547 14.1979 24.4872 14.375 24.4872H15.2564V18.2692C15.2564 17.1485 15.6023 16.1576 16.2941 15.2964C16.9858 14.4353 17.8739 13.8846 18.9583 13.6442V13.125C18.9583 12.8356 19.0595 12.5897 19.2619 12.3871C19.4642 12.1846 19.71 12.0833 19.999 12.0833C20.2881 12.0833 20.5342 12.1846 20.7371 12.3871C20.9401 12.5897 21.0416 12.8356 21.0416 13.125V13.6442C22.126 13.8846 23.0141 14.4353 23.7059 15.2964C24.3977 16.1576 24.7435 17.1485 24.7435 18.2692V24.4872H25.625C25.802 24.4872 25.9505 24.5471 26.0703 24.6669C26.1901 24.7868 26.25 24.9353 26.25 25.1124C26.25 25.2896 26.1901 25.438 26.0703 25.5576C25.9505 25.6773 25.802 25.7371 25.625 25.7371H14.375ZM19.9986 28.0769C19.5839 28.0769 19.2294 27.9294 18.9351 27.6344C18.6408 27.3394 18.4936 26.9847 18.4936 26.5705H21.5064C21.5064 26.9861 21.3587 27.341 21.0635 27.6354C20.7682 27.9297 20.4132 28.0769 19.9986 28.0769ZM16.5064 24.4872H23.4936V18.2692C23.4936 17.3044 23.1525 16.481 22.4703 15.7988C21.7882 15.1167 20.9647 14.7756 20 14.7756C19.0352 14.7756 18.2118 15.1167 17.5296 15.7988C16.8475 16.481 16.5064 17.3044 16.5064 18.2692V24.4872Z"
            fill="#56616B"
          />
        </g>
      </svg>
    </>
  );
};

export default Notification;
