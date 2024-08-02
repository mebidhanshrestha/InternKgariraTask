import React, { useState } from "react";
import "../sass/Hero.scss";
import Button from "../components/Button";

function hero({ image, heading }) {
  const [like, setLike] = useState(false);
  const styles = {
    color: 'black'
  }
  return (
    <div className="Hero">
      <img src={image} alt="" />
      <div className="like">
        <p onClick={()=> setLike(!like)}>
        {like ? (
          <i class="fa-solid fa-heart" style={styles}></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
        </p>
       
      </div>
      <div className="side">
        <div className="first">
          <p>Featured event</p>
        </div>
        <div className="second">
          <p>{heading}</p>
          <div className="inner-second">
            <div className="st">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.0142 8.13067C4.19128 8.13067 3.40206 8.46288 2.82017 9.05421C2.23827 9.64554 1.91137 10.4476 1.91137 11.2838V11.7883C1.91137 11.9973 1.74467 12.1667 1.53903 12.1667C1.33339 12.1667 1.16669 11.9973 1.16669 11.7883V11.2838C1.16669 10.2469 1.57205 9.25235 2.2936 8.5191C3.01515 7.78585 3.99378 7.37392 5.0142 7.37392C6.03463 7.37392 7.01326 7.78585 7.73481 8.5191C8.45636 9.25235 8.86172 10.2469 8.86172 11.2838V11.7883C8.86172 11.9973 8.69502 12.1667 8.48938 12.1667C8.28374 12.1667 8.11704 11.9973 8.11704 11.7883V11.2838C8.11704 10.4476 7.79014 9.64554 7.20824 9.05421C6.62635 8.46288 5.83713 8.13067 5.0142 8.13067Z"
                  fill="#121212"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.97874 6.61716C9.41916 6.61716 8.88249 6.84306 8.4868 7.24516C8.09111 7.64727 7.86881 8.19264 7.86881 8.7613C7.86881 8.97028 7.70211 9.13968 7.49647 9.13968C7.29084 9.13968 7.12413 8.97028 7.12413 8.7613C7.12413 7.99194 7.42489 7.25408 7.96023 6.71006C8.49557 6.16603 9.22165 5.8604 9.97874 5.8604C10.3536 5.8604 10.7248 5.93544 11.0712 6.08122C11.4175 6.227 11.7322 6.44068 11.9973 6.71006C12.2623 6.97943 12.4726 7.29922 12.6161 7.65118C12.7595 8.00313 12.8334 8.38035 12.8334 8.7613V9.01356C12.8334 9.22253 12.6667 9.39193 12.461 9.39193C12.2554 9.39193 12.0887 9.22253 12.0887 9.01356V8.7613C12.0887 8.47973 12.0341 8.20091 11.9281 7.94077C11.822 7.68063 11.6666 7.44427 11.4707 7.24516C11.2748 7.04606 11.0422 6.88812 10.7862 6.78037C10.5302 6.67262 10.2558 6.61716 9.97874 6.61716Z"
                  fill="#121212"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.66232 3.3875C9.01146 3.0327 9.48499 2.83337 9.97874 2.83337C10.4725 2.83337 10.946 3.0327 11.2952 3.3875C11.6443 3.7423 11.8404 4.22351 11.8404 4.72527C11.8404 5.22703 11.6443 5.70824 11.2952 6.06304C10.946 6.41783 10.4725 6.61716 9.97874 6.61716C9.48499 6.61716 9.01146 6.41783 8.66232 6.06304C8.31318 5.70824 8.11704 5.22703 8.11704 4.72527C8.11704 4.22351 8.31318 3.7423 8.66232 3.3875ZM9.97874 3.59013C9.68249 3.59013 9.39837 3.70973 9.18889 3.9226C8.97941 4.13548 8.86172 4.42421 8.86172 4.72527C8.86172 5.02632 8.97941 5.31505 9.18889 5.52793C9.39837 5.74081 9.68249 5.8604 9.97874 5.8604C10.275 5.8604 10.5591 5.74081 10.7686 5.52793C10.9781 5.31505 11.0958 5.02632 11.0958 4.72527C11.0958 4.42421 10.9781 4.13548 10.7686 3.9226C10.5591 3.70973 10.275 3.59013 9.97874 3.59013ZM3.34674 4.03977C3.78898 3.59036 4.38878 3.33788 5.0142 3.33788C5.63963 3.33788 6.23943 3.59036 6.68167 4.03977C7.12391 4.48918 7.37236 5.09871 7.37236 5.73428C7.37236 6.36984 7.12391 6.97937 6.68167 7.42878C6.23943 7.8782 5.63963 8.13067 5.0142 8.13067C4.38878 8.13067 3.78898 7.8782 3.34674 7.42878C2.9045 6.97937 2.65605 6.36984 2.65605 5.73428C2.65605 5.09871 2.9045 4.48918 3.34674 4.03977ZM5.0142 4.09464C4.58628 4.09464 4.17589 4.26738 3.87331 4.57487C3.57072 4.88237 3.40073 5.29942 3.40073 5.73428C3.40073 6.16913 3.57072 6.58618 3.87331 6.89368C4.17589 7.20117 4.58628 7.37392 5.0142 7.37392C5.44212 7.37392 5.85252 7.20117 6.1551 6.89368C6.45769 6.58618 6.62768 6.16913 6.62768 5.73428C6.62768 5.29942 6.45769 4.88237 6.1551 4.57487C5.85252 4.26738 5.44212 4.09464 5.0142 4.09464Z"
                  fill="#121212"
                />
              </svg>
              <p>1974 AD, Sajan Raj, Trishna Gurung</p>
            </div>
            <div className="nd">
              <div className="one">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.33142 3.35243C2.74455 3.43136 2.40652 3.57938 2.15985 3.82627C1.91296 4.07295 1.76467 4.41123 1.68574 4.99811C1.60512 5.59756 1.60419 6.38779 1.60419 7.50004V8.66671C1.60419 9.77895 1.60512 10.5692 1.68574 11.1686C1.76467 11.7555 1.91269 12.0935 2.15958 12.3402C2.40626 12.5871 2.74455 12.7354 3.33142 12.8143C3.93088 12.8949 4.72111 12.8959 5.83335 12.8959H8.16669C9.27893 12.8959 10.0692 12.8949 10.6686 12.8143C11.2555 12.7354 11.5935 12.5874 11.8402 12.3405C12.0871 12.0938 12.2354 11.7555 12.3143 11.1686C12.3949 10.5692 12.3959 9.77895 12.3959 8.66671V7.50004C12.3959 6.38779 12.3949 5.59756 12.3143 4.99811C12.2354 4.41123 12.0873 4.07321 11.8405 3.82653C11.5938 3.57964 11.2555 3.43136 10.6686 3.35243C10.0692 3.2718 9.27893 3.27087 8.16669 3.27087H5.83335C4.72111 3.27087 3.93088 3.2718 3.33142 3.35243ZM5.80043 2.39587H8.19961C9.27156 2.39586 10.1207 2.39586 10.7853 2.48524C11.469 2.5772 12.0226 2.77096 12.4589 3.20755C12.8957 3.64395 13.0895 4.19756 13.1815 4.88147C13.2709 5.54602 13.2709 6.39516 13.2709 7.46711V8.69964C13.2709 9.77158 13.2709 10.6207 13.1815 11.2853C13.0895 11.9691 12.8957 12.5227 12.459 12.9591C12.0227 13.3958 11.4691 13.5895 10.7853 13.6815C10.1207 13.7709 9.27156 13.7709 8.19962 13.7709H5.80042C4.72848 13.7709 3.87933 13.7709 3.21479 13.6815C2.53087 13.5895 1.97727 13.3957 1.54086 12.9589C1.10427 12.5226 0.910515 11.9691 0.81855 11.2853C0.729171 10.6207 0.729178 9.77158 0.729187 8.69963V7.46712C0.729178 6.39517 0.729171 5.54602 0.81855 4.88147C0.910525 4.19763 1.10431 3.64407 1.54099 3.20768C1.97738 2.771 2.53094 2.57721 3.21479 2.48524C3.87934 2.39586 4.72848 2.39586 5.80043 2.39587Z"
                    fill="#121212"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.08335 1.52087C4.32498 1.52087 4.52085 1.71675 4.52085 1.95837V2.83337C4.52085 3.075 4.32498 3.27087 4.08335 3.27087C3.84173 3.27087 3.64585 3.075 3.64585 2.83337V1.95837C3.64585 1.71675 3.84173 1.52087 4.08335 1.52087ZM9.91669 1.52087C10.1583 1.52087 10.3542 1.71675 10.3542 1.95837V2.83337C10.3542 3.075 10.1583 3.27087 9.91669 3.27087C9.67506 3.27087 9.47919 3.075 9.47919 2.83337V1.95837C9.47919 1.71675 9.67506 1.52087 9.91669 1.52087ZM1.02085 5.75004C1.02085 5.50842 1.21673 5.31254 1.45835 5.31254H12.5417C12.7833 5.31254 12.9792 5.50842 12.9792 5.75004C12.9792 5.99167 12.7833 6.18754 12.5417 6.18754H1.45835C1.21673 6.18754 1.02085 5.99167 1.02085 5.75004Z"
                    fill="#121212"
                  />
                  <path
                    d="M10.5 10.4167C10.5 10.5714 10.4386 10.7198 10.3292 10.8292C10.2198 10.9386 10.0714 11 9.91669 11C9.76198 11 9.6136 10.9386 9.50421 10.8292C9.39481 10.7198 9.33335 10.5714 9.33335 10.4167C9.33335 10.262 9.39481 10.1136 9.50421 10.0042C9.6136 9.89483 9.76198 9.83337 9.91669 9.83337C10.0714 9.83337 10.2198 9.89483 10.3292 10.0042C10.4386 10.1136 10.5 10.262 10.5 10.4167ZM10.5 8.08337C10.5 8.23808 10.4386 8.38646 10.3292 8.49585C10.2198 8.60525 10.0714 8.66671 9.91669 8.66671C9.76198 8.66671 9.6136 8.60525 9.50421 8.49585C9.39481 8.38646 9.33335 8.23808 9.33335 8.08337C9.33335 7.92866 9.39481 7.78029 9.50421 7.6709C9.6136 7.5615 9.76198 7.50004 9.91669 7.50004C10.0714 7.50004 10.2198 7.5615 10.3292 7.6709C10.4386 7.78029 10.5 7.92866 10.5 8.08337ZM7.58335 10.4167C7.58335 10.5714 7.5219 10.7198 7.4125 10.8292C7.3031 10.9386 7.15473 11 7.00002 11C6.84531 11 6.69694 10.9386 6.58754 10.8292C6.47815 10.7198 6.41669 10.5714 6.41669 10.4167C6.41669 10.262 6.47815 10.1136 6.58754 10.0042C6.69694 9.89483 6.84531 9.83337 7.00002 9.83337C7.15473 9.83337 7.3031 9.89483 7.4125 10.0042C7.5219 10.1136 7.58335 10.262 7.58335 10.4167ZM7.58335 8.08337C7.58335 8.23808 7.5219 8.38646 7.4125 8.49585C7.3031 8.60525 7.15473 8.66671 7.00002 8.66671C6.84531 8.66671 6.69694 8.60525 6.58754 8.49585C6.47815 8.38646 6.41669 8.23808 6.41669 8.08337C6.41669 7.92866 6.47815 7.78029 6.58754 7.6709C6.69694 7.5615 6.84531 7.50004 7.00002 7.50004C7.15473 7.50004 7.3031 7.5615 7.4125 7.6709C7.5219 7.78029 7.58335 7.92866 7.58335 8.08337ZM4.66669 10.4167C4.66669 10.5714 4.60523 10.7198 4.49583 10.8292C4.38644 10.9386 4.23806 11 4.08335 11C3.92864 11 3.78027 10.9386 3.67088 10.8292C3.56148 10.7198 3.50002 10.5714 3.50002 10.4167C3.50002 10.262 3.56148 10.1136 3.67088 10.0042C3.78027 9.89483 3.92864 9.83337 4.08335 9.83337C4.23806 9.83337 4.38644 9.89483 4.49583 10.0042C4.60523 10.1136 4.66669 10.262 4.66669 10.4167ZM4.66669 8.08337C4.66669 8.23808 4.60523 8.38646 4.49583 8.49585C4.38644 8.60525 4.23806 8.66671 4.08335 8.66671C3.92864 8.66671 3.78027 8.60525 3.67088 8.49585C3.56148 8.38646 3.50002 8.23808 3.50002 8.08337C3.50002 7.92866 3.56148 7.78029 3.67088 7.6709C3.78027 7.5615 3.92864 7.50004 4.08335 7.50004C4.23806 7.50004 4.38644 7.5615 4.49583 7.6709C4.60523 7.78029 4.66669 7.92866 4.66669 8.08337Z"
                    fill="#121212"
                  />
                </svg>
                <p>Apr 5, 2024</p>
              </div>
              <div className="two">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.00002 2.10413C5.56896 2.10413 4.19651 2.67261 3.18459 3.68453C2.17268 4.69644 1.60419 6.0689 1.60419 7.49996C1.60419 8.93102 2.17268 10.3035 3.18459 11.3154C4.19651 12.3273 5.56896 12.8958 7.00002 12.8958C8.43108 12.8958 9.80353 12.3273 10.8154 11.3154C11.8274 10.3035 12.3959 8.93102 12.3959 7.49996C12.3959 6.0689 11.8274 4.69644 10.8154 3.68453C9.80353 2.67261 8.43108 2.10413 7.00002 2.10413ZM0.729187 7.49996C0.729187 4.03671 3.53677 1.22913 7.00002 1.22913C10.4633 1.22913 13.2709 4.03671 13.2709 7.49996C13.2709 10.9632 10.4633 13.7708 7.00002 13.7708C3.53677 13.7708 0.729187 10.9632 0.729187 7.49996ZM7.00002 4.72913C7.11605 4.72913 7.22733 4.77522 7.30938 4.85727C7.39143 4.93931 7.43752 5.05059 7.43752 5.16663V7.31913L8.76752 8.64913C8.8105 8.68918 8.84498 8.73748 8.86889 8.79115C8.8928 8.84481 8.90566 8.90274 8.9067 8.96149C8.90773 9.02023 8.89693 9.07858 8.87492 9.13306C8.85292 9.18753 8.82017 9.23702 8.77863 9.27856C8.73708 9.32011 8.6876 9.35286 8.63312 9.37486C8.57864 9.39687 8.52029 9.40767 8.46155 9.40664C8.40281 9.4056 8.34487 9.39274 8.29121 9.36883C8.23754 9.34492 8.18924 9.31044 8.14919 9.26746L6.69085 7.80913C6.60878 7.72716 6.56262 7.61595 6.56252 7.49996V5.16663C6.56252 5.05059 6.60861 4.93931 6.69066 4.85727C6.77271 4.77522 6.88399 4.72913 7.00002 4.72913Z"
                    fill="#121212"
                  />
                </svg>
                <p>06:00 pm</p>
              </div>
            </div>
            <div className="rd">
              <div className="location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                    d="M6.41636 8.33329C5.99683 8.33329 5.58671 8.21111 5.23788 7.98219C4.88905 7.75327 4.61717 7.4279 4.45662 7.04722C4.29607 6.66654 4.25406 6.24765 4.33591 5.84352C4.41776 5.43939 4.61978 5.06818 4.91644 4.77682C5.2131 4.48546 5.59106 4.28704 6.00253 4.20666C6.41401 4.12627 6.84051 4.16753 7.22811 4.32521C7.61571 4.48289 7.947 4.74992 8.18008 5.09252C8.41317 5.43512 8.53757 5.83791 8.53757 6.24996C8.5369 6.80229 8.3132 7.33181 7.91554 7.72237C7.51788 8.11293 6.97873 8.33263 6.41636 8.33329ZM6.41636 4.99996C6.16464 4.99996 5.91857 5.07327 5.70927 5.21062C5.49997 5.34797 5.33685 5.5432 5.24052 5.7716C5.14419 6.00001 5.11898 6.25135 5.16809 6.49382C5.2172 6.7363 5.33841 6.95903 5.51641 7.13384C5.6944 7.30866 5.92118 7.42771 6.16807 7.47594C6.41495 7.52417 6.67085 7.49942 6.90341 7.40481C7.13597 7.3102 7.33475 7.14998 7.4746 6.94442C7.61444 6.73886 7.68909 6.49719 7.68909 6.24996C7.68875 5.91854 7.55455 5.60079 7.31594 5.36644C7.07733 5.13209 6.75381 5.00029 6.41636 4.99996Z"
                    fill="#22292F"
                  />
                  <path
                    d="M6.41636 13.3333L2.83746 9.18788C2.78773 9.12563 2.73851 9.06299 2.68982 8.99996C2.07848 8.20903 1.74822 7.24297 1.7497 6.24996C1.7497 5.03438 2.24136 3.86859 3.11653 3.00905C3.9917 2.14951 5.17869 1.66663 6.41636 1.66663C7.65404 1.66663 8.84102 2.14951 9.71619 3.00905C10.5914 3.86859 11.083 5.03438 11.083 6.24996C11.0845 7.24252 10.7544 8.20815 10.1433 8.99871L10.1429 8.99996C10.1429 8.99996 10.0156 9.16413 9.99654 9.18621L6.41636 13.3333ZM3.36733 8.49788C3.36733 8.49788 3.46618 8.62621 3.48867 8.65371L6.41636 12.045L9.34787 8.64913C9.36654 8.62621 9.46624 8.49663 9.46624 8.49663C9.96563 7.85042 10.2355 7.06122 10.2345 6.24996C10.2345 5.2554 9.83227 4.30157 9.11622 3.59831C8.40017 2.89505 7.429 2.49996 6.41636 2.49996C5.40372 2.49996 4.43255 2.89505 3.7165 3.59831C3.00045 4.30157 2.59818 5.2554 2.59818 6.24996C2.59729 7.06173 2.86748 7.85138 3.36733 8.49788Z"
                    fill="#22292F"
                  />
                </svg>
              </div>
              <p>Address Lounge, Kapan, Nepal</p>
            </div>
          </div>
        </div>
        <Button name={"Buy Ticket"} color={"dark"} />
      </div>
    </div>
  );
}

export default hero;
