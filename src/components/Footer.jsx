import React from "react";
import "../sass/Footer.scss";
import logo from "../assets/logo.png";
import esewa from "../assets/esewa.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import tiktok from "../assets/tiktok.png";

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-info">
          <div className="main-first">
            <div className="footer-first">
              <img src={logo} alt="logo" />
              <div className="exclusive">
                <p>Exclusive Payment Partner</p>
                <img src={esewa} alt="esewa" />
              </div>
            </div>
            <div className="footer-second">
              <div className="first">
                <h3>Company</h3>
                <div>
                  <a href="#">About us</a>
                  <a href="#">Blog</a>
                  <a href="#">Contact us</a>
                </div>
              </div>
              <div className="first">
                <h3>Policy</h3>
                <div>
                <a href="#">Terms and Condition</a>
                <a href="#">Privacy Pilicy</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Refund Policy</a>
                </div>
              </div>
              <div className="first">
                <h3>Contact Us</h3>
                <div>
                  <p id="last">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M7.00004 7.83341C6.58051 7.83341 6.17039 7.71123 5.82156 7.48231C5.47273 7.25339 5.20085 6.92802 5.0403 6.54734C4.87975 6.16666 4.83774 5.74777 4.91959 5.34364C5.00144 4.93952 5.20346 4.5683 5.50012 4.27694C5.79678 3.98558 6.17474 3.78716 6.58621 3.70678C6.99769 3.62639 7.42419 3.66765 7.81179 3.82533C8.19939 3.98301 8.53068 4.25004 8.76376 4.59264C8.99684 4.93525 9.12125 5.33804 9.12125 5.75008C9.12058 6.30241 8.89688 6.83193 8.49922 7.22249C8.10156 7.61305 7.56241 7.83275 7.00004 7.83341ZM7.00004 4.50008C6.74832 4.50008 6.50225 4.57339 6.29295 4.71074C6.08365 4.8481 5.92052 5.04332 5.8242 5.27173C5.72787 5.50013 5.70266 5.75147 5.75177 5.99394C5.80088 6.23642 5.92209 6.45915 6.10009 6.63397C6.27808 6.80878 6.50486 6.92783 6.75174 6.97606C6.99863 7.02429 7.25453 6.99954 7.48709 6.90493C7.71965 6.81032 7.91843 6.65011 8.05827 6.44454C8.19812 6.23898 8.27277 5.99731 8.27277 5.75008C8.27243 5.41866 8.13823 5.10091 7.89962 4.86656C7.66101 4.63221 7.33749 4.50041 7.00004 4.50008Z"
                        fill="#ADB5BD"
                      />
                      <path
                        d="M7.00004 12.8334L3.42114 8.688C3.37141 8.62575 3.32219 8.56311 3.2735 8.50008C2.66216 7.70916 2.3319 6.74309 2.33338 5.75008C2.33338 4.53451 2.82504 3.36872 3.70021 2.50918C4.57538 1.64963 5.76236 1.16675 7.00004 1.16675C8.23772 1.16675 9.4247 1.64963 10.2999 2.50918C11.175 3.36872 11.6667 4.53451 11.6667 5.75008C11.6682 6.74264 11.3381 7.70827 10.727 8.49883L10.7266 8.50008C10.7266 8.50008 10.5993 8.66425 10.5802 8.68633L7.00004 12.8334ZM3.95101 7.998C3.95101 7.998 4.04986 8.12633 4.07235 8.15383L7.00004 11.5451L9.93155 8.14925C9.95022 8.12633 10.0499 7.99675 10.0499 7.99675C10.5493 7.35055 10.8192 6.56134 10.8182 5.75008C10.8182 4.75552 10.4159 3.80169 9.6999 3.09843C8.98385 2.39517 8.01268 2.00008 7.00004 2.00008C5.9874 2.00008 5.01623 2.39517 4.30018 3.09843C3.58413 3.80169 3.18186 4.75552 3.18186 5.75008C3.18097 6.56185 3.45116 7.3515 3.95101 7.998Z"
                        fill="#ADB5BD"
                      />
                    </svg>
                    <span>Kumaripati Lalitpur</span>
                  </p>
                  <p id="last">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M2.33329 11.6666C2.01246 11.6666 1.7379 11.5524 1.50963 11.3242C1.28135 11.0959 1.16701 10.8211 1.16663 10.4999V3.49992C1.16663 3.17909 1.28096 2.90453 1.50963 2.67625C1.73829 2.44797 2.01285 2.33364 2.33329 2.33325H11.6666C11.9875 2.33325 12.2622 2.44759 12.4909 2.67625C12.7195 2.90492 12.8337 3.17947 12.8333 3.49992V10.4999C12.8333 10.8208 12.7192 11.0955 12.4909 11.3242C12.2626 11.5528 11.9878 11.667 11.6666 11.6666H2.33329ZM6.99996 7.58325L2.33329 4.66659V10.4999H11.6666V4.66659L6.99996 7.58325ZM6.99996 6.41659L11.6666 3.49992H2.33329L6.99996 6.41659ZM2.33329 4.66659V3.49992V10.4999V4.66659Z"
                        fill="#ADB5BD"
                      />
                    </svg>
                    <span>tickets@kgarira.com</span>
                  </p>
                  <p id="last">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M9.17063 8.73984L9.44342 8.46844L8.80989 7.83098L8.5383 8.10238L9.17063 8.73984ZM10.3581 8.35461L11.5014 8.97709L11.9291 8.18746L10.7865 7.56558L10.3581 8.35461ZM11.7209 10.2137L10.8714 11.0602L11.5037 11.6971L12.3532 10.8511L11.7209 10.2137ZM10.3533 11.3322C9.4859 11.4137 7.24252 11.3412 4.81249 8.92197L4.17956 9.55883C6.83094 12.1991 9.35489 12.3285 10.4371 12.2273L10.3533 11.3322ZM4.81249 8.92197C2.49673 6.61538 2.11266 4.67605 2.0648 3.83429L1.16865 3.88521C1.22847 4.94445 1.70407 7.09407 4.17956 9.55883L4.81249 8.92197ZM5.63506 5.21944L5.80676 5.0481L5.17502 4.41124L5.00333 4.58198L5.63506 5.21944ZM5.94316 2.87031L5.18938 1.8614L4.4709 2.40061L5.22468 3.40892L5.94316 2.87031ZM2.65227 1.64153L1.71304 2.57615L2.34597 3.21361L3.2846 2.27899L2.65227 1.64153ZM5.3192 4.90071C5.00213 4.58198 5.00213 4.58198 5.00213 4.58318H5.00094L4.99914 4.58558C4.9709 4.61445 4.94546 4.64595 4.92317 4.67964C4.89086 4.72757 4.85557 4.79048 4.82565 4.87016C4.75281 5.07584 4.73466 5.29698 4.77301 5.51181C4.85317 6.03005 5.20972 6.71483 6.12263 7.62429L6.75556 6.98683C5.90068 6.13609 5.69728 5.61845 5.65959 5.37401C5.64165 5.25779 5.66019 5.20027 5.66558 5.18709C5.66857 5.1787 5.66976 5.1781 5.66558 5.1835C5.6603 5.1918 5.65429 5.19962 5.64763 5.20686L5.64164 5.21285C5.63971 5.21472 5.63772 5.21651 5.63566 5.21824L5.3192 4.90071ZM6.12263 7.62429C7.03613 8.53375 7.7235 8.88842 8.24157 8.9675C8.50659 9.00824 8.72016 8.97589 8.88228 8.91538C8.97294 8.88178 9.05773 8.83406 9.13354 8.77399C9.14383 8.76537 9.15381 8.75638 9.16345 8.74703L9.16764 8.74344L9.16943 8.74164L9.17003 8.74044C9.17003 8.74044 9.17063 8.73984 8.85416 8.42111C8.5371 8.10238 8.53889 8.10178 8.53889 8.10178L8.54009 8.10059L8.54129 8.09939L8.54488 8.09639L8.55086 8.0904C8.55805 8.08394 8.56564 8.07793 8.57359 8.07243C8.57957 8.06823 8.57778 8.07003 8.5694 8.07363C8.55445 8.07902 8.49582 8.09759 8.37797 8.07962C8.1303 8.04127 7.60984 7.83757 6.75556 6.98683L6.12263 7.62429ZM5.18938 1.86081C4.57918 1.04601 3.38032 0.916601 2.65227 1.64153L3.2846 2.27899C3.60286 1.96206 4.1676 1.99501 4.4709 2.40061L5.18938 1.86081ZM2.0654 3.83489C2.05344 3.62759 2.14855 3.41072 2.34597 3.21421L1.71244 2.57675C1.39119 2.89667 1.13814 3.34961 1.16865 3.88521L2.0654 3.83489ZM10.8714 11.0602C10.7075 11.2244 10.5304 11.3166 10.3539 11.3328L10.4371 12.2273C10.8768 12.1859 11.2363 11.9643 11.5043 11.6977L10.8714 11.0602ZM5.80676 5.0481C6.39602 4.46156 6.43969 3.53473 5.94375 2.87091L5.22527 3.40952C5.46636 3.73244 5.43047 4.15601 5.17442 4.41184L5.80676 5.0481ZM11.5019 8.97769C11.9907 9.2437 12.0667 9.87037 11.7215 10.2143L12.3544 10.8511C13.1561 10.0525 12.909 8.72067 11.9297 8.18806L11.5019 8.97769ZM9.44342 8.46904C9.67315 8.24018 10.0429 8.18386 10.3587 8.35521L10.7871 7.56617C10.1386 7.2127 9.33455 7.31035 8.81049 7.83158L9.44342 8.46904Z"
                        fill="#ADB5BD"
                      />
                    </svg>
                    <span>9808238043</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="final">
            <p>© Kgarira.com | Powered by Pagoda Labs</p>
            <div>
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
                <img src={tiktok} alt="tiktok" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
