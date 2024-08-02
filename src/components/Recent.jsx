import React from "react";
import "../sass/Recent.scss";
import RecentImg from "../assets/recent.png";

function Recent({ image, text }) {
  return (
    <div className="Recent">
      <div className="hello">
        <img src={RecentImg} alt="recent img" />
        <p>APRIL ETHEREAL</p>
      </div>
      <div className="crossContainer">
        <div className="cross">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <g clipPath="url(#clip0_1_418)">
              <path
                d="M6.72885 7.33334L4.00216 4.60412L1.27548 7.33334L0.666687 6.72494L3.39766 4L0.666687 1.27507L1.27548 0.666672L4.00216 3.39589L6.72885 0.670956L7.33335 1.27507L4.60667 4L7.33335 6.72494L6.72885 7.33334Z"
                fill="#212529"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_418">
                <rect width="8" height="8" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Recent;
